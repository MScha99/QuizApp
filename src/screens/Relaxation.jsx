/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { Button, Box, Typography, Unstable_Grid2 as Grid } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

const Relaxation = ({ module = 'one' }) => {
  let videoSource = ''
  let videoTitle = ''

  // Determine video source and title based on the module value
  switch (module) {
    case 'one':
      videoSource = 'media/video/fish-clip1.mp4'
      videoTitle = 'Po module pierwszym'
      break
    case 'two':
      videoSource = 'media/video/fish-clip2.mp4'
      videoTitle = 'Po module drugim'
      break
    case 'three':
      videoSource = 'media/video/fish-clip3.mp4'
      videoTitle = 'Po module trzecim'
      break
    default:
      // Default case: handle if module value does not match any specific case
      videoSource = '' // Set to an empty string or a default video source
      videoTitle = 'Invalid module' // Display an error message
      break
  }

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
          {videoTitle}
        </Typography>

        {videoSource && ( // Render video if videoSource is not empty
          <Box sx={{ marginTop: 5, marginBottom: 5 }}>
            <video width='854' height='480' controls>
              <source src={videoSource} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </Box>
        )}

        {!videoSource && ( // Render message if videoSource is empty (invalid module)
          <Typography
            sx={{
              fontSize: '18px',
              lineHeight: '24px',
              color: '#FF0000',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'center',
              marginTop: 5,
            }}
          >
            Invalid module selected.
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default Relaxation
