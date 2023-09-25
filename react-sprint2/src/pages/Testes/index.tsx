import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Tabela from "../../components/Tabela";
import Pesquisa from "../../components/Pesquisa";
import { EstiloPesquisa } from "../../components/Pesquisa/styled";
import TextoPrincipal from "../../components/TextoPrincipal";
import FormService from "../../components/FormServices";
import FormAPI from "../../components/FormAPI";

export default function Service() {
    return (
        <>
            <Header />
            <TextoPrincipal titulo="Painel de Controle" descricao=""/>
            <EstiloPesquisa>
                <Pesquisa/>
            </EstiloPesquisa>
            <Tabela />

            <FormAPI />




            <Footer />
        </>
    );
}