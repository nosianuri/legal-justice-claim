import React from 'react'
import { Helmet } from 'react-helmet'
import ServiceFooter from '../../components/Shared/ServiceNavbar/ServiceFooter'
import ServiceNavbar from '../../components/Shared/ServiceNavbar/ServiceNavbar'
import RuAbout from './RuAbout/RuAbout'
import RuFind from './RuFind/RuFind'
import RuHelp from './RuHelp/RuHelp'
import RuHero from './RuHero/RuHero'
import RuNews from './RuNews/RuNews'
import RuSign from './RuSign/RuSign'

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
     <RuFind />
     <RuHelp />
     <RuAbout />
     <RuSign />
     <RuNews />
     <ServiceFooter />
      </div>
    </div>
  )
}

export default RoundUp