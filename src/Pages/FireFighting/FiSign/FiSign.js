import React from 'react'

const FiSign = () => {
    return (
        <div className='lg:px-36 lg:mt-10'>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-16'>
                <div className='p-5'>
                    <h1 className='lg:my-8 my-4 lg:text-4xl text-2xl text-center'>SIGNS & SYMPTOMS</h1>
                    <div className='lg:w-full w-full h-[1px] bg-gray-400'></div>
                    <p className='mt-5'>Unfortunately, men and women who perform military duty as firefighters in the United States are at serious risk of being harmed by this cancer-causing foam. Symptoms and side effects resulting from exposure to the allegedly toxic chemicals in firefighting foam include, but are not limited to:</p>
                    <ul className='terms-article'>
                        <li>Bladder Cancer</li>
                        <li>Infertility</li>
                        <li>Kidney Cancer</li>
                        <li>Kidney Damage</li>
                        <li>Leukemia</li>
                        <li>Lymphoma</li>
                        <li>Pancreatic Cancer</li>
                        <li>Prostate Cancer</li>
                        <li>Skin Cancer</li>
                        <li>Testicular Cancer</li>
                        <li>Other Cancers</li>
                    </ul>
                    
                </div>
                <div className='shadow-xl p-5'>
                    <h1 className='lg:my-8 my-4 lg:text-4xl text-2xl text-center'>TAKE ACTION</h1>
                    <div className='lg:w-full w-full h-[1px] bg-gray-400 '></div>
                    <p className='my-5'>Today, the companies that produced firefighting foams with PFAS are coming under legal and medical scrutiny. 3M, the manufacturer credited with first producing this firefighting foam, was aware the foam was dangerous for more than 40 years and did nothing. The company had records showing the dangers PFAS presented to people & the environment dating back to 1970. However, they hid this information from the public. Furthermore, when 3M sold the chemicals to DuPont, they included the label "Cancer Warning: Contains a chemical which can cause cancer."</p>
                    <p>If you or a loved one have developed cancer after being exposed to Firefighting Foam (AFFF); you need to speak up! You might be eligible for financial compensation for your pain and suffering. Don’t suffer in silence. Fill out a no-cost claim review to see if you are eligible to receive compensation. – . <a className='text-blue-800 hover:underline' href="/">complete the free and easy claim review form today</a>.</p>
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

export default FiSign;