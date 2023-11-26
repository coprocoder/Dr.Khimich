import React from 'react'
import YandexMap from '../../components/map/map'
import HomeIntro from '../../pages/home/intro'
import { Container, Box } from '@mui/material'

const Contacts = () => {
  return (
    <Container>
      <HomeIntro />
      <Box sx={{ minHeight: 300 }}>
        <YandexMap />
      </Box>
    </Container>
  )
}

export default Contacts
