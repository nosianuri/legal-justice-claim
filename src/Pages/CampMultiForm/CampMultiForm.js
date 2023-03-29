import React from 'react';
import { Helmet } from 'react-helmet';
import CampFooter from './CampFooter';
import './CampMultiForm.css';
import MultiForm from './MultiForm';

const CampMultiForm = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>File a Camp Lejeune Contamination Claim | Get Legal Help Today</title>
            </Helmet>
            <div>
                <div className='bg-[#84754e] h-[50px]'></div>
                <div className='max-w-[700px] !mx-auto text-center mb-16'>
                    <div className='flex gap-5 justify-center items-center mt-10 mb-5'>
                        <a href="https://legaljusticeclaim.com/camp-lejeune">
                            <img src="https://i.ibb.co/cghPKQC/Asset-1-320x-8.png" alt="" className='lg:w-24 w-16' />
                        </a>
                        <a href="https://legaljusticeclaim.com/camp-lejeune">
                            <h3 className='lg:text-5xl text-2xl font-bold text-[#84754e] !leading-normal'>Legal Justice Claim</h3>
                        </a>
                    </div>
                    <h2 className='text-[#A6192E] lg:text-3xl text-xl font-bold'>Camp Lejeune Water Contamination Lawsuit</h2>
                    <img src="https://i.ibb.co/6w6KvK1/camplejeune.png" alt="" className='mx-auto p-5 ' />
                    <h4 className='text-xl font-bold px-3'>If you or your family member, lived or stayed for 30 days for in Camp Lejeune in 1953 to 1987 and suffering a health condition, you can be entitled to the compensation of Million Dollars based on Camp Lejeune Justice ACT 2022!</h4>
                    {/* <div className="floating-icon border">
                    <a href="#form">
                        <BiChevronsDown color="#84754e" size={55} className="mouse" />
                    </a>
                </div> */}
                    <h3 className='text-[#A6192E] font-semibold lg:text-4xl  text-2xl my-3 !leading-normal'>Time is limited to file your claim!</h3>
                    <h3 className='font-semibold lg:text-4xl text-2xl mb-8 !leading-normal'>Apply For Compensation:</h3>
                    {/* <img src="https://i.ibb.co/86DqV2T/hands-gesture-ph-blue.png" alt="" className='mx-auto my-8'/> */}
                    {/* multi page start */}

                    <MultiForm />
                    <p className='text-xl mb-4 px-3 mt-8'> As of August 10th, 2022, the Camp Lejeune Justice Act, which was previously introduced as part of the PACT Act, has been passed by the U.S. Senate.  <span className='font-bold '>0$ No Obligation Expert Consultation - You have to Pay Nothing! We will provide 100% Privacy and Confidentiality about your case!</span></p>
                    <h4 className='my-8 font-semibold text-xl px-3'>Get assistance from a Camp Lejeune Expert lawyer who will protect your rights and fight for what you are owed!</h4>


                </div>
                <CampFooter />
            </div>
        </>
    )
}

export default CampMultiForm