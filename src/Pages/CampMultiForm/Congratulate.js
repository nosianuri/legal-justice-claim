import React from 'react';
import { Helmet } from 'react-helmet';
import gify from '../../assets/camp-thanks.gif';

const Congratulate = () => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Thanks for Camp lejeune Applied | Legal Justice Claim</title>
    </Helmet>
    <div>
        <div className='bg-[#84754e] h-[50px]'></div>
        <div className='mt-3 mb-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='max-w-[700px] mx-auto text-center px-3'>
                    <h2 className='text-center font-bold text-[#e1b814] sm:text-4xl text-2xl my-5 !leading-normal'><span className='text-[#5b9436]'>Congratulations</span>, We have excellent news!</h2>
                    <div className='max-w-[500px] mx-auto'>
                        <p className='font-bold text-[#7e7777] mb-5'> Our team of highly skilled attorneys is currently reviewing your Camp Lejeune lawsuit case. If you were exposed to contaminated water at Camp Lejeune and are seeking legal representation, we are here to help.
                        </p>
                        <p className='sm:text-xl text-md mb-5'>If you have not yet secured legal representation and are still within the statute of limitations, we will be reaching out to you very soon! Please keep your phone close by and be ready to answer our call, as we'll be contacting you as soon as possible.</p>
                    </div>
                    <a href="tel:+18559390621">
                        <img src={gify} alt="" className='w-96 mx-auto' />
                    </a>
                    <h4 className='text-lg mt-5'>Rest assured, our team is dedicated to helping you every step of the way. We understand the seriousness of the situation and will work tirelessly to ensure that you receive the compensation you deserve.</h4>
                    <p className='text-sm'> So, sit back, relax, and let us take care of everything for you! Our attorneys have the knowledge and experience to navigate the complexities of your Camp Lejeune lawsuit case, and we are here to support you throughout the entire process.
</p>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Congratulate