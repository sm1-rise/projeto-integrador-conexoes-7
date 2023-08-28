
import Botao from '../Botao';
import Modal from '../Modal';
import { ContainerTabela, Info, PosicaoBotao } from './style';
import { Link } from 'react-router-dom';

function createData(
    codigoPedido: string,
    nomeCliente: string,
    servicoSolicitado: string,
    data: string,
    status: string,
) {
    return { codigoPedido, nomeCliente, servicoSolicitado, data, status };
}

const pedidos = [
    createData('A10962332Q', 'Pedro', "Plano 3", "23/10/2010", "Inicial"),
    createData('A10925332Q', 'Jorge', "Plano 2", "25/10/2010", "Final"),
    createData('A10923332Q', 'Talita', "Plano 2", "23/11/2010", "Final"),
    createData('A10924332Q', 'Senna', "Plano 3", "05/11/2010", "Inicial"),
    createData('B1091332Q', 'Julia', "Plano 2", "18/11/2010", "Inicial"),
];

export default function Tabela() {
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
                        {pedidos.map((row) => (
                            <tbody key={row.codigoPedido} >
                                <tr>
                                    <td align="right">{row.codigoPedido}</td>
                                    <td align="right">{row.nomeCliente}</td>
                                    <td align="right">{row.servicoSolicitado}</td>
                                    <td align="right">{row.data}</td>
                                    <td align="right">{row.status}</td>
                                    <PosicaoBotao>
                                        <td>
                                            <Link to="/detalhesServicos">
                                            <Botao type='botaoPainelAzul' text='ver detalhes' onClick={() => { console.log("Teste") }} />     

                                            </Link>
                                            <Modal/>
                                        </td>
                                    </PosicaoBotao>

                                </tr>


                            </tbody>
                        ))}
                    </table>
                </Info>
            </ContainerTabela >
        </>
    );
}
