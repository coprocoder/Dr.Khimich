import React from 'react'
import PageHeader from './components/pageBase/header'
import PageFooter from './components/pageBase/footer'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { grey, brown } from '@mui/material/colors'
import Router from './router'
import palette from './assets/styles/Colors.scss'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: palette.primary,
      light: palette.primaryLight,
      dark: palette.primaryDark
    },
    secondary: {
      main: grey[400],
      light: grey[100],
      dark: grey[800]
    },
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

/** TODO: список планов
 * 1. param.id на страницах с табами
 * 2. Карусель
 *

 */
