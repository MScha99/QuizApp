/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Box, IconButton, CircularProgress, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export default function AdvertPopup({
  displayPopup,
  setDisplayPopup,
  currentQuestion,
  banners = [],
  quizTime,
}) {
  const [counter, setCounter] = useState(quizTime)
  const [disableClose, setDisableClose] = useState(true)
  const [countdown, setCountdown] = useState(6) // Updated to 6 seconds

  useEffect(() => {
    // Update counter when quizTime changes
    setCounter(quizTime)
  }, [quizTime])

  useEffect(() => {
    const timer = setInterval(() => {
      if (counter > 0) {
        setCounter((prevCounter) => prevCounter - 1)
      }
    }, 1000)

    // Show popup when counter reaches multiples of 30
    if (counter > 0 && counter < 600 && counter % 30 === 0) {
      setDisplayPopup(true)
    }

    // Clean up the interval timer when component unmounts
    return () => {
      clearInterval(timer)
    }
  }, [counter, setDisplayPopup])

  useEffect(() => {
    let closeTimer
    if (displayPopup) {
      setDisableClose(true)
      setCountdown(6) // Reset to 6 seconds
      closeTimer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            setDisableClose(false)
            clearInterval(closeTimer)
            return 0
          }
          return prevCountdown - 1
        })
      }, 1000)
    }

    // Clean up the close timer when component unmounts or popup closes
    return () => {
      clearInterval(closeTimer)
    }
  }, [displayPopup])

  const handleClose = () => {
    setDisplayPopup(false)
    setDisableClose(true)
  }

  if (banners.length === 0 || !displayPopup) {
    return null
  }

  return (
    <Box
      sx={{
        zIndex: 1600,
        border: 7,
        bgcolor: 'black',
        position: 'absolute',
        top: '66vh',
        left: '50vw',
        width: '30vw',
        height: '30vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Close button in the top right corner */}
      <IconButton
        sx={{ position: 'absolute', top: -9, right: -9, color: 'red' }}
        onClick={handleClose}
        aria-label='close'
        disabled={disableClose}
      >
        {disableClose ? (
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
              variant='determinate'
              value={((6 - countdown) / 6) * 100} 
              sx={{ color: 'white' }}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant='caption' component='div' color='white'>
                {countdown}
              </Typography>
            </Box>
          </Box>
        ) : (
          <CloseIcon />
        )}
      </IconButton>

      {/* Image inside the popup */}
      <img
        src={banners[currentQuestion % banners.length]}
        alt='Popup Banner'
        className='popup-image'
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '100%',
          maxHeight: '100%',
        }}
      />
    </Box>
  )
}
