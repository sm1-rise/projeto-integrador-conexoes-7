import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { BotaoPainelVerde } from '../Buttom/style';
import { Estilo } from './style';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import AlertUpdate from '../AlertUpdate';

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

export default function PopUpStatusUpdate({ id }: AlertDialogProps) {

  const [open, setOpen] = React.useState(false);

  const [status, setStatus] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
      setStatus(event.target.value);
  };

  const [showAlert, setShowAlert] = React.useState(false);

  const handleStatusUpdate = async () => {
      const response = await axios.put(`http://localhost:3000/order/${id}`, { status: status });
      if (response.status == 200) { 
          setShowAlert(true);
          setTimeout(() => {
              setShowAlert(false);
            }, 2000);
      }
      else {
          console.log("Erro ao atualizar o status do pedido.")
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
              {showAlert && <AlertUpdate />}
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
