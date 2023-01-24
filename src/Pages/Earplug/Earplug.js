import React from 'react'
import { Helmet } from 'react-helmet'
import ServiceFooter from '../../components/Shared/ServiceNavbar/ServiceFooter'
import EAbout from './EAbout/EAbout'
import EFind from './EFind/EFind'
import Ehelp from './Ehelp/Ehelp'
import EHero from './EHero/EHero'
import ENavbar from './ENavbar/ENavbar'
import ENews from './ENews/ENews'
import ESign from './ESign/ESign'

const Earplug = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Earplug | Legal Justice Claim</title>
      </Helmet>
      <div>
        <ENavbar />
        <EHero />
        <EFind />
        <Ehelp />
        <EAbout />
        <ESign />
        <ENews />
        <ServiceFooter />
      </div>
    </div>
  )
}

export default Earplug