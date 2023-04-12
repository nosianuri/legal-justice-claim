import React from 'react'

const CampHead = () => {
    return (
        <div>
        <div className='bg-[#800020]'>
        <h2 className='text-[28px] lg:text-[32px] md:text-[40px] text-white sm:mt-32 text-center py-5 font-primary italic mt-20'>Camp Lejeuune Water Contamination Lawsuits are now being filed!
                            </h2>
        </div>
        <div className="  bg-no-repeat !bg-cover" style={{
            background: `url(https://i.ibb.co/J2Vss0f/camp-lejeune.jpg)`
        }}>
            <div className='bg-black bg-opacity-60'>
                <div className='container mx-auto lg:min-h-[320px]  min-h-[200px] flex justify-center items-center'>
                    <div className='text-center flex flex-col'>
                        <div
                            className='font-primary italic lg:font-bold mb-1 lg:px-36 md:px-8 lg:mx-36  px-5'>
                           
                            <h4 className='text-[20px] lg:text-[32px] md:text-[25px] text-white mt-2'>Camp Lejeune Justice Act Passes U.S. Senate as Part of PACT Act as of August 10th, 2022 <em className='text-red-700'>*</em>
                            </h4>
                            <div className=' mx-auto'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CampHead