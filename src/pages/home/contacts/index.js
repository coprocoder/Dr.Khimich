import React from 'react'
import { Container } from '@mui/material'
import FeedbackWidget from '../../../components/widget/feedbackWidget'
import YandexMap from '../../../components/widget/map'
import './contacts.scss'

const Contacts = () => {
  return (
    <Container className={'contacts'} sx={{ paddingY: 12 }}>
      <FeedbackWidget />
      <YandexMap />
    </Container>
  )
}

export default Contacts