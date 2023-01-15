import React from 'react'
import MmForm from './MmForm'

const MmHero = () => {
  return (
    <div style={{
      background: `url(https://i.ibb.co/qR2T5V1/Medical-Malpractice.jpg)`
  }} class="bg-no-repeat !bg-cover">
      <div className='lg:px-32 px-8 bg-black bg-opacity-25'>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
              <div className='lg:py-16 py-5 lg:mx-16'>
                  <h1 className='lg:text-5xl text-4xl text-center font-semibold'>Personal Injury Lawsuits are now being filed!</h1>
                  <h3 className='text-[#300303] lg:text-[35px] text-2xl text-center my-5 leading-tight font-semibold'>Recent study Personal Injury claims earn an average $24,000 in compensation*</h3>
                  <div className='bg-slate-50 border-l-4 border-gray-300 lg:mx-10 p-10 rounded'>
                      <h2 className='lg:text-4xl text-2xl mb-3'>Signs & Symptoms</h2>
                      <div className='lg:w-full w-full h-[1px] bg-gray-700'></div>
                      <div className='mt-5 '>
                          <p className='lg:text-2xl text-lg'>Car/Truck Accident</p>
                          <p className='lg:text-2xl text-lg'>Motorcycle Accident</p>
                          <p className='lg:text-2xl text-lg'>Slip and Fall</p>
                          <p className='lg:text-2xl text-lg'>Workers Compensation</p>
                          <p className='lg:text-2xl text-lg'>Medical Malpractice</p>
                          <p className='lg:text-2xl text-lg'>Product Liability/Defect</p>
                          <p className='lg:text-2xl text-lg'>and more...</p>
                      </div>
                  </div>
              </div>
              <div>
                  <div className='lg:hidden blocked text-center mb-5'>
                      <h2 className='text-3xl'>Firefighting Foam Lawsuits are now being filed!</h2>
                      <h5 className='text-xl'>Toxic Firefighting Foam With PFAS Scrutinized by Multiple States*</h5>
                  </div>
                  <MmForm />
              </div>
          </div>
      </div>
  </div>
  )
}

export default MmHero