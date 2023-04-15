import React from 'react';
import Footer from '../../components/Footer/Footer';
import MainBody from '../../components/MainBody/MainBody';
import { Helmet } from 'react-helmet';
import Banner from '../../components/Banner/Banner';
import NavigationMenu from '../../components/Navbar/NavigationMenu';
import Sidebar from '../../components/Navbar/Sidebar';
import Hbanner from '../../components/Hbanner/Hbanner';
import LegalHeader from '../../components/LegalHeader/LegalHeader';
import BannerSlider from '../../components/BannerSlider';


const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Legal Justice Claim </title>
      </Helmet>
      <div>
        <LegalHeader />
        <BannerSlider />
        <MainBody />
        <Footer />
      </div>
    </>
  )
}

export default Home