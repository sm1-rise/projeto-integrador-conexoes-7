import { useState, useEffect } from "react";
import Botao from "../Botao";
import PopUp from "../PopUp";
import { Form, Container, ContainerBotao } from "./style";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import axios from 'axios';



export default function FormAPI() {

    useEffect (()=>{
        const url = 'http://localhost:3000/order/1'
        // https://jsonplaceholder.typicode.com/todos/1;
        axios.get(url).then((res) =>{
            const order = res.data;
            console.log(order);
        });
    }, []);    

    return (
        <>
            <Container>
                <Form>
                    <h1></h1>
                    <label>Nome do Cliente</label>
                    <input
                        type=""
                        value= ""
                        disabled
                    />

                    <label>Serviço Solicitado</label>
                    <input
                        type="text"
                        value="  Plano 1 - Instalação"
                        disabled
                    />

                    <label>Data da contratação</label>
                    <input
                        type="text"
                        value="  26/06/2023"
                        disabled
                    />

                    <label>Horário sugerido</label>
                    <input
                        type="hour"
                        value="  08:00 - 12:00"
                        disabled
                    />

                    <label>Status</label>
                    <input
                        type="status"
                        value="  Aguardando agendamento"
                        disabled
                    />
                    <ContainerBotao >
                    <Link to="/servicos"><Botao type="botaoCinza" text="voltar"/></Link>
                    <Modal/>
                    </ContainerBotao>
                </Form>
                
            </Container>
        </>
    );
}