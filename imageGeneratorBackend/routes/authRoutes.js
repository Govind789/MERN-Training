const express = require("express");
const { signup,login} = require('../controllers/authControllers.js');
const authRouter = express.Router();

authRouter.route('/api/v1/auth/signup')
    .post(signup)


authRouter.route('/api/v1/auth/login')
    .post(login)

module.exports = authRouter;