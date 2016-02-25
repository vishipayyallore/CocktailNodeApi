'use strict';

var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var config = require('config');

var mongoConnectionString = config.get('env.MONGO_URI');
console.log( mongoConnectionString );
//Mongo Database
var mongoDataStore = mongoose.connect(mongoConnectionString);

var application = express();

application.use(bodyParser.json());
application.use(bodyParser.urlencoded({
    extended: true
}));

application.get('/api', function(req, res){
    res.send('Welcome to Cocktail NodeJS API! ');
});

application.get('/api/HealthCheck', function(req, res){
    res.send('Cocktail NodeJS API -> (Boris) Health Check is Good! ');
});

var Product = require('./models/product');
var productRouter = require('./routes/productRoutes')(Product);
application.use('/api/products', productRouter);

var portNumber = process.env.PORT || 8094;
//var portNumber = normalizePort(config.get('env.PORT') || 8094);
var server = application.listen(portNumber, function() {
    console.log('Server running ...' );
});

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

module.exports = application;