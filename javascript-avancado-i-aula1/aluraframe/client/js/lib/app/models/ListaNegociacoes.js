class ListaNegociacoes{

    constructor(){

        this._negociacoes = [];

    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){

        // let _array = [].concat(this._negociacoes);

        // return new Set(_array);

        return [].concat(this._negociacoes);

    }

    

}