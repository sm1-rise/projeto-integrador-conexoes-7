import { css } from "styled-components";
import styled from "styled-components";


interface BttProps {
    destructive?: boolean
}

export const Btt = styled.button<BttProps>`
    padding: 10px 15px;
    background: #fff;
    color: #388E3C;
    font-weight:bold;
    border-radius: 5px;
    border: 0;
    outline: 0;
    margin-top: 25px;
    cursor:pointer;
    font-size: 13px;

    ${(props) => {
        return props.destructive && css`
        background:#fff;
        color: #388E3C;
        border-radius:5px #000;
        border 0;
        `
    }}
`