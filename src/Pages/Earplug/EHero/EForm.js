import React from 'react';

const EForm = () => {
    return (
        <div className='mb-16 bg-[#f0f0f0] border-8 border-[#f0f0f0] lg:mt-[-80px] rounded-t-xl'>
            <div className='p-5'>
                <div className='bg-[#BD902D] lg:px-10 px-2 rounded-t-xl text-white py-3'>
                    <h2 className='text-center lg:text-xl'>FILL OUT THE FORM BELOW</h2>
                    <h5 className='text-center lg:text-2xl text-xl'>TO GET YOUR FREE CLAIM REVIEW</h5>
                    <p className='text-center lg:text-xl'>You may be entitled to <span className='underline'>financial compensation!</span></p>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 py-5 lg:gap-8'>
                    <div className='space-y-3 mb-3 lg:mb-0'>
                        <input className='px-2 rounded w-full py-2' type="text" name='first_name' placeholder='First Name' />
                        <input className='px-2 rounded w-full py-2' type="text" name='last_name' placeholder='Last Name' />
                        <input className='px-2 rounded w-full py-2' type="text" name='email' placeholder='Email' />
                    </div>
                    <div className='space-y-3'>
                        <input className='px-2 rounded w-full py-2' type="text" name='phone' placeholder='Phone' />
                        <input className='px-2 rounded w-full py-2' type="text" name='address' placeholder='Address' />
                        <input className='px-2 rounded w-full py-2' type="text" name='zip' placeholder='ZIP' />
                    </div>
                </div>
                <div className='lg:w-full w-full h-[1px] bg-gray-300'></div>
                <div className='bg-[#BD902D] lg:mx-16 rounded-xl'>
                    <h3 className='mt-5 lg:text-lg py-1 text-center text-white'>Your Information is 100% Confidential</h3>
                    <div>
                    </div>
                </div>
                <div className='flex gap-10 py-1 lg:px-3 mt-3 '>
                    <p>Did you or a loved one use 3M Dual-Ended Combat Arms Earplugs?</p>
                    <div className='flex gap-5'>
                        <p>Yes</p>
                        <p>No</p>
                    </div>
                </div>
                <div className='lg:w-full w-full h-[1px] bg-gray-300 '></div>
                <div className='flex gap-10 py-1 lg:px-3'>
                    <p>Were you or a loved one diagnosed with hearing loss?</p>
                    <div className='flex gap-5'>
                        <p>Yes</p>
                        <p>No</p>
                    </div>
                </div>
                <div className='lg:w-full w-full h-[1px] bg-gray-300 '></div>
                <div className='flex gap-10 py-1 lg:px-3'>
                    <p>Did you or a loved one serve in the U.S. Military between 2003 and 2015?</p>
                    <div className='flex gap-5'>
                        <p>Yes</p>
                        <p>No</p>
                    </div>
                </div>
                <div className='lg:w-full w-full h-[1px] bg-gray-300 '></div>
                <div className='flex gap-10 py-1 lg:px-3'>
                    <p>Do you currently have a lawyer representing your claim?</p>
                    <div className='flex gap-5'>
                        <p>Yes</p>
                        <p>No</p>
                    </div>
                </div>
                <div className='lg:px-10 mt-3'>
                    <textarea className='rounded w-full p-2' name="" id="" cols="50" rows="2" placeholder='More details about your claim' ></textarea>
                </div>
                <div className='text-center bg-[#BD902D] rounded my-5'>
                    <a href="/">
                        <button className='uppercase text-xl py-2 text-white'>Submit My Claim</button>
                    </a>
                </div>
                <p className='text-xs text-gray-400 lg:px-10'>By clicking the “Submit My Claim” button, you certify that you have provided your legal name and your own phone number, you agree to the <a className='text-[#300303] hover:underline' href="/">Terms and Conditions</a> and <a className='text-[#300303]' href="/">Privacy Policy</a> and authorize Lawsuit-Winning and its <a className='text-[#300303]' href="/">partners</a> to contact you by email or at the phone number you entered using automated technology including recurring auto-dialers, pre-recorded messages, and text messages, even if your phone is a mobile number or is currently listed on any state, federal, or corporate “Do Not Call” list. You understand that your telephone company may impose charges on you for these contacts, and that you can revoke this consent at any time. For SMS campaigns Text STOP to cancel and HELP for help. Message and data rates may apply. By clicking the “Submit My Claim” button and submitting this form, I affirm that I have read and agree to this Site’s <a className='text-[#300303]' href="/">Terms and Conditions</a> (including the arbitration provision and the E-SIGN consent) and Privacy Policy.</p>
            </div>
        </div>
    )
}

export default EForm