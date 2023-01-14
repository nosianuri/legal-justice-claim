import React from 'react';
import FiForm from './FiForm';

const FiHero = () => {
  return (
    <div style={{
        background: `url(https://i.ibb.co/FxQSNXd/Fire-Fighting.png)`
    }} class="bg-no-repeat !bg-cover">
        <div className='lg:px-32 px-8'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                <div className='lg:py-16 py-5 lg:mx-16'>
                    <h1 className='lg:text-5xl text-4xl text-center'>Firefighting Foam Lawsuits are now being filed!</h1>
                    <h3 className='text-[#300303] lg:text-[35px] text-2xl text-center my-5 leading-tight'>Toxic Firefighting Foam With PFAS Scrutinized by Multiple States*</h3>
                    <div className='bg-slate-50 border-l-4 border-gray-300 lg:mx-10 p-10 rounded'>
                        <h2 className='lg:text-4xl text-2xl mb-3'>Signs & Symptoms</h2>
                        <div className='lg:w-full w-full h-[1px] bg-gray-700'></div>
                        <div className='mt-5 '>
                            <p className='lg:text-2xl text-lg'>Bladder Cancer</p>
                            <p className='lg:text-2xl text-lg'>Kidney Damage/Cancer</p>
                            <p className='lg:text-2xl text-lg'>Leukemia</p>
                            <p className='lg:text-2xl text-lg'>Lymphoma</p>
                            <p className='lg:text-2xl text-lg'>Pancreatic Cancer</p>
                            <p className='lg:text-2xl text-lg'>Prostate Cancer</p>
                            <p className='lg:text-2xl text-lg'>Testicular Cancer</p>
                            <p className='lg:text-2xl text-lg'>and more...</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='lg:hidden blocked text-center mb-5'>
                        <h2 className='text-3xl'>Firefighting Foam Lawsuits are now being filed!</h2>
                        <h5 className='text-xl'>Toxic Firefighting Foam With PFAS Scrutinized by Multiple States*</h5>
                    </div>
                    <FiForm />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FiHero;