import React from 'react'
import { Helmet } from 'react-helmet'
import ServiceFooter from '../../components/Shared/ServiceNavbar/ServiceFooter'
import ClAbout from './ClAbout/ClAbout'
import ClFind from './ClFind/ClFind'
import ClHelp from './ClHelp/ClHelp'
import ClHero from './ClHero/ClHero'
import ClNavbar from './ClNavbar/ClNavbar'
import ClNews from './ClNews/ClNews'
import ClSign from './ClSign/ClSign'

const CampLejeune = () => {
  return (
    <div>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Camp Lejeune | Legal Justice Claim</title>
        </Helmet>
        <ClNavbar />
        <ClHero />
        <ClFind />
        <ClHelp />
        <ClAbout />
        <ClSign />
        <ClNews />
        <ServiceFooter />
    </div>
  )
}

export default CampLejeune