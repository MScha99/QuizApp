/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { Button, Box, Typography } from '@mui/material'
import TutorialDialog from '../components/TutorialDialog'

const Homepage = () => {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          bgcolor: 'white',
          border: 2,
          borderRadius: 12,
          borderColor: '#E5E5E5',
          minHeight: '70vh',
          maxHeight: '70vh',
          maxWidth: '60vw',
          minWidth: '60vw',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '15vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            lineHeight: '30px',
            color: '#000000',
            fontWeight: 'bold',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '24px',
            maxWidth: '100%',
            textAlign: 'center',
          }}
        >
          Aplikacja do nauki języka FIńskiego
        </Typography>
        <Link to='/relaxation'>
          <Button
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
            Odpoczynek pomiędzy modułami
          </Button>
        </Link>

        <TutorialDialog />

        <Link to='/quizone'>
          <Button
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
            Rozpocznij pierwszy moduł
          </Button>
        </Link>
        <Link to='/quiztwo'>
          <Button
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
            Rozpocznij drugi moduł
          </Button>
        </Link>
        <Link to='/quizthree'>
          <Button
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
            Rozpocznij trzeci moduł
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default Homepage
