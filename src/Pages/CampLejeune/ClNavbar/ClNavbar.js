import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Asset 1@320x-8.png';

const ClNavbar = () => {
  return (
    <div className='bg-[#13100E]'>
    <div className='flex justify-between items-center'>
    <div className='py-3'>
            <Link to="/">
                <img className='lg:w-24 w-16 lg:ml-36 ml-10' src={logo} alt="" />
            </Link>
        </div>
        <div className='font-bold lg:pr-36 pr-5'>
          <p className='lg:text-xl text-[#BD902D]'>Free Consultation . Call 24/7</p>
          <p className='lg:text-3xl text-center hover:text-[#BD902D] text-white'><a href="tel:+18559390621"><i class="fa-solid fa-phone pr-3"></i>(855) 939-0621</a></p>
        </div>
    </div>
        
    </div>
  )
}

export default ClNavbar