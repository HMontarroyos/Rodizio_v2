const cars = require('../data/cars');
    
    

    function controllerCars  (req, resp)  {

        req.body

        const placa = req.body.placa
        const renavam = req.body.renavam
        
        // FOR
        const getCarFor = () =>{
 
        for (let index = 0; index < cars.length; index ++){
         if((placa === cars[index].placa )&&(renavam === cars[index].renavam)){
             return cars[index]
         }
       }
 
     }
        
 // FILTER 
 
 const getCarFilter =() =>{
   return cars.filter(car => car.placa === placa && car.renavam === renavam)[0]
 }
 
 // FOR EACH 
 
 const getCarForEach = () => {
   result = []
   cars.forEach(car => {
     if (car.placa === placa && car.renavam === renavam){
       result.push(car)[0]
     }
   })
   return result
 }
 
     resp.send(getCarFilter())
     console.log('RESULT :', getCarFilter())
 
   }

   module.exports = {
    controllerCars: controllerCars

  };
    
    
  


    
   /*function createWishlist(request, response) {
    const wishlist = request.body;
  
    Wishlist.create(wishlist)
      .then(function(data) {
        console.log("Data", data);
        response
          .status(201)
          .send({ message: "Wishlist created", documentId: data._id });
      })
      .catch(function(err) {
        console.error(err);
        response
          .status(500)
          .send({ message: "Ops! Estamos com alguns problemas." });
      });
  }
  

*/






