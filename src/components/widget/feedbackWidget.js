import * as React from 'react'
import { Box, Typography, TextField, Button, Link, useTheme, Checkbox, Card } from '@mui/material'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'

function FeedbackWidget({ sx }) {
  const { palette } = useTheme()
  return (
    <Card sx={{ textAlign: 'center', padding: 4, ...sx }}>
      <Typography variant={'h3'} sx={{ marginBottom: 2 }}>Запись на консультацию</Typography>
      <Typography sx={{ marginBottom: 2 }}>Укажите свои данные, мы перезвоним и подберём для вас удобное время приёма.
        Или позвоните нам сами —
        <Link href={'tel:+79082166611'}>
          <Typography variant={'h5'} sx={{ fontWeight: 'bold' }}>+7 (908) 216-66-11</Typography>
        </Link>
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PermIdentityOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id='test' label='Имя' fullWidth variant='standard' sx={{ mt: 2 }} color={'secondary'} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LocalPhoneOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id='test' label='Телефон' fullWidth variant='standard' sx={{ mt: 2 }} color={'secondary'} />
      </Box>

      <Box sx={{ textAlign: 'left', display: 'flex', gap: 2, mt: 4, alignItems: 'center' }}>
        <Checkbox id='checkbox_policy' style={{ transform: 'scale(2)' }} color={'secondary'} size={'medium'} />
        <label htmlFor={'checkbox_policy'} style={{ color: palette.text.primary }}>Даю согласие на обработку
          персональных данных, соглашаюсь с <Link href='/'>политикой конфиденциальности</Link>
        </label>
      </Box>

      <Button variant='contained' startIcon={<PhoneInTalkIcon />} sx={{ mt: 4 }} size={'large'}>Записаться</Button>
    </Card>
  )
}

export default FeedbackWidget