const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

app.use(bodyParser.json())

app.post('/car', (req, resp)=> {
    //console.log('REQUEST BODY: ', req.body.placa)

    req.body

    const cars = [
        {
        placa: "ABC",
        renavam: "123456",
        debitos: [
         {
          valor: 200,
          descricao: "multa A"
         },
         {
          valor: 500,
          descricao: "multa B"
         }
        ]
       },
       {
        placa: "DEF",
        renavam: "564783",
        debitos: [
         {
          valor: 200,
          descricao: "multa A"
         },
         {
          valor: 500,
          descricao: "multa B"
         }
        ]
       },
       {
        placa: "HEB",
        renavam: "54g67",
        debitos: [
         {
          valor: 200,
          descricao: "multa A"
         },
         {
          valor: 500,
          descricao: "multa B"
         }
        ]
       }]
      

       // FOR 

       /*

       const getCar = () =>{

       const placa = req.body.placa
       const renavam = req.body.renavam

       for (let index = 0; index < cars.length; index ++){
        if((placa === cars[index].placa )&&(renavam === cars[index].renavam)){
            return cars[index]
        }
      }

    }

    resp.send(getCar())
    console.log('RESULT :', getCar())
*/

// FILTER 

 const placa = req.body.placa
const renavam = req.body.renavam


var getCar = cars.filter(function(car) {
  return car.placa === placa && car.renavam === renavam;
});

  resp.send(getCar)
  console.log('RESULT :', getCar)

});


//MAP


app.listen(PORT, function(){
    console.log(`Servidor Rodando na Porta ${PORT}`)
});