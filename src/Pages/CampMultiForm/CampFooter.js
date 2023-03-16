import React from 'react'

const CampFooter = () => {
    return (
        <div className='bg-black bg-opacity-10'>
            <div className='max-w-[800px] mx-auto pb-10 pt-5 px-5'>
                {/* <div className='border-2 border-[#000] p-5 bg-white'>
                    <p className='text-xs'> <span className='font-bold'>Disclaimer:</span> By clicking the Start Survey button, I consent to being contacted by Select Justice or a law firm at the number I provided. I also consent to receiving advertisements and telemarketing messages by text message or pre-recorded call, either of which may be dialed by an autodialer. I acknowledge that my consent is not required for purchase, that standard message and data rates apply, and that clicking Start Eligibility Survey constitutes my electronic signature for my consent to being contacted and my agreement to the Terms and Conditions.</p>
                    <p className='text-xs mt-2'>
                        Submitting this form and the information contained therein does not establish an attorney client relationship. The information submitted may be reviewed by more than one attorney and/or law firm. By submitting this form, you understand any information received in response to this questionnaire is general information for which there will be no charge. You further acknowledge that the law for each state may vary, and therefore, you will not rely upon this information as legal advice. Since this matter may require advice regarding your home state, local counsel may be contacted for referral of this matter. By clicking Submit, you acknowledge that the information viewed is advertising and you agree to receive future advertisements from Select Justice, LLC and/or its partners.</p>
                </div> */}
                <div className='text-center'>
                <p className='my-10'>© 2023 Legal Justice Claim All Rights Reserved.</p>
                <p>Legal Justice Claim is not a law firm nor a legal referral service and is not qualified to give any legal advice. We advocate for those individuals who have been harmed or injured by assisting them with understanding the cause of their situation, identifying who may be responsible, and helping them take steps to pursue justice against the wrongdoers.</p>
                <div className='text-[#0549a2]  mt-5'><a href="/terms&condition" className='underline'>Terms and Conditions</a> - <a href="/privacy-policy" className='underline'>Privacy Policy</a> - <a href="/" className='underline'>Do Not Sell My Personal Information</a> - <span className='underline'>Accessibility</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CampFooter