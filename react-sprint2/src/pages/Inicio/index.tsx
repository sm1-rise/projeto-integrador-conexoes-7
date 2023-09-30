import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextoPrincipal from "../../components/TextoPrincipal";
import {PosicaoBotao, PosicaoCardsStatus} from "./style";
import '../Inicio/style';
import { Link } from "react-router-dom";
import { BotaoInicio, BotaoLinkInicio } from "../../components/Buttom/style";
import StatusQtd from "../../components/StatusQtd";

export default function Inicio() {
    return (
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
                <BotaoInicio>Sair</BotaoInicio>
           </PosicaoBotao>
                <StatusQtd statusDesejado="EM ANDAMENTO" />
                <StatusQtd statusDesejado="ATRASADO" />
                <StatusQtd statusDesejado="CANCELADO" />
           </PosicaoCardsStatus>
           
            <Footer />
        </>
    );
}