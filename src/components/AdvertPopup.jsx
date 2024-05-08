/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export default function AdvertPopup({
  displayPopup,
  setDisplayPopup,
  currentQuestion,
  banners=[],
  quizTime,
}) {
  const [counter, setCounter] = useState(quizTime)

  useEffect(() => {
    // Update counter when quizTime changes
    setCounter(quizTime)
  }, [quizTime])

  useEffect(() => {
    const timer = setInterval(() => {
      if (counter > 0) {
        setCounter((prevCounter) => prevCounter - 1)
        // console.log('counter from advert', counter)
        // console.log('asd', displayPopup )
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

  const handleClose = () => {
    setDisplayPopup(false)
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
        width: '20vw',
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
      >
        <CloseIcon />
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
