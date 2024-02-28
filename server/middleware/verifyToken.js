const jwt = require('jsonwebtoken');
const Token = require('../db/models/Token');


function verifyToken(req, res, next)
{
  const accessToken = req.headers.accesstoken;
  const reqType = req.body.reqType;
  if (!accessToken)
  {
    return res.status(400).send(
    { 
      auth: false,
      header: "Failed to perform action", 
      message: "You are not currently authtenticated. Please, log in to continue." 
    })
  }
  jwt.verify(accessToken, process.env.JWT_SECRET_KEY, (accessError, accessDecoded) =>
  {


    if (accessError && accessError.name === 'TokenExpiredError')
    {

      const refreshToken = req.headers.refreshtoken;
      if (!refreshToken)
      {
        return res.status(400).send(
        { 
          auth: false, 
          header: "Failed to perform action",
          message: "You are not currently authtenticated. Please, log in to continue." 
        })
      }
       

      jwt.verify(refreshToken, process.env.JWT_REFRESH, async (refreshError, refreshDecoded) => 
      {
        if (refreshError)
        {
          return res.status(400).send(
          { 
            auth: false,
            header: "Failed to perform action", 
            message: "Your current session expired. Please, log in to continue." 
          })
        }
    
        if (await Token.findOne({ token: refreshToken, userID: refreshDecoded._id }))
        {
    
          const newAccessToken = jwt.sign({ _id: refreshDecoded._id }, process.env.JWT_SECRET_KEY, { expiresIn: '15m' })
          req.newAccessToken = newAccessToken;

          if (reqType === 'login')
            req.body.userID = refreshDecoded._id;
          
          await Token.updateOne({ token: refreshToken, userID: refreshDecoded._id }, { $set: { lastUsed: Date.now() } })            
          next();
        }
        else
        {
          return res.status(401).send(
          { 
            auth: false,
            header: "Failed to perform action",
            message: "Failed to authenticate access token. Please, log in to continue." 
          })
        }

      })
    }
    else if (accessError)
    {
      return res.status(401).send(
      { 
        auth: false, 
        header: "Failed to perform action",
        message: "Failed to authenticate access token. Please, log in to continue." 
      })
    }
    else
    {
      if (reqType === 'login')
        req.body.userID = accessDecoded._id;

      next();
    }


  })

}

module.exports = {verifyToken};