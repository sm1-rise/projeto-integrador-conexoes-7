import { useState, useEffect } from "react";
import Botao from '../Botao';
import Modal from '../Modal';
import { ContainerTabela, Info, PosicaoBotao } from './style';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Order {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    servico_escolhido: string;
    preferencia_horario: string;
    updatedAt:Date;
    status:string;
}

export default function TabelaApi() {
    const [order, setOrder] = useState <Order[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/order')
            .then(response => {
                setOrder(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar os pedidos:', error);
            });
    }, []);

    return (
        <>
            <ContainerTabela>
                <Info>
                    <table>
                        <thead>
                            <tr>
                                <th>Codigo Pedido</th>
                                <th align="right">Nome do Cliente</th>
                                <th align="right">Serviço solicitado</th>
                                <th align="right">Data da contratação</th>
                                <th align="right">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.map((order) => (
                                <tr key={order.id}>
                                    <td align="right">{order.id}</td>
                                    <td align="right">{order.nome}</td>
                                    <td align="right">{order.servico_escolhido}</td>
                                    <td align="right">{new Date(order.updatedAt).toLocaleDateString()}</td>
                                    <td align="right">{order.status}</td>
                                    <PosicaoBotao>
                                        <td>
                                            <Link to={`/detalhe/${order.id}`}>
                                                <Botao type='botaoPainelAzul' text='ver detalhes' />
                                            </Link>
                                            <Modal />
                                        </td>
                                    </PosicaoBotao>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Info>
            </ContainerTabela>
        </>
    );
}