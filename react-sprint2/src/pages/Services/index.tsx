import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Tabela from "../../components/Tabela";
import Pesquisa from "../../components/Pesquisa";
import { EstiloPesquisa } from "../../components/Pesquisa/styled";
import TextoPrincipal from "../../components/TextoPrincipal";
import TabelaApi from "../../components/TabelaApi";

export default function Service() {
    return (
        <>
            <Header />
            <TextoPrincipal titulo="Painel de Controle" descricao=""/>
            <TabelaApi />
            <Footer />
        </>
    );
}