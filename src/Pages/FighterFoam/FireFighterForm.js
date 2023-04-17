import React from 'react'
import StepForm from '../Home/CampLejuene/StepForm/StepForm'

const FireFighterForm = () => {
  return (
    <div className='my-10 max-w-7xl mx-auto form_box rounded-2xl' id='get-claim'>
    <div className=' text-center py-5  sm:mx-0 mx-2'>
        <h2 className='font-bold text-3xl text-[#800020] uppercase'>SEE IF YOU ARE ELIGIBLE FOR Firefighting Foam CLAIM</h2>
        <h4 className='font-medium text-2xl'>Please complete the form below to check you or your <br /> <span className='font-bold'>loved one's eligibility for Toxic Water compensation.</span></h4>
       <StepForm />
       <div className='w-[850px] mx-auto'>
       <p className='mt-3 text-[13px] text-justify'>We, the Legal Justice Claim Website, do not operate as a law firm and do not provide legal advice. Our services are free of charge and aim to connect you with third-party law firms to discuss your legal claims. We do not endorse or recommend any of the law firms participating in our network. By clicking "Do I Qualify?", you acknowledge and agree to the Terms of Service and Privacy Policy of our website. You also provide express written consent via electronic signature, authorizing Legal Justice Claim Website, along with one or more law firms, their agents, and marketing partners, to contact you regarding your case and other related legal products and services. This includes contacting you via calls, text messages, pre-recorded messages, and artificial voice messages using an autodialer system, even if your telephone number is currently listed on any state, federal, or corporate "Do Not Call" list. We understand that your consent is not a condition of purchasing any goods or services, and standard message and data rates may apply. For California residents, please refer to our separate notice.
        </p>
       </div>
        </div>
    </div>
  )
}

export default FireFighterForm