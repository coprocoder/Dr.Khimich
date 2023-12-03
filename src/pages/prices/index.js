import React, { useEffect, useState } from 'react'
import {
  List, ListItem, ListItemText, Typography, Container, Chip, Stack, Box, Link
} from '@mui/material'
import { priceOnfig } from './price.сonfig'
import FeedbackWidget from '../../components/widget/feedbackWidget'
import './prices.scss'

const PriceGallery = () => {
  const [selectedGroup, setGroup] = useState()

  useEffect(() => {
    if (priceOnfig.length) {
      setGroup(priceOnfig[0])
    }
  }, [priceOnfig.length])

  const handleClick = (group) => setGroup(group)

  return (
    <Container>
      <Typography variant='h3' gutterBottom mt={3}>Цены</Typography>
      <Stack direction='row' useFlexGap flexWrap='wrap' spacing={1} pb={2}>
        {priceOnfig.map((group, i) => (
          <Chip key={`price${i}`} label={group.groupName}
                variant={group.groupName === selectedGroup?.groupName ? 'filled' : 'outlined'}
                onClick={() => handleClick(group)} />
        ))}
      </Stack>
      <Box className={'pricelist'}>
        <Box>
          <List sx={{ bgcolor: 'divider', borderRadius: 4, padding: 4 }}>
            <Typography variant={'h5'} sx={{ marginBottom: 2 }}>{selectedGroup?.groupName}</Typography>
            {selectedGroup?.itemList.map((item) => (
              <ListItem key={item.title} disableGutters sx={{
                paddingY: 2,
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`
              }}>
                <ListItemText primary={item.title} />
                <Typography sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>{item.value} ₽</Typography>
              </ListItem>
            ))}
          </List>
          <Box sx={{ mt: 2 }}>
            <Typography color={'text.secondary'}>Цены на сайте не являются публичной офертой.</Typography>
            <Typography color={'text.secondary'}>С полным прейскурантом на услуги стоматологии вы можете ознакомиться
              <Link href='https://stomcomplex24.ru/price'
                    target='_blank' rel='noreferrer'> по ссылке</Link>.
            </Typography>
            <Typography color={'text.secondary'}>Составление точного плана лечения с указанием стоимости услуг требует
              очной консультаций с лечащим
              врачом и проведения диагностики.</Typography>
            <Typography color={'text.secondary'}>На услуги предоставляются
              <Link href='/#/guarantees'
                    target='_blank' rel='noreferrer'> гарантии</Link>.
            </Typography>
          </Box>
        </Box>
        <Box>
          <FeedbackWidget sx={{ bgcolor: 'primary.dark', borderRadius: 4 }} btnSx={{bgcolor: 'primary.main'}} />
        </Box>
      </Box>
    </Container>
  )
}

export default PriceGallery
