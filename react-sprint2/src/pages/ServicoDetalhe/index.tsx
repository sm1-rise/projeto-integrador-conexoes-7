import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TextoPrincipal from "../../components/TextoPrincipal";
import FormService from "../../components/FormServices";

export default function ServicoDetalhe() {
    return (
        <>
            <Header />
            <TextoPrincipal
                titulo="Pedido #1232434566"
                descricao="Detalhes da solicitação"
            />
            <FormService />
            <Footer />
        </>

    );
}