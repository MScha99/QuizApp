/* eslint-disable react/prop-types */
import { useState, Fragment } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import InfoIcon from '@mui/icons-material/InfoOutlined'

export default function GuidebookDialog({ module = ' ' }) {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  let dialogContentText = null

  switch (module) {
    case 'one':
      dialogContentText = (
        <DialogContentText
          id='alert-dialog-description'
          sx={{
            fontSize: '20px',
            fontFamily: "Inter, sans-serif",
          }}
        >
          <b>Terve! Kuka sinä olet?</b> - Cześć! Kim jesteś?
          <br />
          <b>Minä olen Elsa.</b> - Jestem Elsa.
          <br />
          <b>Anteeksi, kuka sinä olet?</b> - Przepraszam, kim jesteś?
          <br />
          <b>Minä olen Otso.</b> - Jestem Otso.
          <br />
          <b>Tervetuloa!</b> - Witam!
          <br />
          <b>Jee! Onnea!</b> - Jej! Powodzenia!
          <br />
          <b>Liisa, sinä olet hauska.</b> - Liisa, jesteś zabawna.
          <br />
          <b>Kippis ja paljon onnea!</b> - Na zdrowie i gratulacje!
          <br />
          <b>Elsa on nainen.</b> - Elsa jest kobietą.
          <br />
          <b>Väinö on mies.</b> - Väinö jest mężczyzną.
          <br />
          <b>Anteeksi, kuka hän on?</b> - Przepraszam, kim ona jest?
          <br />
          <b>Hän on lapsi.</b> - Ona jest dzieckiem.
          <br />
          <b>Sinä olet todella komea.</b> - Jesteś naprawde przystojny.
          <br />
          <b>Suomi on aina kaunis.</b> - Finlandia jest zawsze piękna. <br />
        </DialogContentText>
      )
      break

    case 'two':
      dialogContentText = (
        <DialogContentText
          id='alert-dialog-description'
          sx={{
            fontSize: '20px',
            fontFamily: "Inter, sans-serif",
          }}
        >
          <b>Tämä on hyvä sauna.</b> - To jest dobra sauna.
          <br />
          <b>Hilla on hiljainen tyttö.</b> - Hilla jest cichą dziewczyną.
          <br />
          <b>Olet mukava poika.</b> - Jesteś dobrym chłopakiem.
          <br />
          <b>Olet rehellinen nainen.</b> - Jesteś szczerą kobietą.
          <br />
          <b>Millainen koira se on?</b> - Jakiego rodzaju to jest pies?
          <br />
          <b>Minulla on pupu.</b> - Ja mam zajączka.
          <br />
          <b>Se on pieni ja kiltti.</b> - To jest małe i miłe.
          <br />
          <b>Tämä kissa on tuhma!</b> - Ten kot jest niegrzeczny.
          <br />
          <b>Hänellä on sininen käärme.</b> - Ona ma niebieskiego węża.
          <br />
          <b>Millainen maa Viro on?</b> - Jakim krajem jest Estonia?
          <br />
          <b>Viro on pieni ja kaunis.</b> - Estonia jest mała i piękna.
          <br />
          <b>Onko Ruotsi kylmä maa?</b> - Czy Szwecja jest zimnym krajem?
          <br />
        </DialogContentText>
      )
      break

    case 'three':
      dialogContentText = (
        <DialogContentText
          id='alert-dialog-description'
          sx={{
            fontSize: '20px',
            fontFamily: "Inter, sans-serif",
          }}
        >
          <b>Missä kaupunki on?</b> - Gdzie jest miasto?
          <br />
          <b>Kaunis laulu on venäläinen.</b> - Piękna piosenka jest rosyjska
          <br />
          <b>Oletteko te nyt pari?</b> - Jesteście teraz parą?
          <br />
          <b>Me olemme naimisissa.</b> - Jesteśmy małżeństwem.
          <br />
          <b>Minä tanssin.</b> - Ja tańcze.
          <br />
          <b>He istuvat yhdessä.</b> - Oni siedzą razem.
          <br />
          <b>Missä te seisotte?</b> - Gdzie stoisz?
          <br />
          <b>Sinä itket harvoin ja naurat usein.</b> - Ty rzadko płaczesz i często się śmiejesz.
          <br />
          <b>Minulla on uusi lelu.</b> - Mam nową zabawke.
          <br />
          <b>Sinulla on kaunis talo.</b> - Ty masz piękny dom.
          <br />
          <b>Millainen sauna teillä on?</b> - Jaką masz saune?
          <br />
          <b>Meillä on suuri sauna.</b> - My mamy dużą saune.
          <br />
          <b>Heillä on radio ja televisio.</b> - Oni mają radio i telewizje.
          <br />
        </DialogContentText>
      )
      break

    default:
      break
  }

  return (
    <Fragment>
      <div>
        <Button
          variant='contained'
          onClick={handleClickOpen}
          size='large'
          startIcon={<InfoIcon />}
          sx={{
            borderRadius: '12px',
            paddingTop: '10px',
            paddinLeft: '18px',
            paggingRight: '18px',
            paddingBottom: '10px',
            fontSize: '16px',
            lineHeight: '22px',
            fontFamily: 'Inter, sans-serif',
            color: '#FFFFFF',
            backgroundColor: '#1CB0F6',
            textTransform: 'none',
            boxShadow: 'none',
            borderWidth: 2,
            borderColor: '#E5E5E5',
            ':hover': {
              borderWidth: 2,
              boxShadow: 'none',
              backgroundColor: '#0083CB',
            },
            ':active': {
              borderWidth: 2,
              boxShadow: 'none',
              backgroundColor: '#0068A4',
            },
          }}
        >
          Słowniczek
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
        <DialogTitle
          id='alert-dialog-title'
          sx={{
            fontSize: '24px',
            fontFamily: "Inter, sans-serif",
          }}
        >
          Słowniczek
        </DialogTitle>
        <DialogContent

        >
          {dialogContentText}
        </DialogContent>
        <DialogActions>
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
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}
