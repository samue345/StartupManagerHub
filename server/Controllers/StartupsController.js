const Startup = require('../models/Startup');
const Token = require('../models/Token');

var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const StartupController = []

StartupController.token = async (req, res) =>
{
    try
    {
    
        const startup = await Startup.findOne({ _id: req.body.startupID }).lean()
        .select('_id nome email');

        res.status(200).json(
        { 
            accessToken: req.headers.accesstoken, 
            result: startup 
        });
    }

    catch (error)
    {
        console.error(error);
        res.status(500).json(
        { 
        header: "Failed to get user",
        message: "Internal server error on getting user" 
        });
    }



    
}

StartupController.register = async (req, res) => {

    try {
  
           const new_startup = {
             nome: req.body.name,
             email: req.body.email,
             senha: req.body.password,  
           };
             
           if(await Startup.findOne({email: new_startup.email}).lean())
              return res.status(400).json({status: 401});


          
           bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(new_startup.senha, salt, async function(err, hash) {
                  
                    new_startup.senha = hash  
                    const startup = await Startup.create(new_startup);
                    const accessToken = jwt.sign({ _id: startup._id }, process.env.JWT_SECRET_KEY, { expiresIn: '15m' })
                    const refreshToken = jwt.sign({ _id: startup._id }, process.env.JWT_REFRESH, { expiresIn: '30d' })
            
                    await Token.create({ token: refreshToken, startupID: startup._id }).catch(err => console.log(err));
    
                    res.status(200).json({   
                        startup,
                        accessToken: accessToken,
                        refreshToken: refreshToken
                    });
             
        
                });
                   
            
            });

         
       } catch (error) {
         console.error('Erro ao criar usuário:', error);
         res.status(500).json({ error: 'Erro interno do servidor' });
       }
}


StartupController.login = async (req, res) => {


    try {   



    
       const startup = await Startup.findOne({email: req.body.email}).lean().select('nome email senha')
       if(!startup)
       {
           return res.status(500).json({
               status: 500,
               message: "erro",
           })
       }

       
       bcrypt.compare(req.body.password, startup.senha, async function(err, result) {

    
           if(result === false)
            return res.status(400).json({status: 400})

           else
           {
             const accessToken = jwt.sign({ _id: startup._id }, process.env.JWT_SECRET_KEY, { expiresIn: '15m' })
             const refreshToken = jwt.sign({ _id: startup._id }, process.env.JWT_REFRESH, { expiresIn: '30d' })
             await Token.create({ token: refreshToken, startupID: startup._id })
             .catch(err => console.log(err))
    
             res.status(200).json({
               startup,
               accessToken: accessToken,
               refreshToken: refreshToken
               });
           }
    
    
    
        }); 

             
    } 
    catch (error) {
       res.status(500).json({
           status: 500,
           message: error
       })
    }
    
}

StartupController.logout = async (req, res) => 
{
  
  try 
  {
    const startupID = req.body.startupID;
    const refreshToken = req.body.refreshToken
    await Token.findOneAndDelete({ token: refreshToken, startupID});

    res.status(200).json({ message: "Logout successful" });

  }

  catch (error)
  {
    console.error(error);
    res.status(500).json(
    { 
      header: "Failed to log out",
      message: "Internal server error on logging out" 
    });
  }
}

StartupController.delete = async (req, res) => 
{
  
  try 
  {
    
    await Token.deleteMany();
    res.status(200).json({ message: "Logout successful" });

  }

  catch (error)
  {
    console.error(error);
    res.status(500).json(
    { 
      header: "Failed to log out",
      message: "Internal server error on logging out" 
    });
  }
}


module.exports = StartupController;