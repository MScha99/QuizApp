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
          maxHeight: '85vh',
          maxWidth: '60vw',
          minWidth: '60vw',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '10vh',
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
            marginTop: '2vh',
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
        <Link to='/relaxone'>
          <Button
            variant='outlined'
            sx={{
              borderRadius: '12px',
              paddingTop: '8px',
              paddinLeft: '16px',
              paggingRight: '16px',
              paddingBottom: '8px',
              marginBottom: '8px',
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif',
              color: '#4B4B4B',
              textTransform: 'none',
              boxShadow: 'none',
              borderWidth: 2,
              width: '20vw',
              borderColor: '#E5E5E5',
              ':hover': {
                borderWidth: 2,
                borderColor: '#1CB0F6',
                backgroundColor: '#E3F5FE',
              },
            }}
          >
            Odpoczynek po module pierwszym
          </Button>
        </Link>
        <Link to='/relaxtwo'>
          <Button
            variant='outlined'
            sx={{
              borderRadius: '12px',
              paddingTop: '8px',
              paddinLeft: '16px',
              paggingRight: '16px',
              paddingBottom: '8px',
              marginBottom: '8px',
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif',
              color: '#4B4B4B',
              textTransform: 'none',
              boxShadow: 'none',
              borderWidth: 2,
              width: '20vw',
              borderColor: '#E5E5E5',
              ':hover': {
                borderWidth: 2,
                borderColor: '#1CB0F6',
                backgroundColor: '#E3F5FE',
              },
            }}
          >
            Odpoczynek po module drugim
          </Button>
        </Link>
        <Link to='/relaxthree'>
          <Button
            variant='outlined'
            sx={{
              borderRadius: '12px',
              paddingTop: '8px',
              paddinLeft: '16px',
              paggingRight: '16px',
              paddingBottom: '8px',
              marginBottom: '8px',
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif',
              color: '#4B4B4B',
              textTransform: 'none',
              boxShadow: 'none',
              borderWidth: 2,
              width: '20vw',
              borderColor: '#E5E5E5',
              ':hover': {
                borderWidth: 2,
                borderColor: '#1CB0F6',
                backgroundColor: '#E3F5FE',
              },
            }}
          >
            Odpoczynek po module trzecim
          </Button>
        </Link>

        <Link to='/tutorial'>
          <Button
            variant='outlined'
            sx={{
              borderRadius: '12px',
              paddingTop: '8px',
              paddinLeft: '16px',
              paggingRight: '16px',
              paddingBottom: '8px',
              marginBottom: '8px',
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif',
              color: '#4B4B4B',
              textTransform: 'none',
              boxShadow: 'none',
              borderWidth: 2,
              width: '20vw',
              borderColor: '#E5E5E5',
              ':hover': {
                borderWidth: 2,
                borderColor: '#1CB0F6',
                backgroundColor: '#E3F5FE',
              },
            }}
          >
            Instrukcja
          </Button>
        </Link>

        <Link to='/quizone'>
          <Button
            variant='outlined'
            sx={{
              borderRadius: '12px',
              paddingTop: '8px',
              paddinLeft: '16px',
              paggingRight: '16px',
              paddingBottom: '8px',
              marginBottom: '8px',
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif',
              color: '#4B4B4B',
              textTransform: 'none',
              boxShadow: 'none',
              borderWidth: 2,
              width: '20vw',
              borderColor: '#E5E5E5',
              ':hover': {
                borderWidth: 2,
                borderColor: '#1CB0F6',
                backgroundColor: '#E3F5FE',
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
              borderRadius: '12px',
              paddingTop: '8px',
              paddinLeft: '16px',
              paggingRight: '16px',
              paddingBottom: '8px',
              marginBottom: '8px',
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif',
              color: '#4B4B4B',
              textTransform: 'none',
              boxShadow: 'none',
              borderWidth: 2,
              width: '20vw',
              borderColor: '#E5E5E5',
              ':hover': {
                borderWidth: 2,
                borderColor: '#1CB0F6',
                backgroundColor: '#E3F5FE',
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
              borderRadius: '12px',
              paddingTop: '8px',
              paddinLeft: '16px',
              paggingRight: '16px',
              paddingBottom: '8px',
              marginBottom: '2vh',
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif',
              color: '#4B4B4B',
              textTransform: 'none',
              boxShadow: 'none',
              borderWidth: 2,
              width: '20vw',
             
              borderColor: '#E5E5E5',
              ':hover': {
                borderWidth: 2,
                borderColor: '#1CB0F6',
                backgroundColor: '#E3F5FE',
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
