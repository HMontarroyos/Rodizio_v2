const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

const router = require("./api/routes/routes");


app.use(bodyParser.json())

app.use(router);







app.listen(PORT, function(){
    console.log(`Servidor Rodando na Porta ${PORT}`)
});

