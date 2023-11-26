import React from 'react'
import ProductsPreview from './products'
import HomeIntro from './intro'
import Contacts from './contacts'
import YandexMap from '../../components/map/map'

const HomePage = () => {
  return (
    <>
      <HomeIntro />
      <ProductsPreview />
      <Contacts />
      {/*<YandexMap />*/}
    </>
  )
}

export default HomePage
