document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Teste");

        // Coletar dados do formulário
        var nome = document.getElementById("nome").value;
        var cpf = document.getElementById("cpf").value;
        var telefone = document.getElementById("telefone").value;
        var plano = document.getElementById("plano").value;
        var email = document.getElementById("email").value;
        var horario = document.getElementById("horario").value;
        var status = "INICIAL"
        // Construir objeto de dados para o POST
        var data = {
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            plano: plano,
            email: email,
            horario: horario,
            status: status
        };

        // Fazer a solicitação POST 
        axios.post("http://localhost:3000/order", data)
            .then(function (response) {
                console.log("Resposta da API:", response.data);
                $("#myModal").modal("show");
                limparFormulario();
            })
            .catch(function (error) {
                console.error("Erro na solicitação:", error);
            });
    });
    function limparFormulario() {
        formulario.reset();
    }
});

