/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box } from '@mui/material'

export default function SideBanner({ banners, currentQuestion }) {
  if (!banners || banners.length === 0) {
    return null
  }

  return (
    <img
      src={banners[currentQuestion % banners.length]}
      alt='Ad Banner'
      style={{
        // width: '100%',
        height: '100%',
        // objectFit: 'contain',
      }}
    />
  )
}
