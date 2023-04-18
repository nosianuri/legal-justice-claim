import React from 'react'

const RoundUpHelp = () => {
  return (
    <div className='max-w-7xl mx-auto mb-5 sm:mt-16'>
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-10 justify-center'>
        <div className='bg-slate-200 p-5 rounded-xl'>
          <h2 className='font-bold text-[32px] text-[#228B22]'>What's happening?</h2>
          <p className='mt-5 text-[18px] text-justify'>Monsanto has settled over 100,000 Roundup lawsuits, paying out about $11 billion as of May 2022. The recent Roundup settlement will pay as much as $9.6 billion to resolve victims involved in current litigation and set aside $1.25 billion to pay future claims as part of separate class-action lawsuits. The average Roundup lawsuit payout for Round One settlements was in the $120,000 to $180,000 per person range.</p>
          <p className='mt-2 text-justify text-[18px]'>Monsanto, a well-known agricultural company, has been at the center of controversy over its Roundup weed killer for years. In recent times, the company has faced a flood of lawsuits from individuals claiming that the product caused them to develop cancer. Despite denying these allegations, Monsanto has settled over 100,000 Roundup lawsuits, shelling out a staggering $11 billion as of May 2022. </p>
          <p className='mt-2 text-justify text-[18px]'>The latest Roundup settlement is expected to pay out as much as $9.6 billion to victims currently involved in ongoing litigation, with an additional $1.25 billion set aside for future class-action lawsuits. This move is a significant step towards resolving the controversy surrounding the product and compensating those who have suffered as a result of its use.</p>
          <p className='mt-2 text-justify text-[18px]'>If you or someone you know has been affected by Roundup exposure, this news may be of interest to you. The average payout for Round One settlements ranged from $120,000 to $180,000 per person, making it a substantial sum of money that can help cover medical expenses, lost wages, and other damages resulting from the use of this harmful product.</p>
          <p className='mt-2 text-justify text-[18px]'>It's important to note that the recent settlement is not an admission of guilt by Monsanto, but rather a means to provide compensation to those who have been impacted. If you believe you have a case against Monsanto and wish to pursue legal action, now is the time to act. Don't wait until it's too late to seek justice.
          </p>
          <p className='mt-2 text-justify text-[18px]'>In conclusion, Monsanto's settlement over the Roundup controversy is a significant development in the ongoing fight for justice for those affected by the product. If you or someone you know has been impacted by Roundup exposure, seek legal help today and join the many others who have already received compensation for their suffering.</p>
          <div className='sm:hidden block'>
            <a href="#get-claim">
              <div className='bg-[#228B22] sm:text-[25px] text-white text-center sm:w-2/4 w-3/4 mx-auto py-2 px-4 rounded-full cursor-pointer mt-2'>Free Claim Review </div>
            </a>
          </div>
        </div>
        <div className='p-5'>
          <h2 className='font-bold text-[32px] text-[#228B22]'>How we can help ?</h2>
          <p className='mt-5 text-justify text-[18px]'>Once you submit your claim form, the real work begins! Our team of expert attorneys will evaluate your case to determine your eligibility and identify the best next steps. We'll be your advocates, fighting tooth and nail to get you the compensation you deserve for the damages you've suffered. The best part? You don't have to pay us a dime upfront! That's right, we work on a contingency basis, which means we only get paid if we recover the damage expenses you incurred. So, what are you waiting for? Let us fight for you!
          </p>
          
        </div>
      </div>
      <div className='mt-16'>
        <h2 className='font-bold text-[35px] text-center'>Complete the <span className='text-[#228B22]'>online form</span> above for a FREE <br />claim evaluation.</h2>
        <a href="#get-claim">
          <div className='bg-[#228B22] sm:text-[25px] text-white text-center sm:w-2/4 w-3/4 mx-auto py-2 px-4 rounded-full cursor-pointer mt-2'>Time is Limited. Get Started Today. </div>
        </a>
      </div>
    </div>
  )
}

export default RoundUpHelp