import { useState } from "react";
import Botao from "../Botao";
import PopUp from "../PopUp";
import { Form, Container, ContainerBotao } from "./style";
import { Link } from "react-router-dom";
export default function FormService() {

    return (
        <>
            <Container>
                <Form>
                    <label>Nome do Cliente</label>
                    <input
                        type="text"
                        value="  Maria da Silva"
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
                        <Botao type="botaoPainelVerde" text="atender solicitação"/> 
                    </ContainerBotao>
                </Form>
            </Container>
        </>
    );
}