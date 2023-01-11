import React from 'react';

const Hero = () => {
  return (
    <div style={{
      background: `url(https://i.ibb.co/mXCCgLP/legal-justice-claim.jpg)`
    }} class="bg-no-repeat !bg-cover">
      <div class=" bg-black bg-opacity-25">
        <div class="p-32 text-center">
          <h1 className='lg:text-7xl text-2xl lg:px-32 !leading-relaxed
'><span className='text-[#BD902D]'>Attention:</span> <span className='text-white '>Lawsuits are now being filed in your area!</span>
          </h1>
        </div>
      </div>
    </div>

    // <div class="hero max-h-screen !bg-no-repeat !bg-cover" style={{
    //   background: `url(https://i.ibb.co/mXCCgLP/legal-justice-claim.jpg)`
    // }}>
    //   <div class="hero-overlay bg-black bg-opacity-25">
    //     <div className='px-10 py-10 '>
    //       <h1 className='lg:text-7xl text-2xl leading-relaxed'><span className='text-[#BD902D]'>Attention:</span> <span className='text-white '>Lawsuits are now being filed in your area!</span>
    //       </h1>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Hero