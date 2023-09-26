import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { BotaoPainelVerde } from '../Botao/style';
import { Estilo } from './style';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SelectSmall from '../SelectStatus';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
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
          <SelectSmall />
        </Estilo>
        <Button onClick={handleClose}>Voltar</Button>
        <Button onClick={handleClose}>Atualizar</Button>

      </Dialog>

    </div >
  );
}
