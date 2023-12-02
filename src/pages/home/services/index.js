import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { serviceConfig } from './service.config'

const Services = () => {
  const openService = (url) => {
    window.open('#/prices', '_blank', 'noreferrer');
  };

  return (
    <Container sx={{ paddingY: 8 }}>
      <Typography variant='h3' gutterBottom mt={3}>Предоставляем услуги</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {serviceConfig.map((x, i) => (
            <Grid item key={`service${i}`} onClick={openService} xs={12} sm={6} md={x.gridMd}>
              <ServiceCard text={x.title} bg={x.image} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

const ServiceCard = ({ text, bg }) => {
  const bgOpacity = 0.5
  const gradient = `linear-gradient(rgba(0,0,0,${bgOpacity}), rgba(0,0,0,${bgOpacity}))`
  return (
    <Box sx={{
      height: '20em',
      backgroundImage: `${gradient},url(${bg})`,
      backgroundSize: 'cover',
      padding: 2,
      borderRadius: 4,
      display: 'flex',
      alignItems: 'flex-end'
    }}>
      <Typography variant='h4'>{text}</Typography>
    </Box>
  )
}

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   color: theme.palette.text.secondary
// }))

export default Services

