import React, { useEffect, useState } from 'react'
import {
  List, ListItem, ListItemText, Typography, Container, Chip, Stack, Box, Link
} from '@mui/material'
import { guaranteesConfig } from './guarantees.сonfig'
import FeedbackWidget from '../../components/widget/feedbackWidget'
import './styles.scss'

const Guarantees = () => {
  const [selectedGroup, setGroup] = useState()

  useEffect(() => {
    if (guaranteesConfig.length) {
      setGroup(guaranteesConfig[0])
    }
  }, [guaranteesConfig.length])

  const handleClick = (group) => setGroup(group)

  return (
    <Container>
      <Typography variant='h3' gutterBottom mt={3}>Гарантии</Typography>
      <Stack direction='row' useFlexGap flexWrap='wrap' spacing={1} pb={2}>
        {guaranteesConfig.map((group, i) => (
          <Chip key={`price${i}`} label={group.groupName}
                variant={group.groupName === selectedGroup?.groupName ? 'filled' : 'outlined'}
                onClick={() => handleClick(group)} />
        ))}
      </Stack>
      <Box>
        <List sx={{ bgcolor: 'divider', borderRadius: 4, padding: 4 }}>
          <Typography variant={'h5'} sx={{ marginBottom: 2 }}>{selectedGroup?.groupName}</Typography>
          {selectedGroup?.itemList.map((item) => (
            <ListItem key={item.title} disableGutters sx={{
              paddingY: 2,
              borderBottom: (theme) => `1px solid ${theme.palette.divider}`
            }}>
              <ListItemText primary={item.title} />
              <Typography sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>{item.value}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  )
}

export default Guarantees
