import React from 'react'
import { Link, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { menuConfig } from './config'
import FeedbackDialog from '../../feedback/feedbackDialog'

const HeaderMenuFull = () => {
  return (<>
    <MenuNav />
    <FeedbackDialog />
  </>)
}


const MenuNav = () => {
  const classes = useStyles()
  return (<nav>
    {Object.values(menuConfig).map((x, i) => (<Link
      key={i}
      variant='button'
      href={x.link}
      sx={{ my: 1, mx: 1.5, color: 'var(--primary)' }}
      className={classes.link}
    > {x.label}
    </Link>))}
  </nav>)
}

const useStyles = makeStyles({
  link: {
    // color: "var(--primary)",
    '&:hover': {
      color: 'var(--primarySecond)',
    },
  },
})

export default HeaderMenuFull
