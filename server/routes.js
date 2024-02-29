const express = require('express');
const companysController = require('./Controllers/CompanysController')

const router = express.Router();
const guestRouter = express.Router();
const authRouter = express.Router();


guestRouter.post('/user/form', companysController.register);
guestRouter.post('/user/auten', companysController.login);


router.use('/a', authRouter);
router.use('/g', guestRouter);

module.exports = router;
