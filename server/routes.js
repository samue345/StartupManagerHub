const express = require('express');
const {verifyToken}  = require('./middleware/VerifyToken');
const startupsController = require('./Controllers/StartupsController')
const router = express.Router();
const guestRouter = express.Router();
const authRouter = express.Router();
authRouter.use(verifyToken);

guestRouter.post('/startup/delete', startupsController.delete);

authRouter.post('/startup/token', startupsController.token);
authRouter.post('/startup/logout', startupsController.logout);
guestRouter.post('/startup/login', startupsController.login);
guestRouter.post('/startup/register', startupsController.register);


router.use('/a', authRouter);
router.use('/g', guestRouter);

module.exports = router;
