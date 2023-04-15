import React from 'react'
import { Helmet } from 'react-helmet'
import LegalHeader from '../../components/LegalHeader/LegalHeader'
import Footer from '../../components/Footer/Footer'

const About = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Testimonial | Legal Justice Claim </title>
      </Helmet>
      <LegalHeader />
      
      <Footer />
    </div>
  )
}

export default About