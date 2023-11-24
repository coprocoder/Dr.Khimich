import * as React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import './feedback.scss'

export default function FeedbackWidget() {
  return (
    <Box className={'feedbackForm'} sx={{
      padding: 4, background: '#5ca649', position: 'sticky', top: 20,
      minWidth: 300, borderRadius: 2, textAlign: 'center'
    }}>
      <Typography variant={'h3'} sx={{ marginBottom: 2 }}>Запись на консультацию</Typography>
      <Typography sx={{ marginBottom: 2 }}>Укажите свои данные, мы перезвоним и подберём для вас удобное время приёма.
        Или позвоните нам сами —</Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LocalPhoneOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField autoFocus id='test' label='Phone number' fullWidth variant='standard' sx={{ mt: 2 }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PermIdentityOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id='test' label='Phone number' fullWidth variant='standard' sx={{ mt: 2 }} />
      </Box>
      <Button variant='contained' startIcon={<PhoneInTalkIcon />} sx={{ mt: 4, borderRadius: 10, paddingX: 4, paddingY: 2  }}>Записаться</Button>
    </Box>
  )
}