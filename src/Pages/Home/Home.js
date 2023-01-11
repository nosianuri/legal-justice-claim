import React from 'react';
// import Navbar from '../../components/Navbar/Navbar';
import Navbar from '../../components/Shared/Navbar/Navbar'
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import MainBody from '../../components/MainBody/MainBody';
import { Helmet } from 'react-helmet';


const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Legal Justice Claim | Ray Advertising LLC</title>
      </Helmet>
      <Navbar />
      <Hero />
      <MainBody />
      <Footer />
    </div>
  )
}

export default Home