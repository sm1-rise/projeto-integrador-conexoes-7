import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import { useState } from "react";
import { BotaoPainelVerde } from "../../components/Botao/style";
import { Container } from "../../components/Footer/style";
import manutencao from '../../assets/manutencao.svg'
import { PosicaoBotao } from "../../components/Tabela/style";
import { PosicaoImagem } from "./style";
import TextoPrincipal from "../../components/TextoPrincipal";


export default function Relatorio() {

    return (
        <>
            <Header />
           
            <TextoPrincipal titulo="Em Manutenção" descricao="Acesse mais tarde"/>
            <PosicaoImagem>
            <img src={manutencao} alt="Logo Conexos"/>
            </PosicaoImagem>
            <Footer />
        </>
    );
}