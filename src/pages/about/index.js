import React from 'react'
import ContactsPage from './contacts'
import ServicesPage from './services'
import DoctorsPage from './doctors'
import HomeIntro from './intro'

const AboutPage = () => {
  return (
    <>
      <HomeIntro />
      <ServicesPage />
      <DoctorsPage />
      <ContactsPage />
    </>
  )
}

export default AboutPage
