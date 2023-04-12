import React from 'react'

const CampHead = () => {
    return (
        <div className="  bg-no-repeat !bg-cover" style={{
            background: `url(https://i.ibb.co/J2Vss0f/camp-lejeune.jpg)`
        }}>
            <div className='bg-black bg-opacity-60'>
                <div className='container mx-auto lg:min-h-[580px]  min-h-[490px] flex justify-center items-center'>
                    <div className='text-center flex flex-col sm:mt-16'>
                        <div
                            className='font-primary italic lg:font-bold mb-1 lg:px-36 md:px-8 lg:mx-36 pt-16 px-5'>
                            <h2 className='text-[38px] lg:text-[58px] md:text-[40px] text-white'>Camp Lejeuune Water Contamination Lawsuits are now being filed!
                            </h2>
                            <h4 className='text-[20px] lg:text-[32px] md:text-[25px] text-[#228B22]'>Camp Lejeune Justice Act Passes U.S. Senate as Part of PACT Act as of August 10th, 2022 <em className='text-red-700'>*</em>
                            </h4>
                            <div className=' mx-auto'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CampHead