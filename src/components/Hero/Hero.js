import React from 'react';

const Hero = () => {
  return (
    <div style={{
      background: `url(https://i.ibb.co/mXCCgLP/legal-justice-claim.jpg)`
    }} class="bg-no-repeat !bg-cover">
      <div class=" bg-black bg-opacity-25">
        <div class=" text-center">
          <h1 className='lg:text-7xl text-2xl lg:pl-[240px] pl-[50px] lg:py-32 py-16 lg:w-[1280px] w-[300px] !leading-relaxed'><span className='text-[#BD902D]'>Attention:</span> <span className='text-white '>Lawsuits are now being filed in your area!</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero