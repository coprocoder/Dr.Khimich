import React from 'react'
import { Link, Box } from '@mui/material'
import { menuConfig } from './menu.config'
import FeedbackDialog from '../feedbackDialog'
import '../header.scss'

const HeaderMenuFull = () => {
  return (<>
    <MenuNav />
    <FeedbackDialog />
  </>)
}


const MenuNav = () => {
  return (
    <Box sx={{mr: 2}}>
      {menuConfig.map((x, i) => (
        <Link
          key={i}
          variant='button'
          href={x.link}
          sx={{ my: 1, mx: 1.5 }}
          className={'headerLink'}
        > {x.label}
        </Link>
      ))}
    </Box>
  )
}


export default HeaderMenuFull
