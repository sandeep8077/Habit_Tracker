const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controllers');
router.get('/', userController.welcome);
router.use('/deshboard', require('./deshboard'));

router.use('/user', require('./user'));
module.exports = router;