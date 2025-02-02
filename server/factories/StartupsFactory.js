const Token = require('../models/Token');
const StartupRepo = require('../repositories/startup-repositories')
const StartupService = require('../services/StartupService')

const StartupFactory = []

StartupFactory.generateInstanceStartup = () =>
{
    const startupRepo = new StartupRepo();
    const startupService = new StartupService(startupRepo)
    return startupService;
}





StartupFactory.delete = async (req, res) => 
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


module.exports = StartupFactory;