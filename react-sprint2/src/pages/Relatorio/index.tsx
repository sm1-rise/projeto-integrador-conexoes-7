import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import { useEffect, useState } from "react";
import { BotaoPainelVerde } from "../../components/Buttom/style";
import { Container } from "../../components/Footer/style";
import manutencao from '../../assets/manutencao.svg'
import { PosicaoBotao } from "../../components/Tabela/style";
import TextoPrincipal from "../../components/TextoPrincipal";
import { Form1 } from "./style";
import { NotAuthenticated } from "../../components/NotAuthenticated/NotAuthenticated";

export default function Relatorio() {

    useEffect(()=>{
        NotAuthenticated();
    },[])

    return ( NotAuthenticated() ?  (
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

    ) : (
        <>
        <Header />
        <TextoPrincipal titulo="Página Não Autorizada" descricao="Você não tem permissão para acessar esta página." />
        <Footer />
    </>
    )
     
    );
}