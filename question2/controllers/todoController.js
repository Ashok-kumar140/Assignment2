const express = require('express');
const bodyParser = require('body-parser');
const Task = require('../models/Task');

const app = express();
app.use(bodyParser.json());

let tasks = [];
let nextId = 1;

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const { title, completed } = req.body;
    const newTask = new Task(nextId++, title, completed);
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== id);
    res.status(204).send();
});

module.exports = app;
