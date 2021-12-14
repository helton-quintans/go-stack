const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const projects = [];

//Middleware:
function logRquests(req, res, next) {
    const {method, url} = req;
    const logLabel = `[${method.toUpperCase()}] ${url}`;
    console.time(logLabel);
    next(); // next middleware
    console.timeEnd(logLabel);
};

app.use(logRquests)


app.get('/projects', (req, res) => {
    console.log('Answering GET request');
    const { title } = req.query;

    //includes return True or false
    const results = title 
        ? projects.filter(project => project.title.includes(title))
        : projects;
    return res.json(results);
});

app.post('/projects', (req, res) => {
    console.log('Answering POST request');
    //como obter o o conteúdo da requisição:
    const { title, owner, date } = req.body;

    const project = { id: uuidv4(), title, owner, date };

    projects.push(project);

    return res.json(project);
});

app.put('/projects/:id', (req, res) => {
    console.log('Answering PUT request');

    //como obter o id dentro do código:
    const { id } = req.params;
    const { title, owner, date } = req.body;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
        return res.status(400).json({ error: 'project not found' })
    };

    const project = {
        id,
        title,
        owner,
        date
    };

    projects[projectIndex] = project

    return res.json(project);
});

app.delete('/projects/:id', (req, res) => {
    console.log('Answering PUT request');
    // obtendo o id
    const {id} = req.params
    // Achando o index do projeto no array projects
    const projectIndex = projects.findIndex(project => project.id === id);
    // validando se o projeto requisitado para deleção existe
    if (projectIndex < 0) {
        return res.status(400).json({ error: 'project not found' })
    };
    
    //splice para remover uma informção de dentro de um array, o 1 significa quantas posições quero remover a partir desse indice
    projects.splice(projectIndex, 1)

    // como é uma deleção pode-se usar o send para pra passar uma mensagem vazia/em branco
    // por ser uma resposta vazia é recomendado que se envie o status 204
    return res.status(204).send();
});

app.listen(3334, () => {
    console.log('🚀 Backend Started!')
});

