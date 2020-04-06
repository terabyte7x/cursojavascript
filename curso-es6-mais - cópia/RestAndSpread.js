//REST
//Pegar o resto das propriedade

const user = {
  name: "Felipe Duque",
  age: 26,
  company: "Dumont Systems",
  address: {
    country: "Canada",
  },
};

const { name, ...rest } = user;
console.log(name);
console.log(rest);

//Desestruturação em array.
const arr = [5, 4, 3, 2, 1];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

//Parametro de Funcão

soma = (...params) => params.reduce((total, next) => total + next);

console.log(soma(5, 4, 3, 2, 1));

//SPREAD
//Repassa os objetos de um Array para outra estrutura de dados.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
  nome: "Felipe",
  idade: 26,
};

const usuario2 = {
  ...usuario1,
  nome: "Felipe Duque"
}

console.log(usuario2)