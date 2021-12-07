const express = require('express');

const app = express();

//app.use(express.json);

const projects = [];

app.get('/', (req, res) => {
    console.log('Atendendo a requisição');
    return res.json( {message: "Hello world"} );
});

app.listen(3334, () => {
    console.log('🚀 Backend Started!')
});