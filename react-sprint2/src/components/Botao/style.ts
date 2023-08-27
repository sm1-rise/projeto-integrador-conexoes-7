import styled from "styled-components"

//Botao funcionando

export const BotaoLogin = styled.button`
    font-size:14px;
    padding: 10px 122px;
    margin-top: 20px;
    border: 1px #556FF5;
    border-radius: 5px;
    color:#fff;
    cursor:pointer;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    background-color:  #556FF5;
`;

export const BotaoPainelAzul = styled(BotaoLogin)`
    background-color:#fff;
    color:#556FF5;
    font-size:12px;
    padding: 7px 26px;
    border: 1px solid #556FF5;

    &:hover{
        background-color:#556FF5;
        color:#fff
    }
`

export const BotaoPainelVerde = styled(BotaoPainelAzul)`
    background-color:#fff;
    color:#388E3C;
    font-size:12px;
    padding: 7px 4px;
    border: 1px solid #388E3C;

    &:hover{
        background-color:#388E3C;
        color:#fff
    }
`

export const BotaoCinza = styled(BotaoLogin)`
    background-color: #CACACA;
    color: #fff;
    padding: 8px 12px;

    &:hover{
        background-color: #000;
    }
`

