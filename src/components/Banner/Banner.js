import React from 'react'
import Header from '../Shared/Header/Header';
import { fadeIn, staggerContainer } from '../Shared/variants';
import { motion } from 'framer-motion';
import { heroData } from '../Shared/Header/data';

const Banner = () => {

  return (
    <section style={{
      background: `url(https://i.ibb.co/hDkRLss/Legal-Hero.png)`
    }} className='lg:min-h-[690px] min-h-[450px] bg-hero !bg-cover'>
      {/* header */}
      <Header />
      <div className='container mx-auto lg:min-h-[650px] min-h-[490px] flex justify-center items-center'>
        {/* text */}
        <div className='text-center flex flex-col items-center'>
          <div
            className='text-white text-[38px] lg:text-[58px] font-primary italic lg:font-bold mb-1 lg:px-36 lg:mx-36 pt-16 px-5'>
            <p className='lg:mx-16 mt-36'> <span className='text-[#BD902D]'>Attention:</span>  Lawsuits are now being filed in your area!</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner