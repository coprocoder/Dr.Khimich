import React from 'react'
import HomeIntro from './intro'
import ContactsPage from '../about/contacts'
import ServicesPage from '../about/services'
import DoctorsPage from '../about/doctors'
import StepProcess from '../about/steps'

const HomePage = () => {
  return (
    <>
      <HomeIntro />
      <ServicesPage />
      <StepProcess />
      <DoctorsPage />
      <ContactsPage />
    </>
  )
}

export default HomePage
