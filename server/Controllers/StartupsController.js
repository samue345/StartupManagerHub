const Startup = require('../models/Startup');

const StartupController = []

StartupController.token = async (req, res) =>
{
    try
    {
    
        Startup = await Startup.findOne({ _id: req.body.StartupID }).lean()
        .select('_id nome picture email count_seguidores count_seguindo bio');

        res.status(200).json(
        { 
            accessToken: req.headers.accesstoken, 
            result: Startup 
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
  
        console.log(req.body)
      /*
        if(await Startup.findOne({email: newStartup.email})) 
           return res.status(400).json({status: 401})
    
    */
         
       } catch (error) {
         console.error('Erro ao criar usuário:', error);
         res.status(500).json({ error: 'Erro interno do servidor' });
       }
}


StartupController.login = async (req, res) => {


    try {   
        
       const startup = await Startup.findOne({email: req.body.email})
       if(!user)
       {
           return res.status(500).json({
               status: 500,
               message: "erro",
           })
       }
       
       bcrypt.compare(req.body.senha, startup.senha, async function(err, result) {
    
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
             
    } catch (error) {
       console.error(error)
       res.status(500).json({
           status: 500,
           message: message.error
       })
    }
    
}

module.exports = StartupController;