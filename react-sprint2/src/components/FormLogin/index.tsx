import axios from "axios";
import Botao from "../Buttom";
import { Form, CamposForm, Container } from "./style";
import { FormEventHandler, useState, useEffect } from "react";
import { Alert, AlertTitle } from "@mui/material";


export default function LoginAcesso() {

    const [codigoAcesso, setCodigoAcesso] = useState("");
    const [senha, setSenha] = useState("");
    const [token, setToken] = useState<string>("");
    const [login, setLogin] = useState("");
    const [error, setError] = useState("");

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
            localStorage.setItem("token", token); 
            if(token){
                window.location.href = "/inicio"; 
            }// Redirecione o usuário para a página desejada após o login bem-sucedido
        })
        .catch(error => {
            if (error.response && error.response.data) {
                const errorMessage = error.response.data.error; // Obtém a mensagem de erro da resposta
                setError(errorMessage); // Armazena a mensagem de erro no estado "error"
            } else {
                setError("Não foi possível realizar o login"); // Caso não haja uma mensagem de erro específica na resposta
            }
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
                {error &&
                    <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {error}
                </Alert>
                }
                
            </Container >
        </>
    );
}


