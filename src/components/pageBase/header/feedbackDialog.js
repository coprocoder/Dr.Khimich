import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import FeedbackWidget from '../../widget/feedbackWidget'

export default function FeedbackDialog() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Button variant='outlined' onClick={handleClickOpen}>
        Записаться
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <FeedbackWidget />
      </Dialog>
    </React.Fragment>
  )
}
