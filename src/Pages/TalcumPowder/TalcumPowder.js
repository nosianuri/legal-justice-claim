import React from 'react'
import { Helmet } from 'react-helmet'
import ServiceFooter from '../../components/Shared/ServiceNavbar/ServiceFooter'
import ServiceNavbar from '../../components/Shared/ServiceNavbar/ServiceNavbar'
import TelcomInjury from './TelcomInjury/TelcomInjury'

const TalcumPowder = () => {
  return (
    <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Talcum Powder | Legal Justice Claim</title>
      </Helmet>
      <div>
      <ServiceNavbar />
      <div className='text-center'>
      <TelcomInjury />
      </div>
      
      <ServiceFooter />
      </div>
    </div>
  )
}

export default TalcumPowder