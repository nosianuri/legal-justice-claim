import React from 'react'

const ESign = () => {
    return (
        <div className='lg:px-36 lg:mt-10'>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-16'>
                <div className='p-5'>
                    <h1 className='lg:my-8 my-4 lg:text-4xl text-2xl text-center'>SIGNS & SYMPTOMS</h1>
                    <div className='lg:w-full w-full h-[1px] bg-gray-400'></div>
                    <p className='mt-5'>Some military service members may have suffered serious hearing damage when the 3M earplugs they depended on loosened and exposed them to dangerous sound levels. The dual-ended ear plugs were too short to be properly inserted into users’ ears. When the ear plugs are not firmly in place, it can lead to hearing loss or tinnitus. According to the Department of Defense, symptoms of combat-related hearing problems include:</p>
                    <ul>
                        <li>Difficulty hearing someone talking three feet away</li>
                        <li>Difficulty understanding what people are saying</li>
                        <li>Buzzing or ringing in the ears</li>
                        <li>A feeling of “fullness” in the ears after leaving a noisy area, such as a concert venue</li>
                    </ul>
                    <p className='my-5'>Tinnitus and hearing loss can also affect more than someone’s hearing. In fact, 58% of military veterans who had tinnitus were also diagnosed with anxiety and depression.</p>
                </div>
                <div className='shadow-xl p-5'>
                    <h1 className='lg:my-8 my-4 lg:text-4xl text-2xl text-center'>TAKE ACTION</h1>
                    <div className='lg:w-full w-full h-[1px] bg-gray-400 '></div>
                    <p className='my-5'>In July 2018, 3M paid $9.1 million to resolve Department of Defense allegations that the company sold dangerous and defective Combat Arms Earplugs ™ (CAEv2) to the military for more than a decade without warning they were defective. Although that case has been resolved, all claims within the settlement were allegations only, and there was no determination of liability, according to the Department of Justice.</p>
                    <p>If you or a loved one have been diagnosed with, or are suffering from, hearing loss or tinnitus after serving in the military between 2003 and 2015 and wearing defective earplugs; you need to speak up! You might be eligible for financial compensation for your pain and suffering. Don’t suffer in silence. Fill out a no-cost claim review to see if you are eligible to receive compensation. – <a className='text-blue-800 hover:underline' href="/">complete the free and easy claim review form today</a>.</p>
                    <div className='text-center my-10'>
                        <a href="/">
                            <button className='uppercase py-3 px-5 rounded-full bg-[#BD902D] text-white text-xl'>Get Help Now!</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ESign