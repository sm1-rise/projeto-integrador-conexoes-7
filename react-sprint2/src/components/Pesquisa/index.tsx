import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';
import { BotaoGoPainel } from '../Botao/style';

interface Pedido {
    codigoPedido: string;
    nomeCliente: string;
    servicoSolicitado: string;
    data: string;
    status: string;
  }

const pedidos: Pedido[] = [
    { codigoPedido: 'A10962332Q', nomeCliente: 'Pedro', servicoSolicitado: 'Plano 3', data: '23/10/2010', status: 'Inicial' },
    { codigoPedido: 'A10925332Q', nomeCliente: 'Jorge', servicoSolicitado: 'Plano 2', data: '25/10/2010', status: 'Final' },
    { codigoPedido: 'A10923332Q', nomeCliente: 'Talita', servicoSolicitado: 'Plano 2', data: '23/11/2010', status: 'Final' },
    { codigoPedido: 'A10924332Q', nomeCliente: 'Senna', servicoSolicitado: 'Plano 3', data: '05/11/2010', status: 'Inicial' },
    { codigoPedido: 'B1091332Q', nomeCliente: 'Julia', servicoSolicitado: 'Plano 2', data: '18/11/2010', status: 'Inicial' },
  ];


export default function Pesquisa() {
  const [selecionarPedido, setSelecionarPedido] = React.useState<Pedido | null>(null);

  const handlePedidoClick = (pedido: Pedido | null) => {
    setSelecionarPedido(pedido);
  };

  return (
    <div>
      <Autocomplete
        disablePortal
        options={pedidos}
        getOptionLabel={(pedido) => `${pedido.codigoPedido} - ${pedido.nomeCliente} - ${pedido.servicoSolicitado} - ${pedido.data} - ${pedido.status}`}
        sx={{ width: 900 }}
        renderInput={(params) => <TextField {...params} label="Pedidos" />}
        onChange={(event, value) => handlePedidoClick(value)}
      />

      {selecionarPedido && (
        <Link to="/detalhesServicos">
          <BotaoGoPainel>Buscar</BotaoGoPainel>
        </Link>
        
      )}
    </div>
  );
}