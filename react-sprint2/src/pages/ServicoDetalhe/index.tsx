import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TextoPrincipal from "../../components/TextoPrincipal";
import FormService from "../../components/FormServices";

export default function ServicoDetalhe() {
    return (
        <>
            <Header />
            <TextoPrincipal
                titulo="Painel Administrativo"
                descricao="Área exclusiva para funcionários"
            />
            <FormService />
            <Footer />
        </>

    );
}