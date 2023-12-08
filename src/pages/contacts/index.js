import React from 'react'
import { Container, Box, Typography, List, ListItem } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import PhoneIcon from '@mui/icons-material/Phone'

import YandexMap from 'components/widget/map'
import FeedbackButton from 'components/widget/feedbackButton'
import './contacts.scss'

const Contacts = () => {
  return (
    <Container>
      <Typography variant='h3' gutterBottom mt={3}>Контакты</Typography>
      <ContactsWidget />
    </Container>
  )
}

const ContactsWidget = () => (
  <Box className={'contacts'} sx={{ bgcolor: 'background.paper', borderRadius: 4 }}>
    <Box sx={{ padding: 4, justifySelf: 'center' }}>
      <List sx={{ flex: 1 }}>
        <ListItem disableGutters>
          <LocationOnIcon sx={{ color: 'text.primary', mr: 2, fontSize: 36 }} />
          <Typography variant={'h5'}>ул.Горького,24</Typography>
        </ListItem>
        <ListItem disableGutters sx={{ pt: 4 }}>
          <WatchLaterIcon sx={{ color: 'text.primary', mr: 2, fontSize: 36 }} />
          <Box sx={{ mr: 4 }}>
            <Typography variant={'subtitle2'}>Будние дни</Typography>
            <Typography variant={'h6'}>9:00 - 21:00</Typography>
          </Box>
          <Box>
            <Typography variant={'subtitle2'}>Суббота</Typography>
            <Typography variant={'h6'}>10:00 - 20:00</Typography>
          </Box>
        </ListItem>
        <ListItem disableGutters sx={{ pt: 4 }}>
          <PhoneIcon sx={{ color: 'text.primary', mr: 2, fontSize: 36 }} />
          <Typography variant={'h6'}>8 (908) 216-66-11</Typography>
        </ListItem>
        <ListItem disableGutters sx={{ pt: 4 }}>
          <FeedbackButton size={'large'} />
        </ListItem>
      </List>
    </Box>
    <YandexMap />
  </Box>
)

export default Contacts
