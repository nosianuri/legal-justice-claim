import React, { useState } from 'react';
import logo from "../../assets/Asset 1@320x-8.png";

const HeadTop = () => {
   
    return (
        <div className=' transparent lehead'>
            <div className='flex justify-between sm:mx-36'>
            <a href="/">
                <div className='flex items-center py-2'>
                    <img src={logo} alt="" className='lg:w-24 w-14' />
                    <p className='sm:text-[28px] pl-2  legal'>Legal Justice Claim</p>
                </div>
                </a>
                <div className='sm:block hidden'>
                    <div className='bg-[#cf2e2e] text-[#fff] px-4 py-2 font-medium text-[22px] hover:underline' >Free Consultation</div>
                    
                </div>
            </div>
        </div>
    )
}

export default HeadTop