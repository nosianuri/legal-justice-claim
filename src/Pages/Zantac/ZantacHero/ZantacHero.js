import React from 'react';
import ZantacForm from './ZantacForm';

const ZantacHero = () => {
  return (
    <div style={{
        background: `url(https://i.ibb.co/j5DwYBn/zantac.jpg)`
    }} class="bg-no-repeat !bg-cover">
        <div className='lg:px-32 px-8 bg-black bg-opacity-25'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                <div className='lg:py-16 py-5 lg:mx-16 order-2'>
                    <h1 className='lg:text-5xl text-4xl text-center font-bold'>Zantac® lawsuits are now being filed!</h1>
                    <h3 className='text-[#300303] lg:text-[35px] text-2xl text-center my-5 leading-tight font-semibold'>FDA calls for heartburn drug Zantac to be pulled from market immediately, April 1, 2020*</h3>
                    <div className='bg-slate-50 border-l-4 border-gray-300 lg:mx-10 p-10 rounded shadow-xl'>
                        <h2 className='lg:text-4xl text-2xl mb-3'>Signs & Symptoms</h2>
                        <div className='lg:w-full w-full h-[1px] bg-gray-700'></div>
                        <div className='mt-5 '>
                            <p className='lg:text-2xl text-lg'>Liver Cancer</p>
                            <p className='lg:text-2xl text-lg'>Kidney Cancer</p>
                            <p className='lg:text-2xl text-lg'>Stomach Cancer</p>
                            <p className='lg:text-2xl text-lg'>Colon Cancer</p>
                            <p className='lg:text-2xl text-lg'>Prostate Cancer</p>
                            <p className='lg:text-2xl text-lg'>Esophageal Cancer</p>
                            <p className='lg:text-2xl text-lg'>Pancreatic Cancer</p>
                            <p className='lg:text-2xl text-lg'>Bladder Cancer</p>
                            <p className='lg:text-2xl text-lg'>Other Digestive Tract Cancers</p>
                            <p className='lg:text-2xl text-lg'>and more...</p>
                        </div>
                    </div>
                </div>
                <div className='lg:order-2'>
                    <div className='lg:hidden blocked text-center my-5'>
                        <h2 className='lg:text-5xl text-4xl text-center font-bold'>Zantac® lawsuits are now being filed!</h2>
                        <h5 className='text-[#300303] lg:text-[35px] text-2xl text-center my-5 leading-tight font-semibold'>FDA calls for heartburn drug Zantac to be pulled from market immediately, April 1, 2020*</h5>
                    </div>
                    <ZantacForm />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ZantacHero