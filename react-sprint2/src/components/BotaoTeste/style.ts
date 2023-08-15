import { css } from "styled-components"
import styled from "styled-components"

const DefStyle = {
    primary: css`
          font-size:14px;
          color:#fff;
          padding: 10px 122px;
          background-color:  #556FF5;
    `,
    secondary: css`
        font-size:14px;
        color:#fff;
        padding: 10px 122px;
        background-color:  #000;
        `
};

interface ContainerPropsB {
    type: keyof typeof DefStyle;
    destrutive?: boolean
}

export const Container = styled.button`
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

export const BotaoPainel = styled(Container)`
    background-color:#fff;
    color:#556FF5;
    font-size:12px;
    padding: 7px 4px;
    border: 1px solid #556FF5;
`

export const BotaoPainel2 = styled(Container)`
    background-color:#fff;
    color:#388E3C;
    font-size:12px;
    padding: 7px 4px;
    border: 1px solid #388E3C;
`

