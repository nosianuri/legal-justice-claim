import React from 'react'
import Header from '../Shared/Header/Header';
import './Banner.css';
import SlidingTextAnimation from '../SlidingTextAnimation';
import Navbar from '../Navbar/Navbar';
import Nav from '../Navbar/Nav';
import NavigationMenu from '../Navbar/NavigationMenu';

const Banner = () => {

  return (
    <section style={{
      background: `url(https://i.ibb.co/jzqLRW6/IMG-20230116-213604.png)`
    }} className=' bg-hero !bg-cover'>
      {/* header */}
     <NavigationMenu />
     
      <div className='container mx-auto lg:min-h-[580px]  min-h-[490px] flex justify-center items-center'>
        {/* text */}
        <div className='text-center flex flex-col items-center align-middle sm:mt-16'>
          <div
            className='text-white  font-primary italic lg:font-bold mb-1 lg:px-36 md:px-8 lg:mx-36 pt-16 px-5 items-center align-middle '>
            <h2 className='text-[38px] lg:text-[58px] md:text-[40px] '>Legal Justice Claim
            </h2>
            <h4 className='text-[28px] lg:text-[38px] md:text-[30px] '>Expert Legal Advocates for Winning Your Lawsuit and Maximum Compensation</h4>
            
            <SlidingTextAnimation />
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner