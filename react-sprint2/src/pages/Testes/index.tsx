import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextoPrincipal from "../../components/TextoPrincipal";
import StatusQtd from "../../components/StatusQtd";
import { PosicaoBotao, PosicaoCardsStatus } from "./styled";
import { BotaoCinza, BotaoInicio, BotaoLinkInicio, BotaoLogin, BotaoPainelVerde } from "../../components/Buttom/style";
import { Link } from "react-router-dom";
import TesteConsumoApi from "../../components/Teste";




export default function Teste() {
    return (
        <>
            <Header />
            
            <TesteConsumoApi />
           
            <Footer />
        </>
    );
}