import React from 'react';
import roundup from '../../assets/roundup_bg.jpg';

const RoundUp = () => {
  return (
    <div>
      <h1 className='lg:text-6xl text-2xl mt-2 mb-5'>RoundUp Exposure linked to Cancer</h1>
      <div className='lg:w-full w-full h-[1px] bg-gray-700'></div>
      <div className='lg:flex space-y-3 mt-10 '>
        <div className='mr-5'>
          <h3 className='lg:text-3xl text-xl text-[#198ec0] font-bold'><a className='hover:text-[#8bc53f]' href="/roundup">Roundup Maker Agrees to Pay $10 Billion to Settle Cancer Suits as of June, 24, 2020</a></h3>
          <p className='text-lg mt-2'>Monsanto has settled over 100,000 Roundup lawsuits, paying out about $11 billion as of May 2022. The recent Roundup settlement will pay as much as $9.6 billion to resolve victims involved in current litigation and set aside $1.25 billion to pay future claims as part of separate class-action lawsuits. The average Roundup lawsuit payout for Round One settlements was in the $120,000 to $180,000 per person range.... <span className='font-bold text-[#198ec0] underline'><a className='hover:text-[#8bc53f]' href="/roundup"> Read More »</a></span></p>
        </div>
        <div className='image-box w-[100%]'>
        <img className='' src={roundup} alt="" />
        </div>
      </div>
      <div className='mb-10 mt-5'>
      <a href="/roundup">
      <button className='bg-[#8bc53f] hover:bg-[#198ec0] px-3 text-white py-1 font-semibold rounded'>Free Claim Review »</button>
      </a>
        
      </div>

    </div>
  )
}

export default RoundUp