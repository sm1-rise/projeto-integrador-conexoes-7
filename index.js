document.addEventListener("DOMContentLoaded", function () {
    var contratarButton = document.getElementById("contratar-button");
    var codigoProdutoInput = document.getElementById("codigo");
    var resultadoStatus = document.getElementById("resultado-apiStatus");
    var resultadoNome= document.getElementById("resultado-apiNome");
    var resultadoPlano = document.getElementById("resultado-apiPlano");

    contratarButton.addEventListener("click", function (event) {
        event.preventDefault();

        var codigoProduto = codigoProdutoInput.value;
        var apiUrl = "http://localhost:3000/order/" + codigoProduto;

        axios.get(apiUrl)
            .then(function (response) {
                const data = response.data
                console.log("Resposta da API:", data);

                var nome = response.data.nome;
                var plano = response.data.servico_escolhido;
                var status = response.data.status;
                
                resultadoStatus.textContent = 'Status da solicitação: ' + status;
                resultadoNome.textContent = 'Nome do solicitante: ' + nome;
                resultadoPlano.textContent = 'Plano escolhido : ' + plano;
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
});

