const express = require('express');
const path = require('path');
const color = require('colors');

const port = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.resolve(__dirname, './public'))); 

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'./views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/login.html'));
});

app.listen(port, () => console.log('Arrancando servidor en puerto 5000'.bold.red));