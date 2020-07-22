const cars = require("./cars");
var redis = require("redis");
var client = redis.createClient();
const controller = require("../controllers/controllers");



function clientGet(placa, renavam, callback) {
    
  client.get(`${placa}:${renavam}`, function (err, Cached) {
    if (Cached) {
      const cachedJson = JSON.parse(Cached);
      console.log("BATEU NO CACHE");

      callback.send(cachedJson);
    }     
    
    else {
      console.log("BATEU NO REPOSITORY");

   //   const carsPromisse = new Promise((resolve, reject)=> {

        
    //  })
      
     // .then((cars) => { 


      const carsJSON = JSON.stringify(cars.getCarFilter(placa, renavam));
      if(carsJSON== null || undefined){
          callback.send(JSON.stringify("CARRO NÃO EXISTE"))
      }

      client.setex(`${placa}:${renavam}`, 10, carsJSON);

      callback.send(JSON.stringify(carsJSON));


     // }).catch (err => callback.send(err));
    }

  });
}

module.exports = {
  clientGet: clientGet,
};
