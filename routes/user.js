const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/user_controllers');
router.get('/register', userController.register);
router.get('/login', userController.login);

router.post('/create', userController.create)
router.post('/createSession', passport.authenticate('local', { failureRedirect: '/user/login' }), userController.createSession)
router.get('/logout', userController.destroy);
module.exports = router;