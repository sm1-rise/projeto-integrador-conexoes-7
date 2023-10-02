import axios from "axios";
import Botao from "../Buttom";
import { Form, CamposForm, Container } from "./style";
import { FormEventHandler, useEffect, useState } from "react";


interface User{
    codigoAcesso: string;
    senha:string;
}

export default function LoginAcesso() {
    const [user, setUser] = useState <User[]>([]);

    useEffect (()=>{
        const url = "http://localhost:3000/user";
        axios.get(url)
        .then((response) =>{setUser(response.data)})
    })

     

    const [codigoAcesso, setCodigoAcesso] = useState("");
    const [senha, setSenha] = useState("");
    const [errorMsg, setErrorMsg] = useState ("");
    const [sucess, setSucess] = useState ("");
    const logar: FormEventHandler<HTMLFormElement> = (evento) => {



        //evita recarregamento da pagina no envio do formulario
        evento.preventDefault();
       
        //pra ver o valor de cada campo do formulario
        console.log(codigoAcesso);
        console.log(senha);
    };

    return (
        <>
            <Container>
                <Form onSubmit={logar}>
                    <CamposForm>
                        <label>Código de acesso</label>
                        <input
                            required
                            type="text"
                            value={codigoAcesso}
                            onChange={(e) => setCodigoAcesso(e.target.value)}
                        />

                        <label>Senha</label>
                        <input
                            required
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />

                    </CamposForm>
                    <Botao type="botaoLogin" text="entrar" />
                </Form>

            </Container >
        </>
    );
}