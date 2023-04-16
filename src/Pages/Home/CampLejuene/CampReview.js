import React from 'react'
import ReviewSlider from './ReviewSlider'

const CampReview = () => {
  return (
    <div>
    <div className='sm:flex'>
        <div className='sm:flex justify-between gap-1 items-center sm:w-[2000px]'>
        <img src="https://i.ibb.co/hRcJ07v/testimonials-img-01.png" alt="" className='!sm:w-[800px] !w-auto h-auto' />
        <div className='px-2 py-2 text-center'>
            <h2 className='text-2xl font-bold'> Between Us and Our Customers</h2>
        </div>
        </div>
        <div>
            <ReviewSlider />
        </div>
    </div>
        
    </div>
  )
}

export default CampReview