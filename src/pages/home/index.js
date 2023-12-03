import React from 'react'
import HomeIntro from './intro'
import Contacts from '../about/contacts'
import Services from '../about/services'
import Doctors from '../about/doctors'

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
