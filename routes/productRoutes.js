'use strict';

var express = require('express');

var routes = function(Product){
    
    var productRouter = express.Router();
    var productController = require('../controllers/productcontroller')(Product);
    
    productRouter.route('/')
        .post(productController.post);
    
    return productRouter;
};

module.exports = routes;
