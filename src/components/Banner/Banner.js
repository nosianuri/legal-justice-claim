import React from 'react'
import Header from '../Shared/Header/Header';
import { fadeIn, staggerContainer } from '../Shared/variants';
import { motion } from 'framer-motion';
import { heroData } from '../Shared/Header/data';

const Banner = () => {

  return (
    <section style={{
      background: `url(https://i.ibb.co/jzqLRW6/IMG-20230116-213604.png)`
    }} className='lg:min-h-[530px] min-h-[450px] bg-hero !bg-cover'>
      {/* header */}
      <Header />
      <div className='container mx-auto lg:min-h-[580px] min-h-[490px] flex justify-center items-center'>
        {/* text */}
        <div className='text-center flex flex-col items-center align-middle'>
          <div
            className='text-white text-[38px] lg:text-[58px] md:text-[40px] font-primary italic lg:font-bold mb-1 lg:px-36 lg:mx-36 pt-16 px-5 items-center align-middle'>
            <p className='lg:mx-16 mt-16'> <span className='text-[#BD902D] '>Attention:</span>  Lawsuits are now being filed in your area!</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner