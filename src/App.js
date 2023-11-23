import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import loadable from '@loadable/component'
import { Backdrop, CircularProgress } from '@mui/material'
import Header from './components/header'
import PageFooter from './components/footer'

const Waiter = () => (
  <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={true}
  >
    <CircularProgress color='inherit' />
  </Backdrop>
)

const HomePage = loadable(() => import('./pages/home'), {
  fallback: <Waiter />
})
const ProductsGallery = loadable(() => import('./pages/products'), {
  fallback: <Waiter />
})
const PriceGallery = loadable(() => import('./pages/prices'), {
  fallback: <Waiter />
})

const NotFound = () => <div>not found</div>

function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsGallery />} />
        <Route path='/prices' element={<PriceGallery />} />
        <Route element={<NotFound />} />
      </Routes>

      <PageFooter />
    </HashRouter>
  )
}

export default App
