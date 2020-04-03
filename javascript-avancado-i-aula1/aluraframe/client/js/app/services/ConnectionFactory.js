/**
 * (function(){ action }();)
 * Este aquivo é uma função anônima dentro de uma função auto invocada
 * que impede o acesso as variáveis stores, version, dbName, e etc..
 */

/**  MODULE PATERN => Definimos o que queremos exportar para o mundo externo
 * através de um return.
 */

var ConnectionFactory = (function() {
  const stores = ["negociacoes"];
  const version = 13;
  const dbName = "aluraframe";
  var connection = null;
  var close = null;

  return class ConnectionFactory {
    constructor() {
      throw new Error("Não é possível criar instância desta classe!");
    }

    static getConnection() {
      return new Promise((resolve, reject) => {
        let openRequest = window.indexedDB.open(dbName, version);

        openRequest.onupgradeneeded = e => {
          ConnectionFactory._createStores(e.target.result);
        };

        openRequest.onsuccess = e => {
          if (!connection) {
            connection = e.target.result;
            /** O this do close abaixo pertence ao objeto connection, então o
             * this do close é o connection. No entanto, ao atribuí-lo a 
             * variável close, ele perde o link com o connection, operando sobre
             * nada. A forma menos verbosa, seria o .bind() */

            close = connection.close.bind(connection); 

            
            /**MonkeyPath => Alteramos uma API na marra para evitar o fechamento
             * da conexão através do "close()".
             */
            connection.close = () => {
              throw new Error("Você não pode fechar diretamente a conexão");
            };
          }
          resolve(connection);
        };

        openRequest.onerror = e => {
          console.log(e.target.error);
          reject(e.target.error.name);
        };
      });
    }

    static _createStores(connection) {
      stores.forEach(stores => {
        if (connection.objectStoreNames.contains(store))
          connection.deleteObjectStore(store);

        connection.createObjectStore(store, { autoIncrement: true });
      });
    }
    static closeConnection() {
      if (connection) {
        close(); // A variável close guardou o método antes do Monkey Patching
        connection = null;
      }
    }
  };
})();
