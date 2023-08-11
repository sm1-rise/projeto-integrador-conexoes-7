
import { Container } from "./style";
import styled from "styled-components";
import { CSS } from "styled-components/dist/types";


interface TextoBotaoProps {
    text: string;
    onClick?: () => void
}

export default function BotaoTeste({
    text = "enviar"
}: TextoBotaoProps) {
    return <>
        <Container type="secondary">
            {text}
        </Container>
    </>
}

