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
        <DialogContentText id='alert-dialog-description'>
          Terve! Kuka sinä olet? - Cześć! Kim jesteś?
          <br />
          Minä olen Elsa. - Jestem Elsa.
          <br />
          Anteeksi, kuka sinä olet? - Przepraszam, kim jesteś?
          <br />
          Minä olen Otso. - Jestem Otso.
          <br />
          Tervetuloa! - Witam!
          <br />
          Jee! Onnea! - Jej! Powodzenia!
          <br />
          Liisa, sinä olet hauska. - Liisa, jesteś zabawna.
          <br />
          Kippis ja paljon onnea! - Na zdrowie i gratulacje!
          <br />
          Elsa on nainen. - Elsa jest kobietą.
          <br />
          Väinö on mies. - Väinö jest mężczyzną.
          <br />
          Anteeksi, kuka hän on? - Przepraszam, kim ona jest?
          <br />
          Hän on lapsi. - Ona jest dzieckiem.
          <br />
          Sinä olet todella komea. - Jesteś naprawde przystojny.
          <br />
          Suomi on aina kaunis. - Finlandia jest zawsze piękna. <br />
        </DialogContentText>
      )
      break

    case 'two':
      dialogContentText = (
        <DialogContentText id='alert-dialog-description'>
          Tämä on hyvä sauna. - To jest dobra sauna.
          <br />
          Hilla on hiljainen tyttö. - Hilla jest cichą dziewczyną.
          <br />
          Olet mukava poika. - Jesteś dobrym chłopakiem.
          <br />
          Olet rehellinen nainen. - Jesteś szczerą kobietą.
          <br />
          Millainen koira se on? - Jakiego rodzaju to jest pies?
          <br />
          Minulla on pupu. - Ja mam zajączka.
          <br />
          Se on pieni ja kiltti. - To jest małe i miłe.
          <br />
          Tämä kissa on tuhma! - Ten kot jest niegrzeczny.
          <br />
          Hänellä on sininen käärme. - Ona ma niebieskiego węża.
          <br />
          Millainen maa Viro on? - Jakim krajem jest Estonia?
          <br />
          Viro on pieni ja kaunis. - Estonia jest mała i piękna.
          <br />
          Onko Ruotsi kylmä maa? - Czy Szwecja jest zimnym krajem?
          <br />
        </DialogContentText>
      )
      break

    case 'three':
      dialogContentText = (
        <DialogContentText id='alert-dialog-description'>
          Missä kaupunki on? - Gdzie jest miasto?
          <br />
          Kaunis laulu on venäläinen. - Piękna piosenka jest rosyjska <br />
          Oletteko te nyt pari? - Jesteście teraz parą?
          <br />
          Me olemme naimisissa. - Jesteśmy małżeństwem.
          <br />
          Minä tanssin. - Ja tańcze.
          <br />
          He istuvat yhdessä. - Oni siedzą razem.
          <br />
          Missä te seisotte? - Gdzie stoisz?
          <br />
          Sinä itket harvoin ja naurat usein. - Ty rzadko płaczesz i często się
          śmiejesz.
          <br />
          Minulla on uusi lelu. - Mam nową zabawke.
          <br />
          Sinulla on kaunis talo. - Ty masz piękny dom.
          <br />
          Millainen sauna teillä on? - Jaką masz saune?
          <br />
          Meillä on suuri sauna. - My mamy dużą saune.
          <br />
          Heillä on radio ja televisio. - Oni mają radio i telewizje.
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
        <DialogTitle id='alert-dialog-title'>Słowniczek</DialogTitle>
        <DialogContent>{dialogContentText}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}
