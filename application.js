'use strict';

var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var configfile = require('./env.json')

var application = express();

application.use(bodyParser.json());
application.use(bodyParser.urlencoded({
    extended: true
}));

application.get('/api', function(req, res){
    res.send('Welcome to Cocktail NodeJS API!');
});

application.get('/api/HealthCheck', function(req, res){
    res.send('Cocktail NodeJS API -> Health Check is Good!');
});

var portNumber = process.env.PORT || 8091;
var server = application.listen(portNumber, function() {
    console.log('Server running at http://127.0.0.1:'+ portNumber + '/ in Azure (' + process.env.ENV + process.env.MONGO_URI + ') environment' );
});

module.exports = application;