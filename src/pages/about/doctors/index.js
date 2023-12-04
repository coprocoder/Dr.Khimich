import React from 'react'
import { Box, Button, Card, CardContent, Container, Typography, useTheme } from '@mui/material'
import { doctorsConfig } from './doctors.config'
import CardImage from '../../../components/kit/CardImage'
import Flicking from '@egjs/react-flicking'

const Doctors = () => {
  return (
    <Container sx={{ paddingY: 8 }}>
      <Typography variant='h3' gutterBottom mt={3}>Наши специалисты</Typography>
      <Flicking useFindDOMNode horizontal bound style={{ overflow: 'visible' }}>
        {doctorsConfig.map((config, i) => (
          <DoctorCard key={`doctor${i}`} config={config} />
        ))}
      </Flicking>
    </Container>
  )
}
const DoctorCard = ({ config }) => {
  const bgOpacity = 0.3
  const gradient = `linear-gradient(rgba(0,0,0,${bgOpacity}), rgba(0,0,0,${bgOpacity}))`
  const theme = useTheme()

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card sx={{
      display: 'flex', mr: 2,
      maxWidth: 'sm',
      [theme.breakpoints.down('md')]: {
        minWidth: 300,
        maxWidth: '50%',
        flexDirection: 'column-reverse'
      }
    }}>
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant='h5'>{config.name}</Typography>
          <Typography variant='subtitle1' color={'text.secondary'}>{config.state}</Typography>
          <Typography variant='subtitle1' color={'text.secondary'} sx={{lineHeight: 1}}>
            Опыт работы <span style={{ fontWeight: 'bold' }}>16 лет</span>
          </Typography>
          <Typography variant='body1' sx={{ mt: 2 }}>{config.description}</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button variant='outlined' onClick={() => openLink(config.linkProfile)} color={'secondary'}>Подробнее</Button>
        </Box>
      </CardContent>
      <CardImage onClick={() => openLink(config.linkProfile)} sx={{
        background: `${gradient},url(${config.image})`,
        aspectRatio: 3 / 4,
        [theme.breakpoints.down('md')]: {
          width: '100%'
        }
      }} />
    </Card>
  )
}

export default Doctors

