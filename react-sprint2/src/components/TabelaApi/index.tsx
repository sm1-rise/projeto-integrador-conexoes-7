import { useState, useEffect } from "react";
import Botao from '../Buttom';
import { ContainerTabela, Info, PosicaoBotao } from './style';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PopUpStatusUpdate from "../PopUpStatusUpdate";

interface Order {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    servico_escolhido: string;
    preferencia_horario: string;
    updatedAt: Date;
    status: string;
}

export default function TabelaApi() {

    const [order, setOrder] = useState<Order[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/order')
            .then(response => {
                setOrder(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar os pedidos:', error);
            });
    }, []);

    const [searchTerm, setSearchTerm] = useState("");
    
    const filteredOrder = order.filter((order) => {
        return order.nome.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <> 
            <ContainerTabela>
                <Info>
                <input
                        type="text"
                        placeholder="Pesquisar por nome..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
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
                            {filteredOrder.map((order) => (
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
                                           <PopUpStatusUpdate id = {order.id} />
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

