import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { serviceConfig } from './serviceConfig'

const Services = () => {
  const openService = (url) => {
    window.open('#/prices', '_blank', 'noreferrer');
  };

  return (
    <Container sx={{ paddingY: 12 }}>
      <Typography variant='h3' gutterBottom mt={3}>Предоставляем услуги</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {serviceConfig.map((x, i) => (
            <Grid key={`service${i}`} item md={x.gridMd} onClick={openService}>
              <ServiceItem text={x.title} bg={x.image} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

const ServiceItem = ({ text, bg }) => {
  const bgOpacity = 0.5
  const gradient = `linear-gradient(rgba(0,0,0,${bgOpacity}), rgba(0,0,0,${bgOpacity}))`
  return (
    <Box sx={{
      height: '20em',
      backgroundImage: `${gradient},url(${bg})`,
      backgroundSize: 'cover',
      padding: 2,
      borderRadius: 2,
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

