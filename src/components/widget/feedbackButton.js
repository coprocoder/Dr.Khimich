import * as React from 'react'
import { Alert, Button, Dialog, Snackbar, useMediaQuery, useTheme } from '@mui/material'
import FeedbackWidget from './feedbackWidget'

export default function FeedbackButton({ btnText = 'Заказать звонок', size }) {
  const [open, setOpen] = React.useState(false)
  const [toastOpen, setToastOpen] = React.useState(false);

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const openToast = () => setToastOpen(true);
  const closeToast = (event, reason) => {
    if (reason === 'clickaway') return;
    setToastOpen(false);
  };

  const onSend = () => {
    setOpen(false);
    openToast();
  }

  return (
    <>
      <Button variant='contained' onClick={handleOpen} size={size || isMobile ? 'large' : 'medium'}>
        {btnText}
      </Button>
      <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { borderRadius: 4 } }}>
        <FeedbackWidget onClose={onSend} />
      </Dialog>
      <Snackbar open={toastOpen} autoHideDuration={2000} onClose={closeToast}>
        <Alert onClose={closeToast} severity="success" sx={{ width: '100%' }}>
          Сообщение отправлено
        </Alert>
      </Snackbar>
    </>
  )
}