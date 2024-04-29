import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

export default function HomeDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <div>
                <Button
                    variant="outlined"
                    startIcon={<HomeIcon />}
                    onClick={handleClickOpen}
                    size="large"
                    sx={{
                        fontSize: "16px",
                        lineHeight: "22px",
                        fontFamily: "Inter, sans-serif",
                        color: "#4B4B4B",
                        textTransform: "none",
                        boxShadow: "none",
                        borderWidth: 2,
                        borderColor: "#E5E5E5",
                        ":hover": {
                            borderWidth: 2,
                        }
                    }}
                >
                    Strona główna
                </Button>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={true}
                maxWidth="sm"
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Wrócić do ekranu głównego?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Wszystkie postępy zostaną niezapisane
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Anuluj</Button>
                    <Link to='/'>
                        <Button onClick={handleClose} autoFocus>
                            Wróć
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
