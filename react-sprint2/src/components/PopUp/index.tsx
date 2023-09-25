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
        <Estilo><h1>Realmente deseja seguir com a solicitação?</h1></Estilo>
        <DialogActions>
          <Button onClick={handleClose}>Não</Button>
          <Button onClick={handleClose}>Sim</Button>
          <Button onClick={handleClose}>Sim</Button>
          <Button onClick={handleClose}>Sim</Button>
        </DialogActions>
      </Dialog>

    </div >
  );
}
