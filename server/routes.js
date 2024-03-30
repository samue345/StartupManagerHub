const express = require('express');
const {verifyToken}  = require('./middleware/VerifyToken');
const startupsFactory = require('./factories/StartupsFactory');
const SwtFactory = require('./factories/SwtFactory')
const canvasFactory = require('./factories/CanvasFactory')
const PerguntasFactory = require('./factories/PerguntasFactory')


const router = express.Router();
const guestRouter = express.Router();
const authRouter = express.Router();
authRouter.use(verifyToken);

guestRouter.post('/startup/delete', startupsFactory.delete);

authRouter.post('/startup/token', async (req, res) => {

    const startupService = startupsFactory.generateInstanceStartup();
    const startup = await startupService.token(req.body.startupID);

    res.status(200).json(
    { 
        accessToken: req.headers.accesstoken, 
        result: startup 
    });
 
});


authRouter.post('/startup/logout', async (req, res) => {
 
    const data = {
      startupID: req.body.startupID,
      refreshToken: req.body.refreshToken,
    };


    const startupService = startupsFactory.generateInstanceStartup();
    await startupService.logout(data);
    res.status(200).json({ message: "Logout successful" });

 
  
});


guestRouter.post('/startup/login', async (req, res) => {
 
      const startupService = startupsFactory.generateInstanceStartup()
      const result = await startupService.verificaStartupExiste(req.body.email, req.body.password);
      if(!result){

        return res.status(500).json({
           status: 500,
           message: "erro",
        })
      }
      const startup = result.startup;
      const accessToken = result.accessToken
      const refreshToken = result.refreshToken

      res.status(200).json({   
        startup,
        accessToken,
        refreshToken
     });

});

guestRouter.post('/startup/register', async (req, res) => {
 
    const new_startup = {
      nome: req.body.name,
      email: req.body.email,
      senha: req.body.password,  
    };

    const startupService = startupsFactory.generateInstanceStartup()
    const result = await startupService.register(new_startup);
  
    if(!result)
      return res.status(400).json({status: 401});


    const startup = result.startup;
    const accessToken = result.accessToken
    const refreshToken = result.refreshToken

    res.status(200).json({   
      startup,
      accessToken,
      refreshToken
  });

});


authRouter.post('/swt/create', async (req, res) => {
  const swtService = SwtFactory.generateInstanceSwt();
  await swtService.createSwt(req.body);
  res.status(200).json({ message: "successful" });

});

authRouter.get('/swt/find/:startupID', async (req, res) => {

  const swtService = SwtFactory.generateInstanceSwt();
  const swt = await swtService.findSwt(req.params.startupID);

  return res.status(200).json({
    swt,
    newAccessToken: req.newAccessToken
  });


});


authRouter.post('/canvas/create', async (req, res) => {
  const canvasService = canvasFactory.generateInstanceCanvas();
  await canvasService.createCanvas(req.body);
  res.status(200).json({ message: "successful" });

});

authRouter.get('/canvas/find/:startupID', async (req, res) => {

  const canvasService = canvasFactory.generateInstanceCanvas();
  const canvas = await canvasService.findCanvas(req.params.startupID);

  return res.status(200).json({
    canvas,
    newAccessToken: req.newAccessToken
  });


});

authRouter.post('/pergunta/create', async (req, res) => {

  const perguntasService = PerguntasFactory.generateInstancePerguntas();
  await perguntasService.createPerguntas(req.body);
  res.status(200).json({ message: "successful" });

});

authRouter.get('/pergunta/find/:startupID', async (req, res) => {

  const perguntasService = PerguntasFactory.generateInstancePerguntas();
  const perguntas = await perguntasService.findPerguntas(req.params.startupID);

  return res.status(200).json({
    perguntas,
    newAccessToken: req.newAccessToken
  });


});

router.use('/a', authRouter);
router.use('/g', guestRouter);

module.exports = router;
