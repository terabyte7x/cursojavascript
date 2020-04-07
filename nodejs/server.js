const express = require('express');
const mongoose = require('mongoose');

//Iniciando o app
const app = express();

//Iniciando o DB
mongoose.connect(`mongodb://localhost:27017/nodejs`, { useNewUrlParser: true , useUnifiedTopology:true })

//Primeira rota
app.get('/', (req, res) => {res.send(`Hello, World! I'm Felipe Duque`)})

app.listen(3001);