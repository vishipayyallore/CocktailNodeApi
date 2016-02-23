'use strict';

var productController = function(Product){
    
    //Data Insertion
    var post = function(req, res) {
        var product = new Product(req.body);
        
        if(!req.body.id){
            res.status(400);
            res.send('Product Id is required');
        } else {
            product.save();
            res.status(201);
            res.send(product);
        }
    }
    
    return {
        post: post
    }
    
};

module.exports = productController;