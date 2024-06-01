const express = require('express');
const userController =  require('../controllers/userController.js');
const userRouter = express.Router();


userRouter.route('/')
            .get(userController.getAllUsers)
            .post(userController.addAllUsers)
            .put(userController.replaceUser)
            .patch(userController.modifyUser)
            .delete(userController.deleteUser);


module.exports = userRouter;