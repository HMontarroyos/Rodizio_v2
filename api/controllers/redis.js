var redis = require('redis');
var client = redis.createClient();
const cars = require('../data/cars');
const controller = require('./controllers');

client.on('connect', function () {
    client.set('total', '1800');
    client.expire('total', 10);
    console.log('BATEU NO CACHE');

    // função get recupera 
    
    

  });
