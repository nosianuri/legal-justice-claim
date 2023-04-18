import React from 'react'

const MvaHelp = () => {
  return (
    <div className='max-w-7xl mx-auto mb-5 sm:mt-16'>
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-10 justify-center'>
        <div className='bg-slate-200 p-5 rounded-xl'>
          <h2 className='font-bold text-[32px] text-[#228B22]'>What's happening?</h2>
          <p className='mt-5 text-justify text-[18px]'>The Insurance Information Institute reports that the typical car accident settlement amount for bodily injury was $15,785 and the average compensation for property damage was $3,841 in 20181. Forbes also reports that the median amount awarded in auto accident cases was $16,000
          </p>
          <p className='mt-2 text-justify text-[18px]'>Car accidents are unfortunately all too common on our roads, and the aftermath can be both physically and financially devastating. If you've been involved in a car accident, you may be wondering what kind of settlement you can expect to receive. According to the Insurance Information Institute, the typical car accident settlement amount for bodily injury was $15,785, with an average compensation of $3,841 for property damage in 2018.</p>
          <p className='mt-2 text-justify text-[18px]'>But that's not all - Forbes reports that the median amount awarded in auto accident cases was $16,000. This means that, on average, car accident victims are receiving significant compensation for their injuries and property damage.</p>
          <p className='mt-2 text-justify text-[18px]'>However, it's important to note that every case is unique, and settlement amounts can vary widely depending on the circumstances of the accident. Factors such as the severity of the injuries, the extent of property damage, and the insurance policies involved can all play a role in determining the final settlement amount.</p>
          <p className='mt-2 text-justify text-[18px]'>If you've been in a car accident, it's essential to seek legal help to ensure that you receive the compensation you deserve. Experienced attorneys can help you navigate the complex legal process and negotiate with insurance companies to get the best possible outcome for your case.</p>
          <p className='mt-2 text-justify text-[18px]'>In conclusion, the average car accident settlement amounts for bodily injury and property damage are significant, with many victims receiving compensation in the tens of thousands of dollars. However, every case is unique, and it's essential to seek legal help to ensure that you receive the full compensation you deserve. Don't let a car accident derail your life - take action today and get the justice you deserve.</p>
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

export default MvaHelp