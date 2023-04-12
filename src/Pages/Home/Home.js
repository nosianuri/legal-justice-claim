import React from 'react';
import Footer from '../../components/Footer/Footer';
import MainBody from '../../components/MainBody/MainBody';
import { Helmet } from 'react-helmet';
import Banner from '../../components/Banner/Banner';
import NavigationMenu from '../../components/Navbar/NavigationMenu';
import Sidebar from '../../components/Navbar/Sidebar';
import Hbanner from '../../components/Hbanner/Hbanner';


const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Legal Justice Claim </title>
      </Helmet>
      {/* <Sidebar /> */}
      <NavigationMenu />
      <Hbanner />
      {/* <Banner /> */}
      <MainBody />
      <Footer />
    </div>
  )
}

export default Home