import React from 'react'
import { Helmet } from 'react-helmet'
import './CarAccident.css'
import MultiForm from './MultiForm'

const CarAccident = () => {
    return (
        <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Car Accident | Legal Justice Claim</title>
        
        </Helmet>
        <div className='body sg-body'>
            <div className='p-5 bg-[#273c5d] !w-full'>
                <div className='flex gap-3 items-center cac-gamified-header-logo'>
                    <img src="https://i.ibb.co/ZcRnXkX/Asset-1-320x-8.png" alt="" className='w-10' />
                    <p className='font-bold text-white text-xl '>Legal Justice Claim</p>
                    <div></div>
                </div>
            </div>

            <div id='headline' className='max-w-[700px] mx-auto text-white sm:text-3xl text-xl my-10 !leading-normal text-center px-2'>
                <h1 className='font-bold'>Numerous USA studies have suggested the average compensation earned for <span> Car Accident or Vehicle related accident claims </span> is approximately $24,000 <span className='text-[#fac705]  !no-underline'>*</span></h1>
                

                <p className='sm:text-xl text-lg my-5'>Take this quick assessment to get a <span className='text-[#fac705]'>FREE CASE CONSULTATION </span> and <span className='text-[#fac705]'>know how much is owed to you</span>
                </p>
                <MultiForm />
                {/* <StepFormBody /> */}
                <div className='cac-badges mt-5'>
                    <p className='!font-bold'>FREE No Obligation Consultation Pay Nothing!</p>
                    <p className='sm:text-xl text-lg my-5'>Are you the victim of an accident and unsure of what compensation you may be entitled to? Look no further than our trusted Personal Injury Lawyers! With our help, you can receive the maximum payout for your accident injury. Take our quick assessment today to receive a Free Case Consultation and discover how much you may be owed. Don't let your accident go uncompensated - let us fight for your rights and help you receive the compensation you deserve. Contact us today to take the first step towards a brighter future!
                    </p>
                    <span>Our Expert Lawyers Have Been Rated 5-stars</span>
                    <p className='mb-8'>Our expert lawyers have been rated 5-stars and we're proud to offer a FREE no-obligation consultation - meaning you pay nothing to speak with us! Whether you're dealing with a personal injury case or need legal advice, our team is here to help. We understand that legal matters can be overwhelming and confusing, which is why we're dedicated to providing you with the support you need. With our years of experience and proven track record of success, you can trust us to handle your case with professionalism and care. Contact us today to schedule your free consultation and take the first step towards resolution.
                    </p>
                    <div className='flex gap-3'>
                        <div>
                            <img src="https://i.ibb.co/k897fM6/yelp.png" alt="" />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/mNhjzM6/google.png" alt="" />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/HhhnR55/trustpilot.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div id='cac-footer-legal'>
                <p> <br /> This website is not affiliated with or endorsed by Facebook, Inc. or YouTube, a subsidiary of Google, LLC. The use of Facebook and YouTube trademarks is solely for informational purposes, and we are not associated with these companies in any way.
                    <br /> <br /> This website is a group advertisement and is not a lawyer referral service or prepaid legal services plan. We are not a law firm and do not endorse or recommend any participating lawyer or law firm. Our sole criteria for including participating lawyers or law firms is the payment of a fee for exclusive geographical advertising rights. We have not made any judgment regarding the qualifications, expertise, or credentials of any participating lawyer. <br /> <br /> The information contained on this website is not legal advice, and any information you submit to us may not be protected by attorney-client privilege. All photos on this website are of models and do not depict actual clients. All case evaluations are conducted by participating attorneys. Please note that filling out the free consultation form does not establish an attorney-client relationship. To retain a lawyer, a written retainer agreement with an attorney is necessary. Additionally, our services may not be available in all states.
                </p>
                <div className='text-[#0549a2] text-center mt-5'><a href="/terms&condition" className='underline'>Terms and Conditions</a> - <a href="/privacy-policy" className='underline'>Privacy Policy</a>
                </div>
                <p className='text-center mt-5 text-gray-600 text-xs '>Copyright © 2023 Legal Justice Claim | All rights reserved</p>
            </div>
        </div>
        </>
    )
}

export default CarAccident