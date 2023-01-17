import React from 'react';
// import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MainBody from '../../components/MainBody/MainBody';
import { Helmet } from 'react-helmet';
import Banner from '../../components/Banner/Banner';


const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Legal Justice Claim </title>
      </Helmet>
      <Banner />
      
      <MainBody />
      <Footer />
    </div>
  )
}

export default Home