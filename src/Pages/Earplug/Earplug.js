import React from 'react'
import { Helmet } from 'react-helmet'
import EAbout from './EAbout/EAbout'
import EFind from './EFind/EFind'
import EFooter from './Efooter/EFooter'
import Ehelp from './Ehelp/Ehelp'
import EHero from './EHero/EHero'
import Enavbar from './ENavbar/Enavbar'
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
        <Enavbar />
        <EHero />
        <EFind />
        <Ehelp />
        <EAbout />
        <ESign />
        <ENews />
        <EFooter />
      </div>
    </div>
  )
}

export default Earplug