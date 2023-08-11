import { CSSProperties } from "react"
import styled from "styled-components";
import { GlobalStyle } from "../../geral";
import { css } from "@emotion/react";


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
        background-color:  #556FF5;
        `,

}

export const Container = styled.button`
    font-size:14px;
    color:white;
    padding: 10px 122px;
    margin-top: 20px;
    border: 1px #556FF5;
    border-radius: 5px;
    cursor:pointer;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;

   

`