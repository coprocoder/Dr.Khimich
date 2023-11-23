import React, { useEffect, useState } from 'react'
import {
  List, ListItem, ListItemText, Typography, Container, Chip, Stack
} from '@mui/material'
import { priceConfig } from './priceConfig'

const PriceGallery = () => {
  const [selectedGroup, setGroup] = useState()

  useEffect(() => {
    if (priceConfig.length) {
      setGroup(priceConfig[0])
    }
  }, [])

  const handleClick = (group) => setGroup(group)

  return (
    <Container>
      <Typography variant='h2' gutterBottom>Цены</Typography>
      <Stack direction='row' spacing={1} pb={2}>
        {priceConfig.map((group, i) => (
          <Chip key={`price${i}`} label={group.groupName}
                variant={group.groupName === selectedGroup?.groupName ? 'filled' : 'outlined'}
                onClick={() => handleClick(group)} />
        ))}
      </Stack>
      <List sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: 2, paddingX: 4 }}>
        {selectedGroup?.itemList.map((item) => (
          <ListItem key={item.title} disableGutters
                    secondaryAction={
                      <Typography>{item.price}</Typography>
                    }>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default PriceGallery