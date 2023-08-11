import styled from "styled-components";

export const Form = styled.form`
  width: 410px;
  background-color: #fff;
  border: 1px solid #DCDCDC;
  border-radius: 20px;
  padding: 50px;
  `;

export const CamposForm = styled.div`
    label{
      font-weight: 700;
      font-size: 14px;
      display: flex;
      padding-top: 10px;
      padding-bottom:5px;
    }
      input { 
      display: flex;
      width: 288px;
      padding-top:10px;
      padding: 10px;
      border: 1px solid #B4B4B4;
      border-radius: 5px;
      justify-content: center
    }
`;

export const Container = styled.div`
width: 1200px;
max-width: 100 %;
margin: 0 auto;
`;