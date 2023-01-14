import React from 'react'
import { Helmet } from 'react-helmet'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import MainBody from '../../components/MainBody/MainBody'
import ServiceFooter from '../../components/Shared/ServiceNavbar/ServiceFooter'
import ServiceNavbar from '../../components/Shared/ServiceNavbar/ServiceNavbar'

const Mesothelioma = () => {
  return (
    <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Mesothelioma | Legal Justice Claim</title>
      </Helmet>
      <div>
      <Banner />
      
      <MainBody />
      <Footer />
      </div>
    </div>
  )
}

export default Mesothelioma