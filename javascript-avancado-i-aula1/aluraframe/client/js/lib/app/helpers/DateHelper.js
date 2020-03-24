class DateHelper{

    constructor(){
        throw new Error('Esta classe não pode ser instanciada');  
    }

    static dataParaTexto(data){

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`; //Template String

        // return data.getDate()
        // + '/' + (data.getMonth() +1 )
        // + '/' + data.getFullYear();

    }


    static textoParaData(texto){

        // /^\d{4}-\d{2}-\d{2}$/<= Expressão regular!


        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('Deve estar no formato aaaa-MM-dd');

        return new Date(...texto
            .split('-')
            .map((item, indice) => item - indice % 2));

    }



}