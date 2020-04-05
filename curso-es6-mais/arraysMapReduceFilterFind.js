const arr = [1, 2, 5, 7, 6, 3, 8, 9];

//O map recebe dois um ou dos valores. Item (e index);
const newArr = arr.map((item, index) => `Posição[${index}] = ${item * 2}`);

console.log(newArr);

//Retorna todos os valores e os soma com o seguinte.
const sum = arr.reduce((total, next) => total + next);

console.log(sum);

//Por debaixo dos panos, faz um ternário retornando apenas os valores
//estabelecidos no filtro
const filter = arr.filter(item => item % 2 === 0);

console.log(filter);

//Quero encontrar se existe algo dentro do Array
const find = arr.find((item) => {
  return item === 9; //Retorna 9 se conseguiu achar, ou Undefined se não.
});

console.log(find);
