import React from 'react'
import { Box, Container, Grid, styled, Typography } from '@mui/material'
import { doctorsConfig } from './doctors.config'
import CardImage from '../../../components/kit/CardImage'

const Doctors = () => {
  const onClickCard = (url) => {
    window.open('#/prices')
  }

  return (
    <Container sx={{ paddingY: 8 }}>
      <Typography variant='h3' gutterBottom mt={3}>Наши специалисты</Typography>
      {/*<Typography variant='subtitle1' gutterBottom mt={3}>Вся информация о специалистах клиники</Typography>*/}
        <Grid container spacing={2} className={'gridCarousel'}>
          {doctorsConfig.map((x, i) => (
            <Grid key={`doctor${i}`} item onClick={onClickCard}>
              <DoctorCard config={x} />
            </Grid>
          ))}
        </Grid>
    </Container>
  )
}
const DoctorCard = ({ config }) => {
  const bgOpacity = 0.5
  const gradient = `linear-gradient(rgba(0,0,0,${bgOpacity}), rgba(0,0,0,${bgOpacity}))`
  return (
    <CardImage sx={{ background: `${gradient},url(${config.image})`, aspectRatio: 1 }}>
      <Typography variant='h5'>{config.name}</Typography>
      <Typography variant='subtitle1' color={'text.secondary'}>{config.state}</Typography>
    </CardImage>
  )
}

export default Doctors

