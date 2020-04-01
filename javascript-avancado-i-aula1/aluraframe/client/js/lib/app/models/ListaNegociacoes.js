class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];

    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        // this._negociacoes = [].concat(this._negociacoes, negociacao);
    }

    get negociacoes() {

        return [].concat(this._negociacoes);

    }

    esvazia() {
        this._negociacoes = [];

    }

    // novo método
    get volumeTotal() {
        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
    }



}