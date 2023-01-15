import React from 'react';
import './Elmiron.css';

const Elmiron = () => {
    return (
        <div class="py-5  bg-no-repeat !bg-cover" style={{
            background: `url(https://i.ibb.co/2ystDnZ/legal-web-image-2.png)`
        }}>
            <div className='elmiron-box lg:w-1/2 '>
                <h1 className='lg:text-4xl text-xl pt-3 lg:mb-3'>Have you used Zantac®?</h1>
                <p className='lg:text-2xl text-md lg:mb-3'>FDA calls for heartburn drug Zantac to be pulled from market immediately, April 1, 2020</p>
                <button className='bg-[#BD902D] hover:bg-[#13100E] lg:px-3 py-1 font-semibold rounded'>Free Claim Review »</button>
            </div>
        </div>
    )
}

export default Elmiron;