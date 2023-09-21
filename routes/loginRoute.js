const express = require('express');
const loginRouter = express.Router();

const loginContorller = require('../controllers/loginController')

// Login Routes
loginRouter.post('/login_v1',loginContorller.loginControllerDetails);

module.exports = { loginRouter };
