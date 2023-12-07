import React, { useState } from 'react'
import {
  Divider, Drawer, IconButton, List, ListItem, ListItemText, Box, ListItemIcon, Link
} from '@mui/material'
import Close from '@mui/icons-material/Close'
import { Menu } from '@mui/icons-material'

import { ReactComponent as LogoMax } from 'assets/images/logo/logo_max.svg'
import { menuConfig } from './menu.config'
import FeedbackButton from '../../../widget/feedbackButton'
import '../header.scss'

function HeaderMenuDrawer() {
  const [isVisible, setVisible] = useState(false)
  return (
    <>
      <Drawer
        sx={{ background: 'primary' }}
        variant={'persistent'}
        anchor={'right'}
        open={!!isVisible}
        onClose={() => setVisible(false)}>
        <Box sx={{ p: 1, width: '100vw' }}>
          <Box sx={{ mb: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {/*<LogoMax />*/}
            <Link variant='body2' color='text.primary' href={`/`}
                  sx={{ flexGrow: 1, my: 1, mx: 1.5 }} className='header-logo'>
              <LogoMax />
            </Link>
            <IconButton
              onClick={() => setVisible(!isVisible)}
              sx={{ color: 'text.primary' }}>
              <Close />
            </IconButton>
          </Box>

          <Divider />

          <List>
            {menuConfig.map((x, i) => {
              const MenuItemIcon = x?.icon
              return (
                <Link key={`menuItem_${i}`} href={x.link} className={'headerLink'}>
                  <ListItem onClick={() => setVisible(false)}>
                    <ListItemIcon>
                      {!!MenuItemIcon && (<MenuItemIcon />)}
                    </ListItemIcon>
                    <ListItemText>{x.label}</ListItemText>
                  </ListItem>
                </Link>
              )
            })}
          </List>

          <Divider />

          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <FeedbackButton />
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
