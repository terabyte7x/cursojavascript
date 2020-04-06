const usuario = {
  nome: "Felipe",
  idade: 26,
  endereco: {
    cidade: "São Paulo",
    estado: "SP",
  },
};

const { nome  , idade , endereco:{ cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function agradecimento({ nome, endereco: { cidade } }){
  console.log(`Olá ${ nome }! Obrigado por sua compra. Em breve te vejo em ${ cidade }!`)
}

agradecimento(usuario);

const arr = [5, 4, 3, 2, 1];

const [a, b] = arr;
