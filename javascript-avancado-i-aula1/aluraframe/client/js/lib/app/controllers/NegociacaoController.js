class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            this._negociacoesView,
            ['adiciona', 'esvazia']);


        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagem = new Bind(
            new Mensagem(),
            this._mensagemView,
            ['texto']);
    }


    adiciona(event) {

        event.preventDefault();

        // let data = new Date(this._inputData.value.replace(/-/g,','));          

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        // this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem.texto = 'Negociação adicionada com sucesso!';
        this._mensagemView.update(this._mensagem);
        this._limpaformulario();

        console.log(this._listaNegociacoes.negociacoes);

    }

    importaNegociacoes() {

        let service = new NegociacaoService();


        // let promise = service.obterNegociacoesDaSemana();
        // promise
        //     .then(negociacoes => {
        //         negociacoes
        //             .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
        //         this._mensagem.texto = 'Negociações da semana obtida com sucesso';
        //     })
        //     .catch(erro => this._mensagem.texto = erro);



        // //Pyramid of doom
        // //Callback Hell

        Service.obterNegociacoesDaSemana((erro, negociacoes) => { //Erro first strategy
            if (erro) {
                this._mensagem.texto = erro;
                return;
            }

            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));

            Service.obterNegociacoesDaSemanaPassada((erro, negociacoes) => { //Erro first strategy
                if (erro) {
                    this._mensagem.texto = erro;
                    return;
                }

                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));

                Service.obterNegociacoesDaSemanaRetrasada((erro, negociacoes) => { //Erro first strategy
                    if (erro) {
                        this._mensagem.texto = erro;
                        return;
                    }

                    negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                    this._mensagem.texto = 'Negociações importadas com suceso!';
                    this._mensagemView.update(this._mensagem);

                });
            });

            this._mensagem.texto = 'Negociações importadas com suceso!';
            this._mensagemView.update(this._mensagem);

        });

    }

    apaga() {
        this._listaNegociacoes.esvazia();
        // this._negociacoesView.update(this._listaNegociacoes); 

        this._mensagem.texto = 'Negociações apagadas com sucesso';
        this._mensagemView.update(this._mensagem);

    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

    }

    _limpaformulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();


    }

}