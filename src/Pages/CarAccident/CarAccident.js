import React from 'react'
import './CarAccident.css'
import StepFormBody from './StepFormBody'

const CarAccident = () => {
    return (
        <div className='body sg-body'>
            <div className='p-5 bg-[#273c5d]'>
                <div className='flex gap-3 items-center cac-gamified-header-logo'>
                    <img src="https://i.ibb.co/ZcRnXkX/Asset-1-320x-8.png" alt="" className='w-10' />
                    <p className='font-bold text-white text-xl '>Car Accident Counsel</p>
                </div>
            </div>

            <div id='headline' className='max-w-[700px] mx-auto text-white sm:text-3xl text-xl my-10 !leading-normal text-center px-2'>
                <h1>Receive <span>Maximum Accident Injury Payout</span> with the Help of Trusted Personal Injury Lawyers</h1>
                <p className='sm:text-xl text-lg my-5'>Take this quick assessment to get a <span className='text-[#FF670F]'>FREE CASE CONSULTATION </span> and <span className='text-[#FF670F]'>know how much is owed to you</span>
                </p>
                <StepFormBody />
                <div className='cac-badges'>
                    <p>FREE No Obligation Consultation Pay Nothing!</p>
                    <span>Our Expert Lawyers Have Been Rated 5-stars</span>
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
                <p> <br /> This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. <br />
                This site is not a part of the YouTube website or Google, LLC. Additionally, This site is NOT endorsed by Google in any way. YouTube is a trademark of Google, LLC. <br /> <br /> PAID ATTORNEY ADVERTISEMENT: This Web site is a group advertisement. It is not a lawyer referral service or prepaid legal services plan. This website is not a law firm. The sole basis for the inclusion of the participating lawyers or law firms is the payment of a fee for exclusive geographical advertising rights. Our company does not endorse or recommend any lawyer or law firm who participates in the network. It does not make any representation and has not made any judgment as to the qualifications, expertise or credentials of any participating lawyer. The information contained herein is not legal advice. Any information you submit to this website may not be protected by attorney-client privilege. All photos are of models and do not depict clients. All case evaluations are performed by participating attorneys. This website is for informational purposes only. By filling out the free consultation form, you are NOT forming an attorney-client relationship. You can only retain a lawyer by entering into a written retainer agreement with an attorney. Our services may not be available in all states.
                </p>
                <p className='text-center mt-5 text-gray-600 text-xs'>Copyright © 2023 Car Accident Counsel | All rights reserved</p>
            </div>
        </div>
    )
}

export default CarAccident