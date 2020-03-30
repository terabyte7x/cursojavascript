class ListaNegociacoes{

    constructor(atualizar){

        this._negociacoes = [];
        this._atualizar = atualizar;

    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
        this._atualizar(this);
        
    }

    get negociacoes(){

        return [].concat(this._negociacoes);

    }

    esvazia () {
        this._negociacoes = [];
        this._atualizar(this);
        
    }

    

}