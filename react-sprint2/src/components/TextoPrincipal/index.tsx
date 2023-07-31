import { Container } from "./style";

interface TextoPrincipalProps {
    titulo: string,
    descricao: string
}

export default function TextoPrincipal({
    titulo = "Titulo",
    descricao = "",
}: TextoPrincipalProps) {
    return (
        <>
            <Container>
                <h1>{titulo}</h1>
                <p>{descricao}</p>
            </Container>
        </>
    );
}