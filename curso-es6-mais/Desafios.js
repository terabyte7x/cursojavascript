// Desafio 01
class usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  isAdmin() {
    if (this.admin === true) return true;
    else return false;
  }
}

class admin extends usuario {
  constructor(email, senha) {
    super(email, senha);
    this.admin = true;
  }
}

const User1 = new usuario("email@teste.com", "senha123");
const Adm1 = new admin("email@teste.com", "senha123");
console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true

//=======================

const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" },
];

//Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

const idadeUsuarios = usuarios.map((usuario) => usuario.idade);
console.log(idadeUsuarios);

//Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos
const filterUsuario = usuarios.filter(
  (usuario) => usuario.idade >= 18 && usuario.empresa === "Rocketseat"
);
console.log(filterUsuario);

//Crie uma variável que procura por um usuário que trabalhe na empresa Google:
const filterGoogler = usuarios.filter(
  (usuario) => usuario.empresa === "Google"
);
console.log(filterGoogler);

//Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos:
const calculo = usuarios
  .map((usuario) => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter((usuario) => usuario.idade <= 50);

console.log(calculo);

//Desestruturação
const empresa = {
  nome: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC",
  },
};

const { nome, endereco: {cidade}, endereco: {estado} } = empresa

console.log(nome); 
console.log(cidade);
console.log(estado);
