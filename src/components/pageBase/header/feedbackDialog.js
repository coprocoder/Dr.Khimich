import * as React from 'react'
import { Button, Dialog, useMediaQuery, useTheme } from '@mui/material'
import FeedbackWidget from '../../widget/feedbackWidget'

export default function FeedbackDialog({ btnText = 'Заказать звонок' }) {
  const [open, setOpen] = React.useState(false)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button variant='contained' onClick={handleClickOpen} size={isMobile ? 'large' : 'medium'}>
        {btnText}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <FeedbackWidget />
      </Dialog>
    </>
  )
}