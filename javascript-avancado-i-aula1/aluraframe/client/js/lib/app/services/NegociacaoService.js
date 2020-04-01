/*         
0: requisição ainda não iniciada
1: conexão com o servidor estabelecida
2: requisição recebida
3: processando requisição
4: requisição está concluída e a resposta está pronta                            
*/

class NegociacaoService {

    constructor(){
        this._http = new HttpService();
    }

    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/semana')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => 
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                }).catch(error => reject(error));

            }
        )};

    

    obterNegociacoesDaSemanaPassada() {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/anterior')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => 
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                }).catch(error => reject(error));

            }
        )};

    obterNegociacoesDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/retrasada')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => 
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                }).catch(error => reject(error));

            }
        )};

}