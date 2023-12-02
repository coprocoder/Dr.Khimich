import React from 'react'
import HomeIntro from './intro'
import Contacts from './contacts'
import Services from './services'
import Doctors from './doctors'

const HomePage = () => {
  return (
    <>
      <HomeIntro />
      <Services />
      <Doctors />
      <Contacts />
    </>
  )
}

export default HomePage
