class ListaNegociacoes{

    constructor(contextoThis, atualizar){

        this._negociacoes = [];
        this._atualizar = atualizar;
        this._contextoThis = contextoThis;

    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
        // this._atualizar(this);
        Reflect.apply(this._atualizar, this._contextoThis, [this]);
    }

    get negociacoes(){

        return [].concat(this._negociacoes);

    }

    esvazia () {
        this._negociacoes = [];
        this._atualizar(this);
        Reflect.apply(this._atualizar, this._contextoThis, [this]);
    }

    

}