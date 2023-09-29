import { useState, useEffect } from "react";
import Botao from '../Botao';
import { ContainerTabela, Info, PosicaoBotao } from './style';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { BotaoLogin, BotaoPainelVerde } from '../Botao/style';
import { Estilo } from './style';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React from "react";

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
                                            <AlertDialogSlide id={order.id} />
                                        </td>
                                    </PosicaoBotao>
                                </tr>

                            ))}
                            <Alert severity="success">Status atualizado com sucesso!</Alert>
                        </tbody>
                    </table>
                </Info>
            </ContainerTabela>

        </>
    );
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface AlertDialogProps {
    id: number;
}

function AlertDialogSlide({ id }: AlertDialogProps) {

    const [open, setOpen] = React.useState(false);

    const [status, setStatus] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
    };

    const handleStatusUpdate = async () => {
        const response = await axios.put(`http://localhost:3000/order/${id}`, { status: status });
        if (response.status == 200) { console.log("Status atualizado com sucesso!" + id); }
        else {
            console.log("Erro ao atualizar o status do pedido.")
            AlertUpdate();
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        location.reload();
        setOpen(false);
    };

    return (
        <div>
            <BotaoPainelVerde onClick={handleClickOpen}>atender solicitação</BotaoPainelVerde>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                onClick={(event) => { event.defaultPrevented }}
                aria-describedby="alert-dialog-slide-description"
            >
                <Estilo><h1> Atualizar Status </h1>

                </Estilo>
                <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                    <InputLabel id="demo-select-small-label">Status</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={status}
                        label="status"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                        </MenuItem>
                        <MenuItem value={"CANCELADO"}>CANCELADO</MenuItem>
                        <MenuItem value={"ACEITO"}>ACEITO</MenuItem>
                        <MenuItem value={"EM ANDAMENTO"}>EM ANDAMENTO</MenuItem>
                        <MenuItem value={"FINALIZADO"}>FINALIZADO</MenuItem>
                        <MenuItem value={"ATRASADO"}>ATRASADO</MenuItem>
                    </Select>
                </FormControl>
                <Button onClick={handleStatusUpdate}>Atualizar</Button>
                <Button onClick={handleClose}>Voltar</Button>
            </Dialog>
        </div >

    );
}




const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function AlertUpdate() {
    return (
        <Alert
            severity="success">Status atualizado com sucesso!</Alert>
    );
}


