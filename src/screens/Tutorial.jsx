import { Button, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'

export default function Tutorial() {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        border: 2,
        borderRadius: 12,
        borderColor: '#E5E5E5',
        minHeight: '70vh',
        // maxHeight: '70vh',
        maxWidth: '85vw',
        minWidth: '85vw',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '5vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Link to='/'>
        <Button
          variant='outlined'
          startIcon={<HomeIcon />}
          size='large'
          sx={{
            marginTop: 1,
            fontSize: '16px',
            lineHeight: '22px',
            fontFamily: 'Inter, sans-serif',
            color: '#4B4B4B',
            textTransform: 'none',
            boxShadow: 'none',
            borderWidth: 2,
            borderColor: '#E5E5E5',
            ':hover': {
              borderWidth: 2,
            },
          }}
        >
          Strona główna
        </Button>
      </Link>
      <Typography
        sx={{
            fontSize: '34px',
            lineHeight: '30px',
            color: '#000000',
            fontWeight: 'bold',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '30px',
            marginTop: '30px',
            borderTop: '2px solid black',  
            borderBottom: '2px solid black', 
            paddingTop: '10px',              
            paddingBottom: '10px' 
        }}
      >
        Przykładowe zadanie typu jednokrotny wybór
      </Typography>
      <img
        src='media/Tutorial/singular.png'
        alt='tutorial img 1'
        style={{
          width: '80%',
        }}
      />
      <Typography
        sx={{
            fontSize: '34px',
            lineHeight: '30px',
            color: '#000000',
            fontWeight: 'bold',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '30px',
            marginTop: '30px',
            borderTop: '2px solid black',  
            borderBottom: '2px solid black', 
            paddingTop: '10px',              
            paddingBottom: '10px' 
        }}
      >
        Przykładowe zadanie typu układanka
      </Typography>
      <video width='854' height='480' controls>
        <source src='media/Tutorial/multiple.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </Box>
  )
}
