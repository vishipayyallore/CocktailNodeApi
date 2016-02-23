'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var productModel = new Schema({
    id: {type: String},
    name: {type: String},
    manufacturer: {type: String},
    price: {type: Number, default: 10.00 },
    inStock: {type: Boolean, default: true}
});

module.exports = mongoose.model('Product', productModel);  
