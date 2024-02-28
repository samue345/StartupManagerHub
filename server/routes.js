const express = require('express');
const router = express.Router();
const guestRouter = express.Router();
const authRouter = express.Router();


router.use('/a', authRouter);
router.use('/g', guestRouter);

module.exports = router;
