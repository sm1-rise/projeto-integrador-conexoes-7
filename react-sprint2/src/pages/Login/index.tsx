import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoginAcesso from "../../components/FormLogin";
import TextoPrincipal from "../../components/TextoPrincipal";

export default function Login() {
    return (
        <>
            <Header />
            <TextoPrincipal
                titulo="painel administrativo"
                descricao="Área exclusiva para funcionários"
            />
            <LoginAcesso />
            <Footer />
        </>
    );
}