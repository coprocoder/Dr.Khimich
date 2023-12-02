import React from 'react'
import { Link } from '@mui/material'
import { menuConfig } from './config'
import FeedbackDialog from '../feedbackDialog'
import '../header.scss'

const HeaderMenuFull = () => {
  return (<>
    <MenuNav />
    <FeedbackDialog />
  </>)
}


const MenuNav = () => {
  return (<nav>
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
  </nav>)
}


export default HeaderMenuFull
