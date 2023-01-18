import React from 'react'

const ClSign = () => {
    return (
        <div className='lg:px-36 lg:mt-10'>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-16'>
                <div className='p-5'>
                    <h1 className='lg:my-8 my-4 lg:text-4xl text-2xl text-center'>SIGNS & SYMPTOMS</h1>
                    <div className='lg:w-full w-full h-[1px] bg-gray-400'></div>
                    <p className='mt-5'>For over 30 years, Marines and personnel of any branch of the armed forces and their families stationed at Camp Lejeune's main base, barracks, family, temporary housing, Tarawa Terrace, and Hadnot Point drank and bathed in water contaminated with toxins at concentrations from 240 to 3400 times levels permitted by safety standards.
                        Camp Lejeune water contamination sources included leaking underground water storage tanks and waste disposal sites. The contaminated wells were mostly closed by February 1985; however, those who had been exposed have faced cancer and other serious health problems related to the chemicals. Side effects and Health Conditions include, but are not limited to:</p>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div>
                            <ul className='terms-article'>
                                <li>Bladder Cancer</li>
                                <li>Breast Cancer</li>
                                <li>Cardiac Birth Defects</li>
                                <li>Esophageal Cancer</li>
                                <li>Esophageal Cancer</li>
                                <li>Hepatic Steatosis</li>
                                <li>Kidney Cancer</li>
                                <li>Leukemia</li>
                                <li>Liver Cancer</li>
                                <li>Lung Cancer</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='terms-article'>

                                <li>Miscarriage</li>
                                <li>Multiple Myeloma</li>
                                <li>Myelodysplastic Syndromes (MDS)</li>
                                <li>Neurobehavioral Effects</li>
                                <li>Non-Hodgkin's Lymphoma (NHL)</li>
                                <li>Parkinson's Disease</li>
                                <li>Renal Toxicity</li>
                                <li>Scleroderma</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className='shadow-xl p-5'>
                    <h1 className='lg:my-8 my-4 lg:text-4xl text-2xl text-center'>TAKE ACTION</h1>
                    <div className='lg:w-full w-full h-[1px] bg-gray-400 '></div>
                    <p className='my-5'>Most Camp Lejeune victims have previously not had access to the kind of compensation needed to take care of their and their families' injuries. The Camp Lejeune Justice Act of 2022 may now allow victims to recover significant compensation.</p>
                    <p>If you lived or worked at Camp Lejeune between 1953 and 1987 and developed cancer or another serious illness; you need to speak up! You might be eligible for financial compensation for your pain and suffering. Don’t suffer in silence. Fill out a no-cost claim review to see if you are eligible to receive compensation. – <a className='text-blue-800 hover:underline' href="#page-form">complete the free and easy claim review form today</a>.</p>
                    <div className='text-center my-10'>
                        <a href="#page-form">
                            <button className='uppercase py-3 px-5 rounded-full bg-[#BD902D] text-white text-xl'>Get Help Now!</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClSign