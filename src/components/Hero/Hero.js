import React from 'react';
import hero from '../../assets/short.jpg';

const Hero = () => {
  return (
    <div class=" !bg-no-repeat !bg-cover" style={{
        background: `url(${hero})`
    }}>
    <div class="hero-overlay bg-opacity-25">
    <div className='pl-10 py-10 text-white'>
    <h2 className='uppercase text-7xl font-bold'>Resources</h2>
        <h5 className='text-4xl mt-3 font-semibold'>For Injured Communities</h5>
        <p className='text-xl mt-3'>Conncel Empower, Advocate.</p>
    </div>
    </div>
    </div>
  )
}

export default Hero