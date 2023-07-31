import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextoPrincipal from "../../components/TextoPrincipal";
import Formulario from "../../components/Formulario";
import FormService from "../../components/FormServices";

export default function Login() {
    return (
        <>
            <Header />
            <TextoPrincipal
                titulo="TESTE"
                descricao="Área exclusiva para funcionários."
            />
            <FormService />
            {/* <Formulario /> */}
            <Footer />
        </>
    );
}