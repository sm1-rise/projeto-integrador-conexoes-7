import axios from "axios";
import Botao from "../Buttom";
import { Form, CamposForm, Container } from "./style";
import { FormEventHandler, useState, useEffect } from "react";


export default function LoginAcesso() {

    const [codigoAcesso, setCodigoAcesso] = useState("");
    const [senha, setSenha] = useState("");
    const [token, setToken] = useState<string>("");
    const [login, setLogin] = useState("");


    const data = {
        codigoAcesso,
        senha
    }

    const logar: FormEventHandler<HTMLFormElement> = (evento) => {
        evento.preventDefault();

        const url = "http://localhost:3000/login";
        axios.post(url, data)
        .then((response) => {
            const token = response.data.token; 
            setToken(token); 
            setLogin(response.data);
            console.log(login);
            localStorage.setItem("token", token); 
            
            if(token){
                window.location.href = "/inicio"; 
            }// Redirecione o usuário para a página desejada após o login bem-sucedido
        })
        .catch(error => {
            console.error("Não foi possível realizar o login");
        });
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


