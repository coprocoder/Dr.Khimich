import React from 'react'
import { Box, Container } from '@mui/material'
import './contacts.scss'
import YandexMap from '../../../components/map/map'
import FeedbackWidget from '../../../components/feedback/feedbackWidget'

const Contacts = () => {
  return (
    <Container className={'contacts'} sx={{paddingY: 12}} >
      <FeedbackWidget />
      <YandexMap />
    </Container>
  )
}

export default Contacts