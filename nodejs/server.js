const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect(`mongodb://localhost:27017/nodejs`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
requireDir("./src/models"); //Importa todos os Models!

//Rotas
app.use("/api", require("./src/routes")); //Use: aceita todas as requisições (GET/PUT...)


app.listen(3001);
