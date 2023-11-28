import React from 'react'
import { Box } from '@mui/material'

const ShadowBlur = ({ children, sx, blurOpacity }) => {
  const opacity = blurOpacity || 0.3;
  return (
    <Box sx={{ position: 'relative', ...sx }}>
      {children}
      <div style={{
        background: `linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,${opacity}))`,
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        pointerEvents: 'none'
      }} />
    </Box>
  )
}

export default ShadowBlur