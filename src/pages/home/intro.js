import React from 'react'
import { Container, Typography } from '@mui/material'

const HomeIntro = () => {
  const bgGradient = [
    `linear-gradient(rgba(0,0,0,.9), rgba(0,0,0,.7))`
  ].join(',')

  return (
    <Container
      disableGutters
      component='main'
      maxWidth={false}
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `
          ${bgGradient},
          url(${require('assets/images/cabinet.jpg')})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
      <HomeIntroBody />
    </Container>
  )
}

const HomeIntroBody = () => {
  return (
    <Container
      disableGutters
      maxWidth='sm'
      component='main'
      sx={{
        py: 6, px: 2, textAlign: 'center',
        backdropFilter: 'brightness(0.4)',
        borderRadius: 4
      }}>
      <Typography component='h1'variant='h2'
        sx={{ fontWeight: 'bold', lineHeight: 1 }}>
        DR.KHIMICH
      </Typography>
      <Typography variant='h6' gutterBottom
        sx={{ fontWeight: 'bold', lineHeight: 1 }} >
       DENTAL CLINIC
      </Typography>
      <Typography variant='body1' color='text.secondary' mt={4}>
        Комплексная диагностика и лечение
      </Typography>
    </Container>
  )
}

export default HomeIntro
