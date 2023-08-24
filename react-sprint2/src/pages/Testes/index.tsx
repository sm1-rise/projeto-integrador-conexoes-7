import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BotaoTeste from "../../components/Botao";

export default function Teste() {
    return (
        <>
            <Header />
            <BotaoTeste text="enviar" onClick={() => console.log("clique")} />
            <BotaoTeste text="enviar" onClick={() => console.log("clique")} />
            <Footer />
        </>
    );
}