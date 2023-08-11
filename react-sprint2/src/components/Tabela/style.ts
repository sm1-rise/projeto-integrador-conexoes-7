import styled from "styled-components";

export const ContainerTabela = styled.div`
    margin: 100px;
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

thead{
  border: 1px solid black;
}
`;

export const HeadTabela = styled.div`

    tr{
        padding:0px 60px;
         text-align: center;  
         background: #556ff5;
    }

`

