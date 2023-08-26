
import Botao from '../Botao';
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
    createData('A1092332Q', 'JOAO', "Plano 1", "20/10/2010", "Inicial"),
    createData('A1092332Q', 'JOAO', "Plano 1", "20/10/2010", "Inicial"),
    createData('A1092332Q', 'JOAO', "Plano 1", "20/10/2010", "Inicial"),
    createData('A1092332Q', 'JOAO', "Plano 1", "20/10/2010", "Inicial"),
    createData('A1092332Q', 'JOAO', "Plano 1", "20/10/2010", "Inicial"),
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
                                            
                                            <Botao type='botaoPainelVerde' text='atender solicitações' />
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
