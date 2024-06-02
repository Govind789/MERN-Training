const express = require("express");
const { signup } = require('../controllers/authControllers.js');
const authRouter = express.Router();

authRouter.route('/signup')
    .post(signup)

module.exports = authRouter;