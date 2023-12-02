import React from 'react'
import ProductsPreview from './products'
import HomeIntro from './intro'
import Contacts from './contacts'
import YandexMap from '../../components/widget/map'
import Services from './services'
import Doctors from './doctors'

const HomePage = () => {
  return (
    <>
      <HomeIntro />
      <Services />
      <Doctors />
      <ProductsPreview />
      <Contacts />
      {/*<YandexMap />*/}
    </>
  )
}

export default HomePage
