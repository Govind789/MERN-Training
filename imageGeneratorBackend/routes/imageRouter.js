const express = require('express');
const ImageRouter = express.Router();
const {generateImage} = require('../controllers/imageControllers.js');

ImageRouter.route('/api/v1/images')
    .post(generateImage);

module.exports = ImageRouter;

