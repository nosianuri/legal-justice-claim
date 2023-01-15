import React from 'react'
import RuForm from './RuForm'

const RuHero = () => {
  return (
    <div style={{
        background: `url(https://i.ibb.co/NF00y3b/roundup.jpg)`
    }} class="bg-no-repeat !bg-cover">
        <div className='lg:px-32 px-8'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                <div className='lg:py-16 py-5 lg:mx-16'>
                    <h1 className='lg:text-5xl text-4xl text-center'>Roundup® Lawsuits are now being filed!</h1>
                    <h3 className='text-[#300303] lg:text-[35px] text-2xl text-center my-5 leading-tight'>Roundup® Maker Agrees to Pay $10 Billion to Settle Cancer Suits as of June 24, 2020*</h3>
                    <div className='bg-slate-50 border-l-4 border-gray-300 lg:mx-10 p-10 rounded'>
                        <h2 className='lg:text-4xl text-2xl mb-3'>Signs & Symptoms</h2>
                        <div className='lg:w-full w-full h-[1px] bg-gray-700'></div>
                        <div className='mt-5 '>
                            <p className='lg:text-2xl text-lg'>Non-Hodgkin’s Lymphoma (NHL)</p>
                            <p className='lg:text-2xl text-lg'>Chronic Lymphocytic Leukemia (CLL)</p>
                            <p className='lg:text-2xl text-lg'>T-Cell Lymphoma</p>
                            <p className='lg:text-2xl text-lg'>B-Cell Lymphoma</p>
                            <p className='lg:text-2xl text-lg'>Other Lymphoma</p>
                            <p className='lg:text-2xl text-lg'>Other Leukemia</p>
                            <p className='lg:text-2xl text-lg'>and more...</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='lg:hidden blocked text-center mb-5'>
                        <h2 className='text-3xl'>Roundup® Lawsuits are now being filed!</h2>
                        <h5 className='text-xl'>Roundup® Maker Agrees to Pay $10 Billion to Settle Cancer Suits as of June 24, 2020*</h5>
                    </div>
                    <RuForm />
                </div>
            </div>
        </div>
    </div>
  )
}

export default RuHero