import React from 'react'

const Shadow = ({ children }) => {
  return (
    <div style={{ position: 'relative' }}>
      {children}
      <div style={{
        background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3))`,
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        pointerEvents: 'none'
      }} />
    </div>
  )
}

export default Shadow