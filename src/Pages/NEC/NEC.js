import React from 'react'
import { Helmet } from 'react-helmet'
import ServiceFooter from '../../components/Shared/ServiceNavbar/ServiceFooter'
import ServiceNavbar from '../../components/Shared/ServiceNavbar/ServiceNavbar'
import NecAbout from './NecAbout/NecAbout'
import NecFind from './NecFind/NecFind'
import NecHelp from './NecHelp/NecHelp'
import NecHero from './NecHero/NecHero'
import NecNews from './NecNews/NecNews'
import NecSign from './NecSign/NecSign'

const NEC = () => {
  return (
    <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>NEC | Legal Justice Claim</title>
      </Helmet>
      <div>
     <ServiceNavbar />
     <NecHero />
     <NecFind />
     <NecHelp />
     <NecAbout />
     <NecSign />
     <NecNews />
     <ServiceFooter />
      </div>
    </div>
  )
}

export default NEC