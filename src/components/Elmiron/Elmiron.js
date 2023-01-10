import React from 'react';
import './Elmiron.css';
import heroelmiron from "../../assets/hero-elmiron.jpg";

const Elmiron = () => {
    return (
        <div class="hero !bg-no-repeat !bg-cover" style={{
            background: `url(${heroelmiron})`
        }}>
            <div className='elmiron-box w-1/2'>
                <h1 className='text-4xl pt-3 mb-3'>Have you used Elmiron?</h1>
                <p className='text-2xl mb-3'>Have You Experienced Vision & Eye Problems After Long Term Elmiron Use?</p>
                <button className='bg-red-800 hover:bg-[#003144] px-3 py-1 font-semibold rounded'>Free Claim Review »</button>
            </div>
        </div>
    )
}

export default Elmiron;