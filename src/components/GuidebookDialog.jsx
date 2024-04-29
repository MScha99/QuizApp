import { useState, Fragment} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InfoIcon from '@mui/icons-material/InfoOutlined';

export default function GuidebookDialog() {
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
                    variant="contained"
                    onClick={handleClickOpen}
                    size="large"
                    startIcon={<InfoIcon />}
                    sx={{
                        fontSize: "16px",
                        lineHeight: "22px",
                        fontFamily: "Inter, sans-serif",
                        color: "#FFFFFF",
                        backgroundColor: "#1CB0F6",
                        textTransform: "none",
                        boxShadow: "none",
                        borderWidth: 2,
                        borderColor: "#E5E5E5",
                        ":hover": {
                            borderWidth: 2,
                            boxShadow: "none",
                            backgroundColor: "#0083CB"
                        },
                        ":active": {
                            borderWidth: 2,
                            boxShadow: "none",
                            backgroundColor: "#0068A4"
                        }
                    }}
                >
                    Poradnik
                </Button>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={true}
                maxWidth="md"
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Poradnik
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Terve! Kuka sinä olet? - Cześć! Kim jesteś?<br />
                        Minä olen Elsa. - Jestem Elsa.<br />
                        Anteeksi, kuka sinä olet? - Przepraszam, kim jesteś?<br />
                        Minä olen Otso. - Jestem Otso.<br />
                        Tervetuloa! - Witam!<br />
                        Jee! Onnea! - Jej! Powodzenia!<br />
                        Liisa, sinä olet hauska. - Liisa, jesteś zabawna.<br />
                        Kippis ja paljon onnea! - Na zdrowie i gratulacje!<br />
                        Elsa on nainen. - Elsa jest kobietą.<br />
                        Väinö on mies. - Väinö jest mężczyzną.<br />
                        Anteeksi, kuka hän on? - Przepraszam, kim ona jest?<br />
                        Hän on lapsi. - Ona jest dzieckiem.<br />
                        Sinä olet todella komea. - Jesteś naprawde przystojny.<br />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>OK</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}