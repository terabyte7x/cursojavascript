var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {

    if(xhr.status == 200){

        var resposta = xhr.responseText;

        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });

        var sucessoAjax = document.querySelector("#sucessoImportacaoPacientes");
        sucessoAjax.classList.remove("invisivel");
   

    } else {
        console.log(xhr.status);
        console.log(xhr.responseText);
        var erroAjax = document.querySelector("#erroImportacaoPacientes");
        erroAjax.classList.remove("invisivel");
    }

});

    xhr.send();
});