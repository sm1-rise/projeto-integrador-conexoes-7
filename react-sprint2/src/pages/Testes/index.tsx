import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Tabela from "../../components/Tabela";
import Pesquisa from "../../components/Pesquisa";
import { EstiloPesquisa } from "../../components/Pesquisa/styled";
import TextoPrincipal from "../../components/TextoPrincipal";
import FormService from "../../components/FormServices";
import FormAPI from "../../components/FormAPI";
import SelectSmall from "../../components/SelectStatus";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import MyComponent from "../../components/Teste";
import { Form } from "react-router-dom";
import TabelaApi from "../../components/TabelaApi";




export default function Service() {
    return (
        <>
            <Header />
            <TextoPrincipal titulo="Atualizar pedido" descricao="" />
            {/* <MyComponent /> */}
            {/* <FormAPI /> */}
            <TabelaApi />
            <Footer />
        </>
    );
}