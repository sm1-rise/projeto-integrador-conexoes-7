import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import { useState } from "react";
import { BotaoPainelVerde } from "../../components/Botao/style";
import { Container } from "../../components/Footer/style";
import manutencao from '../../assets/manutencao.svg'
import { PosicaoBotao } from "../../components/Tabela/style";
import TextoPrincipal from "../../components/TextoPrincipal";
import { Form1 } from "./style";


export default function Relatorio() {

    return (
        <>
            <Header />
           
            <TextoPrincipal titulo="Em Manutenção" descricao="Acesse mais tarde"/>
            <Form1>
            <div className="square2">
                <div className="title">Total</div>
                <div className="value">300</div>
            </div>
            </Form1>
            <Footer />
        </>
    );
}