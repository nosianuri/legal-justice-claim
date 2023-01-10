import React from 'react'

const RoundUpProduct = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-16'>
            <div>
                <h2 className='text-[26px] font-semibold'>Talcum Powder linked to Ovarian Cancer</h2>
                <div className='lg:w-full w-full h-[1px] bg-gray-700'></div>
                <h5 className='font-bold'>Johnson & Johnson® to stop selling Talc baby powder in U.S. as of May 19th, 2020</h5>
                <p>Numerous studies have been conducted and most published medical studies have indicated that the use of talc-based powders is associated with a 33-percent increased risk of developing Ovarian Cancer. <span className='font-bold underline text-blue-800'>Read More »</span></p>
                <div className='my-5'>
                    <button className='bg-red-800 hover:bg-[#003144] text-white px-3 py-1 font-semibold rounded'>Free Claim Review »</button>
                </div>
            </div>
            <div>
                <h2 className='text-[26px] font-semibold'>Zantac Lawsuits are being filed</h2>
                <div className='lg:w-full w-full h-[1px] bg-gray-700'></div>
                <h5 className='font-bold'>FDA calls for heartburn drug Zantac to be pulled from market immediately, April 1, 2020</h5>
                <p>In September 2019, Valisure, an online pharmacy based in Connecticut, informed the U.S. Food and Drug Administration that it had found the cancer-causing chemical NDMA in some batches of Zantac® (ranitidine)… <span className='font-bold underline text-blue-800'>Read More »</span></p>
                <div className='my-5'>
                    <button className='bg-red-800 hover:bg-[#003144] px-3 text-white py-1 font-semibold rounded'>Free Claim Review »</button>
                </div>
            </div>
        </div>
    )
}

export default RoundUpProduct