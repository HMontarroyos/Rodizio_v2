const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

app.use(bodyParser.json())

app.post('/car', function(req, resp){
    console.log('REQUEST BODY: ', req.body)

    req.body

    resp.send({
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
       })
});

app.listen(PORT, function(){
    console.log(`Servidor Rodando na Porta ${PORT}`)
});