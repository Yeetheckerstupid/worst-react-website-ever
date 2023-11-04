const express = require('express');
const loginController = require('../controllers/loginController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/login').post(loginController.login);

module.exports = router;
