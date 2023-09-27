import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TextoPrincipal from "../../components/TextoPrincipal";
import FormService from "../../components/FormServices";
import FormAPI from "../../components/FormAPI";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ServicoDetalhe() {

    const [order, setOrder] = useState<any> ([]);
    let {id} = useParams();    
    useEffect (()=>{
        const url = `http://localhost:3000/order/${id}`;
        axios.get(url).then((response) =>{
            console.log(response.data);
            setOrder(response.data);
        })
        .catch((error) =>{
            console.log('Erro ao fazer a requisição: ', error);
        });
    },  []);

    return (
        <>

            <Header />
            <TextoPrincipal
                titulo={"Pedido: " + id}
                descricao="Detalhes da solicitação"
            />
            <FormAPI />
            <Footer />
        </>
    );
}

