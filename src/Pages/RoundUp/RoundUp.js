import React from 'react'
import { Helmet } from 'react-helmet'
import ServiceFooter from '../../components/Shared/ServiceNavbar/ServiceFooter'
import ServiceNavbar from '../../components/Shared/ServiceNavbar/ServiceNavbar'
import RuHero from './RuHero/RuHero'

const RoundUp = () => {
  return (
    <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Round Up | Legal Justice Claim</title>
      </Helmet>
      <div>
     <ServiceNavbar />
     <RuHero />
     <ServiceFooter />
      </div>
    </div>
  )
}

export default RoundUp