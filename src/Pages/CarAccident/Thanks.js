import React from 'react'
import gify from '../../assets/car_anim.gif'

const Thanks = () => {
    return (
        <div className='my-6'>
            <div className='max-w-7xl mx-auto'>
                <div className='max-w-[700px] mx-auto text-center px-3'>
                    <h2 className='text-center font-bold text-[#166dd7] sm:text-4xl text-2xl my-5 !leading-normal'>Our Attorneys Are Reviewing Your Case. Be Prepared To Answer Your Phone.</h2>
                    <div className='max-w-[500px] mx-auto'>
                        <p className='font-bold text-[#7e7777] mb-5'>If You were not at fault, not represented, and within the statue of limitations we are going to call you as soon as possible. Please be ready to pick up your phone.</p>
                        <p className='sm:text-xl text-md mb-5'>To help you through this accident and any medical or collision bills here is a loan service that can help you immediately. Check now to see how much you can get approved for by clicking here:</p>
                    </div>
                    <a href="/">
                        <img src={gify} alt="" className='w-96 mx-auto' />
                    </a>
                    <h4 className='text-lg mt-5'>Sponsored Ads That May Interest You</h4>
                    <p className='text-sm'>Related Search Topics</p>
                </div>
            </div>
        </div>
    )
}

export default Thanks