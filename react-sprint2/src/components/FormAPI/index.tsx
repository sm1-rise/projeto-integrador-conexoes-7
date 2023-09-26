import React, { useState, useEffect } from "react";
import Botao from "../Botao";
import PopUp from "../PopUp";
import { Form, Container, ContainerBotao } from "./style";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import axios from 'axios';

interface Order {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    servico_escolhido: string;
    preferencia_horario: string;
}

export default function FormAPI() {
    const [order, setOrder] = useState<Order[] > ([]);
    const id = 2;
    useEffect (()=>{
        const url = 'http://localhost:3000/order/1';
        axios.get(url).then((response) =>{
            setOrder(response.data);
        })
    },  []);

    return (
        <>
            <Container>
                <Form>
                    {order && order.length > 0 ? (
                      order.map((item) => (
                        <div key={item.id}>
                          <label>Nome do Cliente</label>
                          <input type="text" value={item.nome} disabled />
        
                          <label>CPF</label>
                          <input type="text" value={item.cpf} disabled />
        
                          <label>Telefone</label>
                          <input type="text" value={item.telefone} disabled />
        
                          <label>Serviço Solicitado</label>
                          <input type="text" value={item.servico_escolhido} disabled />
        
                          <label>Preferência de Horário</label>
                          <input type="text" value={item.preferencia_horario} disabled />
                        </div>
                      ))
                    ) : (
                      <p>Carregando dados...</p>
                    )}
        
                    <ContainerBotao>
                        <Link to="/servicos"><Botao type="botaoCinza" text="Voltar" /></Link>
                        <Modal />
                    </ContainerBotao>
                </Form>
            </Container>
        </>
    );
}