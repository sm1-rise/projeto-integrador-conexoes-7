import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextoPrincipal from "../../components/TextoPrincipal";
import {PosicaoBotao, PosicaoCardsStatus} from "./style";
import '../Inicio/style';
import { Link } from "react-router-dom";
import { BotaoInicio, BotaoLinkInicio } from "../../components/Buttom/style";
import StatusQtd from "../../components/StatusQtd";
import { useEffect } from "react";
import { NotAuthenticated } from "../../components/NotAuthenticated/NotAuthenticated";

function logOut() {
    localStorage.setItem("token", "");
}

export default function Inicio() {

    useEffect(() => {
        NotAuthenticated();
    }, []);

    return ( NotAuthenticated() ? (
        <> 
        <Header />
           <TextoPrincipal titulo="Bem vindo à Conexos " descricao="Sua Jornada na Velocidade da Luz!" />
           
          <PosicaoCardsStatus>
          <PosicaoBotao>

          <Link to="/relatorios">
               <BotaoInicio>Acessar Relatório</BotaoInicio>
           </Link> 

           <Link to="/servicos">
                   <BotaoLinkInicio>Acessar Painel</BotaoLinkInicio>
            </Link>
            <Link to="/">
               <BotaoInicio onClick={logOut}>Sair</BotaoInicio>
           </Link>
          </PosicaoBotao>
               <StatusQtd statusDesejado="EM ANDAMENTO" />
               <StatusQtd statusDesejado="ATRASADO" />
               <StatusQtd statusDesejado="CANCELADO" />
          </PosicaoCardsStatus>
          
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