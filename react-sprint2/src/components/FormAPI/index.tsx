import { useState, useEffect } from "react";
import Botao from "../Buttom";
import { Form, Container, ContainerBotao } from "./style";
import { Link, useParams} from "react-router-dom";
import axios from 'axios';
import PopUpStatusUpdate from "../PopUpStatusUpdate";

export default function FormAPI() {

    const [order, setOrder] = useState<any> ([]);
    let {id} = useParams();    
    useEffect (()=>{
        const url = `http://localhost:3000/order/${id}`;
        axios.get(url).then((response) =>{
            setOrder(response.data);
        })
        .catch((error) =>{
            console.log('Erro ao fazer a requisição: ', error);
        });
    },  []);

    return (
        <>
            <Container>
                <Form>
                          <label>Nome do Cliente</label>
                          <input type="text" value={order.nome} disabled />
        
                          <label>CPF</label>
                          <input type="text" value={order.cpf} disabled />
        
                          <label>Telefone</label>
                          <input type="text" value={order.telefone} disabled />

                          <label>Email</label>
                          <input type="text" value={order.email} disabled />
        
                          <label>Serviço Solicitado</label>
                          <input type="text" value={order.plano} disabled />
        
                          <label>Preferência de Horário</label>
                          <input type="text" value={order.horario} disabled />

                          <label>Status</label>
                          <input type="text" value={order.status} disabled />
                    <ContainerBotao>
                        <Link to="/servicos"><Botao type="botaoCinza" text="Voltar" /></Link>
                        <PopUpStatusUpdate id = {order.id} />
                    </ContainerBotao>
                </Form>
            </Container>
        </>
    );
}