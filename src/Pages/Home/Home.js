import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Attention from '../../components/Attention/Attention';
import Hero from '../../components/Hero/Hero';
import MainBody from '../../components/MainBody/MainBody';
import Elmiron from '../../components/Elmiron/Elmiron';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Attention />
        <Hero />
        <MainBody />
        <Footer />
    </div>
  )
}

export default Home