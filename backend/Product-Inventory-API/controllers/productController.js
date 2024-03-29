const Product = require('../models/productModel');
const generalController = require('./generalControllers');

/////////////////////////////////////////////////////////////////////////////////////////////

exports.getAllProducts = generalController.getAll(Product);
exports.getProduct = generalController.getOne(Product);
exports.deleteProduct = generalController.deleteOne(Product);

/////////////////////////////////////////////////////////////////////////////////////////////
