const express = require('express');
const startupsController = require('./Controllers/StartupsController')

const router = express.Router();
const guestRouter = express.Router();
const authRouter = express.Router();


guestRouter.post('/user/form', startupsController.register);
guestRouter.post('/user/auten', startupsController.login);


router.use('/a', authRouter);
router.use('/g', guestRouter);

module.exports = router;
