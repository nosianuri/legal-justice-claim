import React from 'react'
import { Helmet } from 'react-helmet'
import LegalHeader from '../../components/LegalHeader/LegalHeader'
import Footer from '../../components/Footer/Footer'
import TestimonialBody from './TestimonialBody'

const Testimonial = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Testimonial | Legal Justice Claim </title>
      </Helmet>
      <LegalHeader />
      <TestimonialBody />
      <Footer />
    </div>
  )
}

export default Testimonial