class NegociacaoDao {
  constructor(connection) {
    // O que ela precisa receber? Uma connection. Então, construtor.
    this._connection = connection;
    this._store = "negociacoes";
  }

  //Promisse é muito usada.

  adiciona(negociacao) {
    //Adiciona quem? Quem eu quero receber?
    return new Promise((resolve, reject) => {
      //Forma #1
      /**
       *let transaction = this._connection.transaction([this._store], "readwrite");
       *let store = transaction.objectStore(this._store);
       *let request = store.add(negociacao);
       */

      //Forma #2 - Encadeada
      let request = this._connection
        .transaction([this._store], "readwrite")
        .objectStore(this._store)
        .add(negociacao);

      request.onsucess = e => {
        resolve();
      };

      request.onerror = e => {
        console.log(e.target.error);
        reject("Não foi possível adicionar a negociação");
      };
    });
  }

  listaTodos() {
    return new Promise((resolve, reject) => {
      let cursor = this._connection
        .transaction([this._store], "readwrite")
        .objectStore(this._store)
        .openCursor();

      let negociacoes = [];
      cursor.onsuccess = e => {
        let atual = e.target.result;

        if (atual) {
          let dado = atual.value;

          negociacoes.push(
            new Negociacao(dado._data, dado._quantidade, dado._valor)
          );

          atual.continue();
        } else {
          console.log(negociacoes);
        }
      };

      cursor.onerror = e => {
        console.log(e.target.error);
        reject("Não foi possível listar as negociações");
      };
    });
  }
}
