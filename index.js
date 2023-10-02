document.addEventListener("DOMContentLoaded", function () {
    var consultarButton = document.getElementById("consultar-button");
    var codigoProdutoInput = document.getElementById("codigo");
    var resultadoStatus = document.getElementById("resultado-apiStatus");
    var resultadoNome= document.getElementById("resultado-apiNome");
    var resultadoPlano = document.getElementById("resultado-apiPlano");
    var formulario = document.getElementById("formulario");

    consultarButton.addEventListener("click", function (event) {
        event.preventDefault();

        var codigoProduto = codigoProdutoInput.value;
        var apiUrl = "http://localhost:3000/order/" + codigoProduto;

        axios.get(apiUrl)
            .then(function (response) {
                const data = response.data
                console.log("Resposta da API:", data);

                var nome = response.data.nome;
                var plano = response.data.plano;
                var status = response.data.status;
                
                resultadoStatus.textContent = 'Status da solicitação: ' + status;
                resultadoNome.textContent = 'Nome do solicitante: ' + nome;
                resultadoPlano.textContent = 'Plano escolhido: ' + plano;
                ;
               
            })
            .catch(function (error) {
                console.error("Erro na solicitação:", error);
                if (error.response && error.response.status === 404) {
                    resultadoNome.textContent = "";
                    resultadoPlano.textContent = "";
                    resultadoStatus.textContent = "Não foi possível encontrar seu pedido, por favor verifique o código do pedido.";
                }
            });
    });

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        // Coletar dados do formulário
        var nome = document.getElementById("nome").value;
        var cpf = document.getElementById("cpf").value;
        var telefone = document.getElementById("telefone").value;
        var email = document.getElementById("email").value;
        var plano = document.getElementById("plano").value;
        var horario = document.getElementById("horario").value;

        // Construir objeto de dados para o POST
        var data = {
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            email: email,
            servico_escolhido: plano,
            preferencia_horario: horario
        };

        // Fazer a solicitação POST usando Axios
        axios.post("http://localhost:3000/order", data)
            .then(function (response) {
                console.log("Resposta da API:", response.data);
                // Exiba uma mensagem de sucesso ou atualize a interface, se necessário
            })
            .catch(function (error) {
                console.error("Erro na solicitação:", error);
                // Exiba uma mensagem de erro ou trate o erro de acordo com sua lógica
             
            });
    });

});

