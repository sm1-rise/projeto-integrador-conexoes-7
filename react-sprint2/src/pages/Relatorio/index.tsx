import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import TextoPrincipal from "../../components/TextoPrincipal";
import { NotAuthenticated } from "../../components/NotAuthenticated/NotAuthenticated";
import Chart from "../../components/Chart";
import { Container } from "@mui/material";
import { PosicaoCardsStatus } from "./style";
import StatusQtd from "../../components/StatusQtd";

export default function Relatorio() {

    useEffect(() => {
        NotAuthenticated();
    }, [])

    return (NotAuthenticated() ? (
        <>
            <Header />

            <TextoPrincipal titulo="Relatório" descricao="" />
            <Container>
                <PosicaoCardsStatus>
                    <Chart />
                    <StatusQtd statusDesejado="EM ANDAMENTO" />
                    <StatusQtd statusDesejado="ATRASADO" />
                    <StatusQtd statusDesejado="CANCELADO" />
                    <StatusQtd statusDesejado="ACEITO" />
                    <StatusQtd statusDesejado="FINALIZADO" />
                </PosicaoCardsStatus>


            </Container>
            <Footer />
        </>

    ) : (
        <>
            <Header />
            <TextoPrincipal titulo="Página Não Autorizada" descricao="Você não tem permissão para acessar esta página." />
            <Footer />
        </>
    )

    );
}