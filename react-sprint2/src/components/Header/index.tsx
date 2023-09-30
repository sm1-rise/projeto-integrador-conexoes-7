import logoConexos from '../../assets/logo-conexos-white.png'
import { HeaderStyled } from './style'
import { Container } from './style'
import { Menu } from './style'
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <HeaderStyled>
                <Container>
                    <Link to="/"><img src={logoConexos} alt="Logo Conexos" /></Link>
                    <Menu>
                        <ul>
                            <li>
                                <Link to="/inicio">Início</Link>
                            </li>
                            <li>
                                <Link to="/servicos">Serviços</Link>
                            </li>
                            <li>
                                <Link to="/relatorios">Relatórios</Link>
                            </li>
                        </ul>
                    </Menu>
                </Container >
            </HeaderStyled>
        </>
    )
}