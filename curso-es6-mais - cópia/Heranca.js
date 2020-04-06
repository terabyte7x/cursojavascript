class List {
  constructor(){
    this.date = [];
  }

  add(date) {
    this.date.push(date);
    console.log(this.date);
  }
}

class TodoList extends List{ //Herança
  //Primeiro método a ser chamado quando chamamos outra classe;
  constructor(){
    super(); // Chama o método constructor da classe pai
    this.usuario = "Felipe Duque";
  }

  mostraUsuario(){
    console.log(this.usuario);
  }

  // addTodo(){
  //   this.todos.push('Nodo todo');
  //   console.log(this.todos);
  // }
}

const MinhaLista = new TodoList();

document.getElementById("novoTodo").onclick = () => MinhaLista.add('DuqueDotDev');

MinhaLista.mostraUsuario();