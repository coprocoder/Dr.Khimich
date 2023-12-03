import React from 'react'
import Contacts from './contacts'
import Services from './services'
import Doctors from './doctors'
import HomeIntro from './intro'

const AboutPage = () => {
  return (
    <>
      <HomeIntro />
      <Services />
      <Doctors />
      <Contacts />
    </>
  )
}

export default AboutPage
