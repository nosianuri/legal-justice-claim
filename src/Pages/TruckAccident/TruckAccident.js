import React from 'react'
import { Helmet } from 'react-helmet'
import ServiceFooter from '../../components/Shared/ServiceNavbar/ServiceFooter'
import ServiceNavbar from '../../components/Shared/ServiceNavbar/ServiceNavbar'
import MmAbout from '../MedicalMalpractice/MmAbout/MmAbout'
import MmFind from '../MedicalMalpractice/MmFind/MmFind'
import MmHelp from '../MedicalMalpractice/MmHelp/MmHelp'
import MmHero from '../MedicalMalpractice/MmHero/MmHero'
import MmNews from '../MedicalMalpractice/MmNews/MmNews'
import MmSign from '../MedicalMalpractice/MmSign/MmSign'

const TruckAccident = () => {
  return (
    <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Truck Accident | Legal Justice Claim</title>
      </Helmet>
      <div>
      <ServiceNavbar />
     <MmHero />
     <MmFind />
     <MmHelp />
     <MmAbout />
     <MmSign />
     <MmNews />
     <ServiceFooter />
      </div>
    </div>
  )
}

export default TruckAccident