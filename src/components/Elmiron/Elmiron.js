import React from 'react';
import './Elmiron.css';
import heroelmiron from "../../assets/hero-elmiron.jpg";

const Elmiron = () => {
    return (
        <div class="py-5  bg-no-repeat !bg-cover" style={{
            background: `url(${heroelmiron})`
        }}>
            <div className='elmiron-box lg:w-1/2 '>
                <h1 className='lg:text-4xl text-xl pt-3 lg:mb-3'>Have you used Elmiron?</h1>
                <p className='lg:text-2xl text-md lg:mb-3'>Have You Experienced Vision & Eye Problems After Long Term Elmiron Use?</p>
                <button className='bg-[#BD902D] hover:bg-[#13100E] lg:px-3 py-1 font-semibold rounded'>Free Claim Review »</button>
            </div>
        </div>
    )
}

export default Elmiron;