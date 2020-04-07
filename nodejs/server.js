const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Iniciando o app
const app = express();

//Iniciando o DB
mongoose.connect(`mongodb://localhost:27017/nodejs`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
requireDir("./src/models"); //Importa todos os Models!

const Product = mongoose.model("Product");

//Primeira rota
app.get("/", (req, res) => {
  Product.create({
    title: "React Native",
    description: "Build native apps with React",
    url: "http://github.com/facebook/react-native",
  });
  return res.send(`Hello, World! I'm Felipe Duque`);
});

app.listen(3001);
