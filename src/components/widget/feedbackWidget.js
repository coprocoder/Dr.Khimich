import * as React from 'react'
import { Box, Typography, TextField, Button, Link, useTheme } from '@mui/material'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'

function FeedbackWidget({ sx }) {
  const { palette } = useTheme()
  return (
    <Box className={'feedbackForm'} sx={{
      position: 'sticky', top: 20, minWidth: 300, textAlign: 'center', padding: 4, ...sx
    }}>
      <Typography variant={'h3'} sx={{ marginBottom: 2 }}>Запись на консультацию</Typography>
      <Typography sx={{ marginBottom: 2 }}>Укажите свои данные, мы перезвоним и подберём для вас удобное время приёма.
        Или позвоните нам сами —
        <Typography variant={'h5'} sx={{ fontWeight: 'bold' }}>+7 (908) 216-66-11</Typography>
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PermIdentityOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField autoFocus id='test' label='Имя' fullWidth variant='standard' sx={{ mt: 2 }} color={'secondary'} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LocalPhoneOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id='test' label='Телефон' fullWidth variant='standard' sx={{ mt: 2 }} color={'secondary'} />
      </Box>

      <Box sx={{ textAlign: 'left', display: 'flex', mt: 4 }}>
        <input type='checkbox' id='checkbox_policy' style={{ width: '4em', marginRight: '1em' }} />
        <label htmlFor={'checkbox_policy'} style={{ color: palette.text.primary }}>Даю согласие на обработку
          персональных данных, соглашаюсь с <Link href='/'>политикой конфиденциальности</Link>
        </label>
      </Box>

      <Button variant='contained' startIcon={<PhoneInTalkIcon />}
              sx={{ mt: 4, borderRadius: 10, paddingX: 4, paddingY: 2 }}>Записаться</Button>
    </Box>
  )
}

export default FeedbackWidget