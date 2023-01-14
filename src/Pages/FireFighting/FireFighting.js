import React from 'react'
import { Helmet } from 'react-helmet'
import ServiceFooter from '../../components/Shared/ServiceNavbar/ServiceFooter'
import ServiceNavbar from '../../components/Shared/ServiceNavbar/ServiceNavbar'
import FiAbout from './FiAbout/FiAbout'
import FiFind from './FiFind/FiFind'
import FiHelp from './FiHelp/FiHelp'
import FiHero from './FiHero/FiHero'
import FiNews from './FiNews/FiNews'
import FiSign from './FiSign/FiSign'

const FireFighting = () => {
  return (
    <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Fire Fighting | Legal Justice Claim</title>
      </Helmet>
      <div>
      <ServiceNavbar />
      <FiHero />
      <FiFind />
      <FiHelp />
      <FiAbout />
      <FiSign />
      <FiNews />
      <ServiceFooter />
      </div>
    </div>
  )
}

export default FireFighting;