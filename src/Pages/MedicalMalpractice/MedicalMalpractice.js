import React from 'react'
import { Helmet } from 'react-helmet'
import ServiceFooter from '../../components/Shared/ServiceNavbar/ServiceFooter'
import ServiceNavbar from '../../components/Shared/ServiceNavbar/ServiceNavbar'
import MmAbout from './MmAbout/MmAbout'
import MmFind from './MmFind/MmFind'
import MmFooter from './MmFooter/MmFooter'
import MmHelp from './MmHelp/MmHelp'
import MmHero from './MmHero/MmHero'
import MmNavbar from './MmNavbar/MmNavbar'
import MmNews from './MmNews/MmNews'
import MmSign from './MmSign/MmSign'

const MedicalMalpractice = () => {
  return (
    <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Medical Malpractice | Legal Justice Claim</title>
      </Helmet>
      <div>
     <MmNavbar />
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

export default MedicalMalpractice