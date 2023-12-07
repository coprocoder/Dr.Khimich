import React from 'react'
import HomeIntro from './intro'
import ContactsPage from '../about/contacts'
import ServicesPage from '../about/services'
import DoctorsPage from '../about/doctors'

const HomePage = () => {
  return (
    <>
      <HomeIntro />
      <ServicesPage />
      <DoctorsPage />
      <ContactsPage />
    </>
  )
}

export default HomePage
