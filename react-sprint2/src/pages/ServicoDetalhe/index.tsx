import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TextoPrincipal from "../../components/TextoPrincipal";


export default function ServicoDetalhe() {
    return (
        <>
            <Header />
            <TextoPrincipal
                titulo="Painel Administrativo"
                descricao="Área exclusiva para funcionários"
            />
            <Footer />
        </>

    );
}