import { Box } from '@mui/material'
import React from 'react'

const CardImage = ({ children, sx, onClick, zoomDisable }) => {
  const { background, ...styles} = sx;
  return (
    <Box onClick={onClick} sx={{
      height: '20rem',
      borderRadius: 2,
      overflow: 'hidden',
      position: 'relative',
      ...styles
    }}>
      <Box sx={{
        width: '100%',
        height: '100%',
        background: background,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'all 0.3s',
        '&:hover': {
          transform: !zoomDisable ? 'scale(1.1)' : ''
        }
      }} />
      <Box sx={{ position: 'absolute', bottom: 0, padding: 2 }}>
        {children}
      </Box>
    </Box>
  )
}

export default CardImage