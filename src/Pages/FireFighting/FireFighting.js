import React from 'react'
import { Helmet } from 'react-helmet'
import FiAbout from './FiAbout/FiAbout'
import FiFind from './FiFind/FiFind'
import FiFooter from './FiFooter/FiFooter'
import FiHelp from './FiHelp/FiHelp'
import FiHero from './FiHero/FiHero'
import FiNavbar from './FiNavbar/FiNavbar'
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
      <FiNavbar />
      <FiHero />
      <FiFind />
      <FiHelp />
      <FiAbout />
      <FiSign />
      <FiNews />
      <FiFooter />
      </div>
    </div>
  )
}

export default FireFighting;