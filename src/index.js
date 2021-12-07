const express = require('express');

const app = express();

//app.use(express.json);

const projects = [];

app.get('/projects', (req, res) => {
    console.log('Answering GET request');
    return res.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

app.post('/projects',(req, res) => {
    console.log('Answering POST request');
    return res.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.put('/projects/:id',(req, res) => {
    console.log('Answering PUT request');
    return res.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 4',
    ]);
});

app.delete('/projects/:id',(req, res) => {
    console.log('Answering PUT request');
    return res.json([
        'Projeto 1',
        'Projeto 3',
    ]);
});

app.listen(3334, () => {
    console.log('🚀 Backend Started!')
});