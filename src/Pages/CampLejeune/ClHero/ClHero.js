import React from 'react'
import ClForm from './ClForm'

const ClHero = () => {
  return (
    <div style={{
        background: `url(https://i.ibb.co/9yq0Q28/Fire-fighting.jpg)`
    }} class="bg-no-repeat !bg-cover">
        <div className='lg:px-32 px-8 bg-black bg-opacity-25'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                <div className='lg:py-16 py-5 lg:mx-10 order-2'>
                    <h1 className='lg:text-5xl text-4xl text-center font-bold '>Camp Lejeune Water Contamination Lawsuits are now being filed!</h1>
                    <h3 className='text-[#300303] lg:text-[35px] text-2xl text-center my-5 leading-tight font-semibold'>Camp Lejeune Justice Act passes U.S. Senate as part of PACT Act as of August 10th, 2022*</h3>
                    <div className='bg-slate-50 border-l-4 border-gray-300 lg:mx-10 p-10 rounded shadow-xl'>
                        <h2 className='lg:text-4xl text-2xl mb-3'>Signs & Symptoms</h2>
                        <div className='lg:w-full w-full h-[1px] bg-gray-700'></div>
                        <div className='mt-5 '>
                            <p className='lg:text-2xl text-lg'>Bladder Cancer</p>
                            <p className='lg:text-2xl text-lg'>Cardiac Birth Defects</p>
                            <p className='lg:text-2xl text-lg'>Female Infertility</p>
                            <p className='lg:text-2xl text-lg'>Hepatic Steatosis</p>
                            <p className='lg:text-2xl text-lg'>Miscarriage</p>
                            <p className='lg:text-2xl text-lg'>Neurobehavioral Effects</p>
                            <p className='lg:text-2xl text-lg'>Other Cancers</p>
                            <p className='lg:text-2xl text-lg'>and more...</p>
                        </div>
                    </div>
                </div>
                <div className='lg:order-2'>
                    <div className='lg:hidden blocked text-center my-5'>
                        <h2 className='lg:text-5xl text-4xl text-center font-bold '>Camp Lejeune Water Contamination Lawsuits are now being filed!</h2>
                        <h5 className='text-[#300303] lg:text-[35px] text-2xl text-center my-3 leading-tight font-semibold'>Camp Lejeune Justice Act passes U.S. Senate as part of PACT Act as of August 10th, 2022*</h5>
                    </div>
                    <ClForm />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClHero