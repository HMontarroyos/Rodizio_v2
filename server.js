const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

app.use(bodyParser.json())

app.post('/car', (req, resp)=> {
    console.log('REQUEST BODY: ', req.body.placa)

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
       var found
       const placa = req.body.placa
       const renavam = req.body.renavam

       // passar um for para fazer um loop 
       // e um if que pegue todos o array 
    resp.send(found)
});

app.listen(PORT, function(){
    console.log(`Servidor Rodando na Porta ${PORT}`)
});