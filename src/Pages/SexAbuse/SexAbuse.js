import React from 'react'
import { Helmet } from 'react-helmet'
import ServiceFooter from '../../components/Shared/ServiceNavbar/ServiceFooter'
import ServiceNavbar from '../../components/Shared/ServiceNavbar/ServiceNavbar'
import SaAbout from './SaAbout/SaAbout'
import SaFind from './SaFind/SaFind'
import SaHelp from './SaHelp/SaHelp'
import SaHero from './SaHero/SaHero'
import SaNavbar from './SaNavbar/SaNavbar'
import SaNews from './SaNews/SaNews'
import SaSign from './SaSign/SaSign'

const SexAbuse = () => {
  return (
    <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Sex Abuse | Legal Justice Claim</title>
      </Helmet>
      <div>
      <SaNavbar />
      <SaHero />
      <SaFind />
      <SaHelp />
      <SaAbout />
      <SaSign />
      <SaNews />
      <ServiceFooter />
      </div>
    </div>
  )
}

export default SexAbuse