import React from 'react'
import YandexMap from '../../components/widget/map'
import { Container, Box, Typography, List, ListItem, ListItemText } from '@mui/material'
import './contacts.scss'

const Contacts = () => {
  return (
    <Container>
      <Typography variant='h3' gutterBottom mt={3}>Контакты</Typography>
      <Box className={'contacts'} sx={{ bgcolor: 'background.paper', borderRadius: 4 }}>
        <Box sx={{ padding: 4 }}>
          <Typography variant='h5' gutterBottom>Dr.Khimich</Typography>
          <List sx={{ flex: 1 }}>
            <ListItem disableGutters sx={{ pt: 1 }}>
              <Typography sx={{ fontWeight: 'bold', mr: 1 }}>Телефон:</Typography>
              <Typography>890998890</Typography>
            </ListItem>
            <ListItem disableGutters sx={{ pt: 1 }}>
              <Typography sx={{ fontWeight: 'bold', mr: 1 }}>Адрес:</Typography>
              <Typography>г.Красноярск, ул.Горького,24</Typography>
            </ListItem>
            <Box disableGutters sx={{ pt: 1 }}>
              <Typography sx={{ fontWeight: 'bold', mr: 1, mb: 0.5 }}>Режим работы:</Typography>
              <Typography>пн.-пт. с 9:00 до 21:00</Typography>
              <Typography>сб. с 10:00 до 20:00</Typography>
              <Typography>Вск. выходной</Typography>
            </Box>
          </List>
        </Box>
        <YandexMap  />
      </Box>
    </Container>
  )
}

export default Contacts
