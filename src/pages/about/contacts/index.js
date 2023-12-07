import React from 'react'
import { Box, Container, List, ListItem, Typography, useMediaQuery, useTheme } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import PhoneIcon from '@mui/icons-material/Phone'

import FeedbackButton from 'components/widget/feedbackButton'
import YandexMap from '/components/widget/map'
import './contacts.scss'

const ContactsPage = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Container maxWidth={false} sx={{ marginY: 12, paddingRight: '0 !important', bgcolor: 'background.paper' }}>
      <Box className={'contacts'}>
        <Box sx={{
          padding: 4,
          justifySelf: isMobile ? 'flex-start' : 'center',
          maxWidth: isMobile ? 'unset' : 600
        }}>
          <Typography variant='h4' gutterBottom>Контакты</Typography>
          <List sx={{ flex: 1 }}>
            <ListItem disableGutters sx={{ pt: 4 }}>
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
    </Container>
  )
}

export default ContactsPage