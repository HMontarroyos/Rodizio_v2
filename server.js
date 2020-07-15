const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
const cars = require('./api/data/cars')
app.use(bodyParser.json())


app.post('/car', (req, resp)=> {
    

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

  });
  


app.listen(PORT, function(){
    console.log(`Servidor Rodando na Porta ${PORT}`)
});



