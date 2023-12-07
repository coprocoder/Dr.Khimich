import React from 'react'
import { Box, Container } from '@mui/material'
import FeedbackWidget from '../../../components/widget/feedbackWidget'
import YandexMap from '../../../components/widget/map'
import './contacts.scss'

const ContactsPage = () => {
  return (
    <Container sx={{ marginY: 12 }}>
      <Box className={'contacts'} sx={{ marginY: 8, paddingX: 2, bgcolor: 'divider', borderRadius: 4 }}>
        <FeedbackWidget />
        <YandexMap />
      </Box>
    </Container>
  )
}

export default ContactsPage