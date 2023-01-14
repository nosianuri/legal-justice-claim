import React from 'react'
import { Helmet } from 'react-helmet'
import ServiceFooter from '../../components/Shared/ServiceNavbar/ServiceFooter'
import ServiceNavbar from '../../components/Shared/ServiceNavbar/ServiceNavbar'
import ZantacAbout from './ZantacAbout/ZantacAbout'
import ZantacFind from './ZantacFind/ZantacFind'
import ZantacHelp from './ZantacHelp/ZantacHelp'
import ZantacHero from './ZantacHero/ZantacHero'
import ZantacNews from './ZantacNews/ZantacNews'
import ZantacSign from './ZantacSign/ZantacSign'

const Zantac = () => {
  return (
    <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Zantac | Legal Justice Claim</title>
      </Helmet>
      <div>
      <ServiceNavbar />
      <ZantacHero />
      <ZantacFind />
      <ZantacHelp />
      <ZantacAbout />
      <ZantacSign />
      <ZantacNews />
      <ServiceFooter />
      </div>
    </div>
  )
}

export default Zantac