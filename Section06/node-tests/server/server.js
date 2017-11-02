const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({error: 'error', name: 'Todo App v1.0'});
});

app.get('/users', (req, res) => {
    res.send([{name: 'BSW', age: '33'},{name:'MSB', age: '31'},{name:"JH", age: '25'}])
});

app.listen(3000);

module.exports.app = app;