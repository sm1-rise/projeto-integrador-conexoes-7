import { Container } from "../Header/style";
import logoConexos from "../../assets/logo-conexos-white.png";
import { FooterStyled } from "./style";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <>
            <FooterStyled>
                <Container>
                    <Link to='/'><img src={logoConexos} alt="Logo Conexos" /></Link>
                    <p>
                        Projeto desenvolvido na academia Aprendiz Vivo Tech - Gama Academy
                    </p>
                </Container>
            </FooterStyled>
        </>
    );
}