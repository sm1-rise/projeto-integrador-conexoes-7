import styled from "styled-components";

export const ContainerTabela = styled.div`
    margin: 50px;
    max-width:100%
    display: flex;
    justify-content:center;
    padding: 0px px;
`

export const Info = styled.section`
  width: 100%;
  background-color: #fff;
  border: 1px solid #b4b4b4;
  border-radius: 10px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  padding: 10px;

td, th {
  text-align: center;
  
 
}

th{
  padding: 20px;
  

}
td{
  font-weight:400;
  
}

table{
  width: 100%;
  table-layout: fixed;
  text-align: center;
  

}

input{
  width:400px;
  height: 40px;
  padding: 20px;
  background-color: rgba(85, 111, 245, 0.20);
  margin-left: 10px;
  border: 1px solid #FFF;
  border-radius: 30px;

}

`;

export const PosicaoBotao = styled.div`
  td{
    padding-bottom:20px;
    padding-right: 10px;
    border:none;
    
  }
`;


export const Estilo = styled.div`
    margin: 50px;
    padding-left: 10px;
    
    h1{
        margin-top:0px;
        padding-left: 90px;
        padding-right: 100px;
        text-transform:uppercase;
        color: #556FF5;
        font-size:20px;
    
    }

    button {
        color: red;
        font-size: 200px;
    }
    
`;






