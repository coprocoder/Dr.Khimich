import { Backdrop, CircularProgress } from '@mui/material'
import loadable from '@loadable/component'
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

const Waiter = () => (
  <Backdrop open={true} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
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
const PhotoGallery = loadable(() => import('./pages/photoGallery'), {
  fallback: <Waiter />
})
const Rates = loadable(() => import('./pages/rates'), {
  fallback: <Waiter />
})
const Contacts = loadable(() => import('./pages/contacts'), {
  fallback: <Waiter />
})

const NotFound = () => <div>Sorry, page not found. Go back.</div>

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsGallery />} />
        <Route path='/prices' element={<PriceGallery />} />
        <Route path='/rates' element={<Rates />} />
        <Route path='/photos' element={<PhotoGallery />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default Router
