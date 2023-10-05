import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Tabela from "../../components/Tabela";
import Pesquisa from "../../components/Pesquisa";
import { EstiloPesquisa } from "../../components/Pesquisa/styled";
import TextoPrincipal from "../../components/TextoPrincipal";
import TabelaApi from "../../components/TabelaApi";
import { NotAuthenticated } from "../../components/NotAuthenticated/NotAuthenticated";
import { useEffect } from "react";

export default function Service() {

    useEffect(()=>{
        NotAuthenticated();
    },[])

    return (
        NotAuthenticated() ? (
            <>
                <Header />
                <TextoPrincipal titulo="Painel de Controle" descricao="" />
                <TabelaApi />
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



