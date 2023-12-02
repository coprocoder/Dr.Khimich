import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

import {
  Divider, Drawer, IconButton, List, ListItem, ListItemText, Box, ListItemIcon, Link
} from '@mui/material'
import Close from '@mui/icons-material/Close'
import { Menu } from '@mui/icons-material'
import { menuConfig } from './config'
import FeedbackDialog from '../feedbackDialog'
import '../header.scss'

function HeaderMenuDrawer() {
  const [isVisible, setVisible] = useState(false)
  return (
    <>
      <Drawer
        anchor={'right'}
        open={!!isVisible}
        onClose={() => setVisible(false)}>
        <Box sx={{ p: 1 }}>
          <Box sx={{ mb: 1 }}>
            <IconButton
              onClick={() => setVisible(!isVisible)}
              sx={{ color: 'white' }}>
              <Close />
            </IconButton>
          </Box>

          <Divider />

          <List>
            {menuConfig.map((x, i) => {
              const MenuItemIcon = x?.icon
              return (
                <Link key={`menuItem_${i}`} color='text.primary' href={x.link} className={'headerLink'}>
                  <ListItem onClick={() => setVisible(false)}>
                    <ListItemIcon>
                      {!!MenuItemIcon && (<MenuItemIcon sx={{ color: 'primary.main' }} />)}
                    </ListItemIcon>
                    <ListItemText>{x.label}</ListItemText>
                  </ListItem>
                </Link>
              )
            })}
          </List>

          <Divider />

          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <FeedbackDialog />
          </Box>
        </Box>
      </Drawer>
      <IconButton
        onClick={() => setVisible(!isVisible)}
        sx={{ color: 'white' }}>
        <Menu />
      </IconButton>
    </>
  )
}

export default HeaderMenuDrawer
