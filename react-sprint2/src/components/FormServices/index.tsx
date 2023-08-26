import Botao from "../Botao";
import { Form, Container, ContainerBotao } from "./style";
//import { FormEventHandler, useState } from "react";

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
                    <ContainerBotao  >
                        <Botao type="botaoCinza" text="voltar" />
                        <Botao type="botaoPainelVerde" text="atender solicitação" />
                    </ContainerBotao>
                </Form>

            </Container>
        </>
    );
}