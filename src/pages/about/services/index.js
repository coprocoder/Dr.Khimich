import React from 'react'
import { Box, Container, Grid, styled, Typography } from '@mui/material'
import { serviceConfig } from './service.config'

const Services = () => {
  const openService = (url) => {
    window.open('#/prices', '_blank', 'noreferrer')
  }

  return (
    <Container sx={{ paddingY: 8 }}>
      <Typography variant='h3' gutterBottom mt={3}>Предоставляем услуги</Typography>
      <Grid container spacing={2} className={'gridFlexible'}>
        {serviceConfig.map((x, i) => (
          <Grid item key={`service${i}`} onClick={openService} xs={12} sm={6} md={x.gridMd}>
            <ServiceCard config={x} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const ServiceCard = ({ config }) => {
  const bgOpacity = 0.5
  const gradient = `linear-gradient(rgba(0,0,0,${bgOpacity}), rgba(0,0,0,${bgOpacity}))`
  return (
    <CardItem sx={{
      backgroundImage: `${gradient},url(${config.image})`
    }}>
      <Typography variant='h5'>{config.title}</Typography>
    </CardItem>
  )
}


const CardItem = styled(Box)(({ theme }) => ({
  height: '20rem',
  backgroundSize: 'cover',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  display: 'flex',
  alignItems: 'flex-end'
}))

export default Services

