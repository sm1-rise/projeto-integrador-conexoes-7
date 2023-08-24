import Botao from "../Botao";
import { Form, CamposForm, Container } from "./style";
import { FormEventHandler, useState } from "react";


export default function LoginAcesso() {
    const [codigo, setCodigo] = useState("");
    const [senha, setSenha] = useState("");

    const logar: FormEventHandler<HTMLFormElement> = (evento) => {
        //evita recarregamento da pagina no envio do formulario
        evento.preventDefault();
        //pra ver o que vem no parametro evento
        console.log(evento);
        //pra ver o valor de cada campo do formulario
        console.log(codigo);
        console.log(senha);
    };

    return (
        <>
            <Container>
                <Form onSubmit={logar}>
                    <CamposForm>
                        <label>Código de acesso</label>
                        <input
                            type="text"
                            value={codigo}
                            onChange={(e) => setCodigo(e.target.value)}
                        />

                        <label>Senha</label>
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />

                    </CamposForm>
                    <Botao type="botaoLogin" text="entrar" />
                    <Botao type="botaoPainelAzul" text="ver detalhes" />
                    <Botao ty

                </Form>

            </Container >
        </>
    );
}