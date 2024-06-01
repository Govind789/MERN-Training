const express = require('express');
const productController = require('../controllers/productControllers.js');

const productRouter = express.Router();

productRouter.route('/')
    .get(productController.getAllProducts)
    .post(productController.addAllProducts);

productRouter.route('/:id')
    .put(productController.replaceProducts)
    .delete(productController.deleteProduct);

module.exports = productRouter