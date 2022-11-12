import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { borderRadius, sizeHeight, width } from '@mui/system';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" 
        onClick={handleClickOpen} 
        style={{ fontWeight: 'bold',
                 fontSize: '40px',
                 font: 'Integer',
                 color: '#000000'}} 
        sx={{
          backgroundColor: "#FFFFFF",
          borderColor: "#FFFFFF",
          width: '200px',
          height: '86px',
          borderRadius:'30px'
          

      }}>
        등록
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ fontWeight: 'bold'}}>
          {"강좌 등록"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            강좌를 등록하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>네</Button>
          <Button onClick={handleClose} autoFocus>
            아니오
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}