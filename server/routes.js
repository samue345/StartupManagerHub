const express = require('express');
const {verifyToken}  = require('./middleware/VerifyToken');
const startupsController = require('./factories/StartupsFactory')
const router = express.Router();
const guestRouter = express.Router();
const authRouter = express.Router();
authRouter.use(verifyToken);

guestRouter.post('/startup/delete', startupsController.delete);

authRouter.post('/startup/token', startupsController.token);
authRouter.post('/startup/logout', startupsController.logout);

guestRouter.post('/startup/login', async (req, res) => {
 
      const startupService = startupsController.login()
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

guestRouter.post('/startup/register', startupsController.register);


router.use('/a', authRouter);
router.use('/g', guestRouter);

module.exports = router;
