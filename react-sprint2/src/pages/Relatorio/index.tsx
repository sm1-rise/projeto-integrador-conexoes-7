import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import TextoPrincipal from "../../components/TextoPrincipal";
import { Form1 } from "./style";
import { NotAuthenticated } from "../../components/NotAuthenticated/NotAuthenticated";
import Chart from "../../components/Chart";

export default function Relatorio() {

    useEffect(()=>{
        NotAuthenticated();
    },[])

    return ( NotAuthenticated() ?  (
        <> 
        <Header />
       
        <TextoPrincipal titulo="Em Manutenção" descricao="Acesse mais tarde"/>
        <Chart />
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