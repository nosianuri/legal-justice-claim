import React from 'react';
import marker from '../../../assets/marker.png';

const ZantacFind = () => {
  return (
    <div className='py-10 bg-[#f0f0f0]'>
    <h1 className='lg:text-5xl text-3xl lg:px-36 px-8 lg:mx-36 text-center'>Find Yourself a Lawyer That Will Fight For You and Your Rights!</h1>
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 lg:mx-36 mt-10'>
        <div className='p-5' >
            <img className='mx-auto w-16' src={marker} alt="" />
            <p className='text-xl mt-3'>Receive the Compensation
                You Deserve!</p>
        </div>
        <div className='p-5'>
            <img className='mx-auto w-16' src={marker} alt="" />
            <p className='text-xl mt-3'>FREE No Obligation
                Consultation - Pay Nothing!</p>
        </div>
        <div className='p-5'>
            <img className='mx-auto w-16' src={marker} alt="" />
            <p className='text-xl mt-3'>Your Contact Information
                and Your Claim are Confidential!</p>
        </div>
    </div>
</div>
  )
}

export default ZantacFind