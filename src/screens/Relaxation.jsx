/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { Button, Box, Typography, Unstable_Grid2 as Grid } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

const Relaxation = () => {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        border: 2,
        borderRadius: 12,
        borderColor: '#E5E5E5',
        minHeight: '70vh',
        // maxHeight: '70vh',
        maxWidth: '80vw',
        minWidth: '80vw',
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
      <Box sx={{}}>
        <Grid container spacing={1} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={10} sm={10} md={10} />
          <Grid item xs={2} sm={2} md={2}>
            <Link to='/'>
              <Button
                variant='outlined'
                startIcon={<HomeIcon />}
                size='large'
                sx={{
                  marginTop: 1,
                  // marginRight: 1,
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
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
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
              Odpoczynek pomiędzy modułami
            </Typography>
          </Grid>
        </Grid>
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
            marginTop: 3,
          }}
        >
          Po module pierwszym
        </Typography>
        <Box sx={{ marginTop: 5, marginBottom: 5 }}>
          <video width='854' height='480' controls>
            <source src='media/video/fish-clip1.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </Box>
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
          Po module drugim
        </Typography>
        <Box sx={{ marginTop: 5, marginBottom: 5 }}>
          <video width='854' height='480' controls>
            <source src='media/video/fish-clip2.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </Box>

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
          Po module trzecim
        </Typography>
        <Box sx={{ marginTop: 5, marginBottom: 5 }}>
          <video width='854' height='480' controls>
            <source src='media/video/fish-clip3.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <p>
            &quot;Underwater World 8K ULTRA HD – Marine Life, Sea Animals and
            Coral Reef &quot; YouTube, 8k VIDEOS HDR, 17.12.2021{' '}
          </p>
        </Box>
      </Box>
    </Box>
  )
}

export default Relaxation
