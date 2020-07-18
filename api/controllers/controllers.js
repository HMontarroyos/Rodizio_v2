const cars = require('../data/cars');
var redis = require('redis');
var client = redis.createClient();

  
    function controllerCars  (req, resp)  {

        req.body

        const placa = req.body.placa
        const renavam = req.body.renavam


        client.get(`${placa}`, function (err, Cached) {
          if (Cached) {
              
              console.log('BATEU NO CACHE');
              resp.send(Cached)
            
              }
           else {
              console.log('BATEU NO REPOSITORY');

                      
                      client.setex(`${placa}`, 60, JSON.stringify(getCarFilter(placa,renavam)));
                      
                      resp.send(getCarFilter(placa, renavam));
                  
          }
      });

 
   }

     // FILTER 
     
     const getCarFilter =(placa, renavam) =>{
      return cars.filter(car => car.placa === placa && car.renavam === renavam)[0]
    }


           // FOR
           const getCarFor = (placa, renavam) =>{
 
            for (let index = 0; index < cars.length; index ++){
             if((placa === cars[index].placa )&&(renavam === cars[index].renavam)){
                 return cars[index]
             }
           }
     
         }
            

     
     // FOR EACH 
     
     const getCarForEach = (placa, renavam) => {
       result = []
       cars.forEach(car => {
         if (car.placa === placa && car.renavam === renavam){
           result.push(car)[0]
         }
       })
       return result
     }

   module.exports = {
    controllerCars: controllerCars

  };
    





