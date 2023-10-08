import Footer from "../../components/Footer";
import LoginAcesso from "../../components/FormLogin";
import TextoPrincipal from "../../components/TextoPrincipal";
import { useEffect } from "react";
import HeaderLogin from "../../components/HeaderLogin";

export default function Login() {
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            window.location.href = "/inicio";
        }
    })

    return (
        <>
            <HeaderLogin />
            <TextoPrincipal
                titulo="painel administrativo"
                descricao="Área exclusiva para funcionários"
            />
            <LoginAcesso />
            <Footer />
        </>
    );
}