import React from 'react'
import { AppBar, Toolbar, Link, Slide, useMediaQuery, useScrollTrigger, useTheme } from '@mui/material'

import { ReactComponent as LogoMin } from 'assets/images/logo/logo_min.svg'
import { ReactComponent as LogoMax } from 'assets/images/logo/logo_max.svg'
import './header.scss'
import HeaderMenuDrawer from './menu/drawer'
import HeaderMenuFull from './menu/lineMenu'

const Header = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <AppBar position='relative' elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
      <Toolbar sx={{ flexWrap: 'wrap' }} className='header'>
        <Link variant='body2' color='text.primary' href={`/`}
              sx={{ flexGrow: 1, my: 1, mx: 1.5 }} className='header-logo'>
          {isMobile ? <LogoMin /> : <LogoMax />}
        </Link>
        {isMobile ? <HeaderMenuDrawer /> : <HeaderMenuFull />}
      </Toolbar>
    </AppBar>
  )
}

export default Header
