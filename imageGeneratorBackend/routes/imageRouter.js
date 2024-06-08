const express = require('express');
const ImageRouter = express.Router();
const {generateImage} = require('../controllers/imageControllers.js');

ImageRouter.route('/generate')
    .post(generateImage);

module.exports = ImageRouter;

