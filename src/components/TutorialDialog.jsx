import { useState, Fragment } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export default function TutorialDIalog() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Fragment>
      <div>
        <Button
          onClick={handleClickOpen}
          variant='outlined'
          sx={{
            fontSize: '16px',
            lineHeight: '22px',
            fontFamily: 'Inter, sans-serif',
            color: '#4B4B4B',
            textTransform: 'none',
            boxShadow: 'none',
            borderWidth: 2,
            borderColor: '#E5E5E5',
            marginBottom: '16px',
            width: '20vw',
            ':hover': {
              borderWidth: 2,
            },
          }}
        >
          Instrukcja
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth='md'
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Instrukcja</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            TODO wrzucić zdjęcie z rozrysowanymi elementami ui podpisanymi
            <br />
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}
