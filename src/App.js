import React from 'react'
import PageHeader from './components/header'
import PageFooter from './components/footer'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { green, grey, blueGrey } from '@mui/material/colors'
import Router from './router'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: blueGrey,
    secondary: green
  },
  typography: {
    allVariants: {
      color: 'white'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageHeader />
      <Router />
      <PageFooter />
    </ThemeProvider>
  )
}

export default App
