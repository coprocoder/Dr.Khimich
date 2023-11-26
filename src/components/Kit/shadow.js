import React from 'react'
import { Box } from '@mui/material'

const Shadow = ({ children }) => {
  return (
    <Box sx={{ position: 'relative' }}>
      {children}
      <div style={{
        background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3))`,
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        pointerEvents: 'none'
      }} />
    </Box>
  )
}

export default Shadow