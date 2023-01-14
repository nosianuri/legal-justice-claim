import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Asset 1@320x-8.png';

const ServiceNavbar = () => {
  return (
    <div className='bg-[#13100E]'>
        <div className='py-3'>
            <Link to="/">
                <img className='lg:w-24 w-16 lg:ml-36 ml-10' src={logo} alt="" />
            </Link>
        </div>
    </div>
  )
}

export default ServiceNavbar