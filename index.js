
const url ="http://localhost:3000/order";

function getOrder(event) {
   event.preventDefault();
    const codigoPedido =  document.getElementById("codigo").value;
    
    axios.get(`${url}/${codigoPedido}`)
    .then(response =>{
        const data = response.data
        console.log(data);
        renderResults = document.getElementById("renderResults");
        renderResults.textContent = JSON.stringify(data);
    })
    .catch(error =>{console.log(error)
    });
}

getOrder();


const newOrder = {
        nome: "João Marcelo",
        cpf: "123.456.789-08",
        telefone: "(11) 98765-4371",
        servico_escolhido: "Instalação de Fibra Óptica",
        preferencia_horario: "12h às 15h",
        status: "ACEITO"
}

function  addNewOrder(){
    axios.post(url, newOrder)
    .then(response => {
        alert()
    })
    .catch(error => console.log (error))
}

// addNewOrder();


function getOneUser(){
    axios.get(`${url}/3`)
    .then(response =>{
        const data = response.data
        renderResults.textContent = JSON.stringify(data);
    })
    .catch(error =>{console.log(error)
    });
}
// getOneUser();