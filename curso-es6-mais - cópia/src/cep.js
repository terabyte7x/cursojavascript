import axios from "axios";

export default function buscaCEP(cep){
  const buscaCEP = apiCEP.viacep(cep);
  return buscaCEP;
}

class apiCEP {
  static async viacep(cep) {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const erro = [response].map((item) => item.data.erro).toString();
      if (!erro === true) {
        const cepRetorno = [response]
          .map((endereco) => endereco.data.cep)
          .toString();
        const logradouro = [response]
          .map((endereco) => endereco.data.logradouro)
          .toString();
        const bairro = [response]
          .map((endereco) => endereco.data.bairro)
          .toString();
        const localidade = [response]
          .map((endereco) => endereco.data.localidade)
          .toString();
        const uf = [response].map((endereco) => endereco.data.uf).toString();

        console.log(cepRetorno);
        console.log(logradouro);
        console.log(bairro);
        console.log(localidade);
        console.log(uf);
      } else {
        console.warn(`O CEP ${cep} não foi reconhecido!`);
      }
    } catch (erro) {
      console.warn(`Erro ao buscar o CEP ${cep}. Tente novamente!`);
    }
  }
}

// apiCEP.viacep("14940000"); //CEP não reconhecido!

// apiCEP.viacep("02q19200"); //Erro ao buscar o CEP!

// apiCEP.viacep("02519200"); // OK!

