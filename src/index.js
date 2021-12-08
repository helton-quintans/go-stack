const express = require('express');

const app = express();

app.use(express.json());

const projects = [];

app.get('/projects', (req, res) => {
    // console.log('Answering GET request');
    // const { title, owner } = req.query;


    // return res.json(projects);
});

app.post('/projects', (req, res) => {
    console.log('Answering POST request');
    //como obter o o conteúdo da requisição:
    const { title, owner, date } = req.body
    console.log(title)
    console.log(owner)
    console.log(date)

    return res.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.put('/projects/:id', (req, res) => {
    console.log('Answering PUT request');
    //como obter o id dentro do código:
    const { id } = req.params;
    console.log(id);

    return res.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 4',
    ]);
});

app.delete('/projects/:id', (req, res) => {
    console.log('Answering PUT request');
    return res.json([
        'Projeto 1',
        'Projeto 3',
    ]);
});

app.listen(3334, () => {
    console.log('🚀 Backend Started!')
});

