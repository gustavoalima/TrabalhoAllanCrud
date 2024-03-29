const express = require("express");
const cors = require('cors');
const routerPerson = require('../src/routes/personRoute');
const APP = express();
const PORT = 3003;
const db = require('./infra/db');

//tem que colocar esse db.sync() para sincronizar os dados com o banco
db.sync(); 

// forma de se fazer middlewares, quando a requisição chega, como ele trata.
APP.use(express.json()); 

// cors -->  Você está permitindo que qualquer origem (qualquer domínio) tenha acesso aos recursos da sua API. O asterisco (*) indica que não há restrições de origem, ou seja, qualquer origem pode fazer requisições para a sua API.
APP.use(cors( {origin: '*'} )); 

try{
    APP.use('/people', routerPerson);
    
    APP.listen(PORT, () => {
        console.log(`Running in http://localhost:${PORT}`);
    });
}catch(error){
    console.log(error);
}


