import React from 'react'

const MvaHead = () => {
  return (
    <div>
      <div className='bg-[#800020]'>
        <h2 className='text-[28px] lg:text-[32px] md:text-[40px] text-white sm:mt-0 text-center py-5 font-primary italic mt-0 font-bold'>MVA Lawsuits are now being filed!
        </h2>
      </div>
      <div className="  bg-no-repeat !bg-cover" style={{
        background: `url(https://i.ibb.co/LJ9SHbz/mva-board.png)`
      }}>
        <div className='bg-black bg-opacity-60'>
          <div className='container mx-auto lg:min-h-[320px]  min-h-[200px] flex justify-center items-center'>
            <div className='text-center flex flex-col'>
              <div
                className='font-primary italic lg:font-bold mb-1 lg:px-36 md:px-8 lg:mx-36  px-5'>
                <h2 className='text-[38px] lg:text-[58px] md:text-[40px] font-bold text-white '>Legal Justice Claim
                </h2>
                <h4 className='text-[20px] lg:text-[32px] md:text-[25px] text-white mt-2'>Recent study Personal Injury claims earn an average $24,000 in compensation <em className='text-red-700'>*</em>
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

export default MvaHead