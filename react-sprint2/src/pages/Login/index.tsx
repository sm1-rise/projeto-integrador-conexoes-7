import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoginAcesso from "../../components/FormLogin";
import TextoPrincipal from "../../components/TextoPrincipal";
import { useEffect } from "react";

export default function Login() {
    useEffect(()=>{
        const token = localStorage.getItem("token");
         if (token) {
        window.location.href = "/inicio";
    }
    })

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