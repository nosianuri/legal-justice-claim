import React from 'react';
import EForm from './EForm';

const EHero = () => {
    return (
        <div style={{
            background: `url(https://i.ibb.co/HzLjVwD/3-M-Earplugs.jpg)`
        }} class="bg-no-repeat !bg-cover">
            <div className='lg:px-32 px-8 bg-black bg-opacity-25'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                    <div className='lg:py-16 py-5 lg:mx-16 order-2'>
                        <h1 className='lg:text-5xl text-4xl text-center font-bold'>Winning Claims for Military Veterans!</h1>
                        <h3 className='text-[#300303] lg:text-[35px] text-2xl text-center my-5 leading-tight font-semibold'>3M Company Agrees to Pay $9.1 Million as of July 26, 2018*</h3>
                        <div className='bg-slate-50 border-l-4 border-gray-300 lg:mx-10 p-10 rounded shadow-xl'>
                            <h2 className='lg:text-4xl text-2xl mb-3'>Signs & Symptoms</h2>
                            <div className='lg:w-full w-full h-[1px] bg-gray-700'></div>
                            <div className='mt-5 '>
                                <p className='lg:text-2xl text-lg'>Hearing Loss</p>
                                <p className='lg:text-2xl text-lg'>Tinnitus (ringing or buzzing in ears)</p>
                                <p className='lg:text-2xl text-lg'>Hearing Impairment</p>
                                <p className='lg:text-2xl text-lg'>Unilateral Hearing Loss</p>
                                <p className='lg:text-2xl text-lg'>Bilateral Hearing Loss</p>
                                <p className='lg:text-2xl text-lg'>Auditory processing disorder (APD)</p>
                                <p className='lg:text-2xl text-lg'>and more...</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:order-2'>
                        <div className='lg:hidden blocked text-center my-5'>
                            <h2 className='lg:text-5xl text-4xl text-center font-bold'>Winning Claims for Military Veterans!</h2>
                            <h5 className='text-[#300303] lg:text-[35px] text-2xl text-center my-5 leading-tight font-semibold'>3M Company Agrees to Pay $9.1 Million as of July 26, 2018*</h5>
                        </div>
                        <EForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EHero