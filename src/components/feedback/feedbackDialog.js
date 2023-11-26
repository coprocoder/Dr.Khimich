import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Box, Container, Typography } from '@mui/material'
import FeedbackWidget from './feedbackWidget'

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
