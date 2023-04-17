import React from 'react'

const HairRelaxerHelp = () => {
  return (
    <div className='max-w-7xl mx-auto mb-5 sm:mt-16'>
    <div className='grid sm:grid-cols-2 grid-cols-1 gap-10 justify-center'>
      <div className='bg-slate-200 p-5 rounded-xl'>
        <h2 className='font-bold text-[32px] text-[#228B22]'>What's happening?</h2>
        <p className='mt-5'>Back in 1982, routine water testing at Camp Lejeune uncovered some startling findings. The drinking water sources were contaminated with a dangerous cocktail of benzene, trichloroethylene (TCE), tetrachloroethylene, or perchloroethylene (PCE), and vinyl chloride (VC). These hazardous chemicals are known to be carcinogenic and pose serious risks to human health. But get this: the contamination levels were off the charts! We're talking up to 300 times the acceptable levels in some cases! It's a wonder anyone survived drinking that toxic water. It's no wonder there are legal claims still being made today.
        </p>
      </div>
      <div className='p-5'>
        <h2 className='font-bold text-[32px] text-[#228B22]'>How we can help ?</h2>
        <p className='mt-5'>Once you submit your claim form, the real work begins! Our team of expert attorneys will evaluate your case to determine your eligibility and identify the best next steps. We'll be your advocates, fighting tooth and nail to get you the compensation you deserve for the damages you've suffered. The best part? You don't have to pay us a dime upfront! That's right, we work on a contingency basis, which means we only get paid if we recover the damage expenses you incurred. So, what are you waiting for? Let us fight for you!
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

export default HairRelaxerHelp