import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextoPrincipal from "../../components/TextoPrincipal";
import StatusQtd from "../../components/StatusQtd";
import { PosicaoBotao, PosicaoCardsStatus } from "./styled";
import { BotaoCinza, BotaoInicio, BotaoLinkInicio, BotaoLogin, BotaoPainelVerde } from "../../components/Buttom/style";
import { Link } from "react-router-dom";




export default function Teste() {
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