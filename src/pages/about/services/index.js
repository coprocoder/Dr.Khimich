import React from 'react'
import { Box, Button, Card, Container, Grid, Link, styled, Typography } from '@mui/material'
import { serviceConfig } from './service.config'
import CardImage from '../../../components/kit/CardImage'

const Services = () => {
  const openService = (url) => {
    window.open('#/prices')
  }

  return (
    <Container id='services' sx={{ paddingY: 8 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant='h3' gutterBottom mt={3}>Предоставляем услуги</Typography>
        <Button variant='outlined' onClick={openService} color={'secondary'}>Все услуги</Button>
      </Box>
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
    <CardImage sx={{ background: `${gradient},url(${config.image})` }}>
        <Typography variant='h5'>{config.title}</Typography>
    </CardImage>
  )
}
export default Services

