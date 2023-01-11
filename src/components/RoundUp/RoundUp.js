import React from 'react';
import roundup from '../../assets/roundup.jpg';

const RoundUp = () => {
  return (
    <div>
      <h1 className='lg:text-6xl text-2xl mt-2 mb-5'>RoundUp Exposure linked to Cancer</h1>
      <div className='lg:w-full w-full h-[1px] bg-gray-700'></div>
      <div className='lg:flex space-y-3 my-10 '>
        <div className='mr-5'>
          <h3 className='text-xl font-bold'>Roundup Maker Agrees to Pay $10 Billion to Settle Cancer Suits as of June, 24, 2020</h3>
          <p className='text-lg'>Roundup® is one of the most widely used herbicides in the U.S. Millions of consumers have used the weed killer in their home gardens and lawns since it was introduced in 1976 and, unfortunately, it has been found to contain harmful chemicals that may cause cancer to those exposed to it. <span className='font-bold text-[#BD902D] underline'>Read More »</span></p>
        </div>
        <img src={roundup} alt="" />
      </div>
      <div className='my-5'>
        <button className='bg-[#BD902D] hover:bg-[#13100E] px-3 text-white py-1 font-semibold rounded'>Free Claim Review »</button>
      </div>

    </div>
  )
}

export default RoundUp