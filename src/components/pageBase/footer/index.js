import React from 'react'
import { Grid, Typography, Link, Container, Stack, Box } from '@mui/material'
import { sitemapConfig } from './sitemap.config'

import { ReactComponent as IconVk } from '../../../assets/images/socialIcon/icon-vk.svg'
import { ReactComponent as IconViber } from '../../../assets/images/socialIcon/icon-viber.svg'
import { ReactComponent as IconWhatsApp } from '../../../assets/images/socialIcon/icon-whatsapp.svg'

const PageFooter = () => {
  return (
    <Container
      component='footer'
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6]
      }}
    >
      <Grid container spacing={4} justifyContent='space-evenly'>
        {sitemapConfig.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.groupName}>
            <Typography variant='h6' color='text.primary' gutterBottom>
              {footer.groupName}
            </Typography>
            <Stack>
              {footer.itemList.map((item) => (
                <Link key={item.name} href={item.link} variant='subtitle1' color='text.secondary'>
                  {item.name}
                </Link>
              ))}
            </Stack>
          </Grid>
        ))}
        <FooterContacts />
      </Grid>

      <Typography
        variant='body2'
        color='text.secondary'
        align='center'
        sx={{ mt: 5 }}>
        {`2009 - ${new Date().getFullYear()} © `}
        <Link color='inherit' href='https://t.me/coprocoder'>
          Все права защищены
        </Link>
      </Typography>
    </Container>
  )
}

const FooterContacts = () => {
  return (
    <Grid item xs={6} sm={3}>
      <Typography variant='h6' color='text.primary' gutterBottom>{'Телефоны'}</Typography>
      <Link href={'tel:+7 (908) 216-66-11'} variant='subtitle1' color='text.secondary'>
        {'+7 (908) 216-66-11'}
      </Link>
      <Typography variant='h6' color='text.primary' gutterBottom sx={{ mt: 2 }}>{'Почта'}</Typography>
      <Link href={'mailto:khimich@mail.ru'} variant='subtitle1' color='text.secondary'>
        {'khimich@mail.ru'}
      </Link>

      {/* Social links*/}
      <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
        <Link href={'https://vk.com/dr.khimich'} variant='subtitle1' color='text.secondary' target='_blank'
              rel='noreferrer'>
          <IconVk width={32} />
        </Link>
        <Link href={'https://api.whatsapp.com/send/?phone=79082166611'} variant='subtitle1' color='text.secondary'
              target='_blank' rel='noreferrer'>
          <IconWhatsApp width={32} />
        </Link>
        <Link href={'viber://contact?number=%2B79082166611'} variant='subtitle1' color='text.secondary' target='_blank'
              rel='noreferrer'>
          <IconViber width={32} />
        </Link>
      </Box>
    </Grid>
  )
}

export default PageFooter
