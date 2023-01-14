import React from 'react'
import { Helmet } from 'react-helmet'
import ServiceFooter from '../../components/Shared/ServiceNavbar/ServiceFooter'
import ServiceNavbar from '../../components/Shared/ServiceNavbar/ServiceNavbar'

const PersonalInjury = () => {
  return (
    <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Personal Injury | Legal Justice Claim</title>
      </Helmet>
      <div>
      <ServiceNavbar />
      <ServiceFooter />
      </div>
    </div>
  )
}

export default PersonalInjury