import React from 'react';
import { Helmet } from 'react-helmet';
import gify from '../../assets/car-accident.gif';

const Thanks = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Thanks | Legal Justice Claim</title>
            </Helmet>
            <div>
                <div className='bg-[#84754e] h-[50px]'></div>
                <div className='mt-3 mb-8'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='max-w-[700px] mx-auto text-center px-3'>
                            <h2 className='text-center font-bold text-[#e1b814] sm:text-4xl text-2xl my-5 !leading-normal'><span className='text-[#5b9436]'>Congratulations</span>, Great news!</h2>
                            <div className='max-w-[500px] mx-auto'>
                                <p className='font-bold text-[#7e7777] mb-5'> Our team of top-notch attorneys is currently reviewing your case. If you were not at fault for your accident, have not yet secured legal representation, and are still within the statute of limitations, we will be reaching out to you very soon! So keep your phone close by and be ready to answer, as we'll be calling you ASAP.
                                </p>
                                <p className='sm:text-xl text-md mb-5'>We understand that dealing with the aftermath of an accident can be a difficult and stressful time, especially when it comes to medical and collision bills. But don't worry, we have a fantastic loan service that can help you get the financial assistance you need right away! Just click here to find out how much you can be approved for.</p>
                            </div>
                            <a href="tel:+18559390621">
                                <img src={gify} alt="" className='w-96 mx-auto' />
                            </a>
                            <h4 className='text-lg mt-5'>Rest assured, our team is dedicated to helping you every step of the way.</h4>
                            <p className='text-sm'> So sit back, relax, and let us take care of everything for you!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Thanks