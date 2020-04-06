// class TodoList {
//   constructor(){
//     this.todos = [];
//   }

//   static addTodo(task){
//     this.todos.push(task);
//     console.log(this.todos);
//   }
// }

// TodoList.addTodo("https://duque.dev");
// Resultado: TypeError: undefined is not an object (evaluating 'this.todos.push')

/** Exemplo de uma boa classe estática! */

const limitePousosConfigurado = 1000;
const serialComponente = "A153722HT";

const test = () => {}

class Pneu {
  static getDesgastePneus(limitePousosConfigurado, serialComponente, totalDePousos) {
    const _limitePousos = limitePousosConfigurado;
    const _serial = serialComponente;

    if (totalDePousos >= (_limitePousos * 0.90) && totalDePousos < _limitePousos) {
      console.log(`Em breve o pneu ${_serial} deverá ser trocado. Contatar oficina?`);
      console.log(`O limite de pousos é ${Pneu._limitePousos}`);
    } else if (_limitePousos <= totalDePousos) {
      console.log(`O pneu ${_serial} deve ser trocado antes do voo.`);
      console.log(`O limite de pousos é ${_limitePousos}`);
    } else {
      console.log("Pneus OK!");
    }

  }
}

Pneu._limitePousos = 1200;
console.log(`O limite de pousos é ${Pneu._limitePousos}`);

Pneu.getDesgastePneus(limitePousosConfigurado, serialComponente, 1001);
