import React from 'react'
import { Helmet } from 'react-helmet'
import LegalHeader from '../../components/LegalHeader/LegalHeader'
import Footer from '../../components/Footer/Footer'
import AboutBody from './AboutBody'

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Testimonial | Legal Justice Claim </title>
      </Helmet>
      <div>
        <LegalHeader />
        <AboutBody />
        <Footer />
      </div>
    </>
  )
}

export default About