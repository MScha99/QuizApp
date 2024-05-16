
import { useState, Fragment } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

export default function HomeDialog() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <div>
                <Button
                    variant="outlined"
                    startIcon={<HomeIcon />}
                    onClick={handleClickOpen}
                    size="large"
                    sx={{
                        borderRadius: '12px',
                        paddingTop: '8px',
                        paddinLeft: '16px',
                        paggingRight: '16px',
                        paddingBottom: '8px',
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
                            borderColor: "#1CB0F6",
                            backgroundColor: '#E3F5FE',
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
                <DialogTitle
                    id="alert-dialog-title"
                    sx={{
                        fontSize: '24px',
                        fontFamily: "Inter, sans-serif",
                    }}
                >
                    Wyjść do ekranu głównego?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        id="alert-dialog-description"
                        sx={{
                            fontSize: '20px',
                            fontFamily: "Inter, sans-serif",
                        }}
                    >
                        Wszystkie postępy zostaną niezapisane.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        size='large'
                        sx={{
                            fontSize: '16px',
                            fontFamily: "Inter, sans-serif",
                            textTransform: "none",
                        }}
                    >Anuluj
                    </Button>
                    <Link to='/'>
                        <Button
                            onClick={handleClose}
                            autoFocus
                            size='large'
                            sx={{
                                fontSize: '16px',
                                fontFamily: "Inter, sans-serif",
                                textTransform: "none",
                            }}
                        >
                            Wyjdź
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}
