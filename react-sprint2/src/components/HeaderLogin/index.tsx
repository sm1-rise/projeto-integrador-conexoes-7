import logoConexos from '../../assets/logo-conexos-white.png'
import { HeaderStyled } from './style'
import { Container } from './style'
import { Link } from "react-router-dom"

export default function HeaderLogin() {
    return (
        <>
            <HeaderStyled>
                <Container>
                    <Link to="/"><img src={logoConexos} alt="Logo Conexos" /></Link>
                </Container >
            </HeaderStyled>
        </>
    )
}