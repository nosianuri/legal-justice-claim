import React from 'react'
import ReviewSlider from './ReviewSlider'

const CampReview = () => {
  return (
    <div>
    <div className='flex'>
        <div className='flex justify-between gap-5 items-center w-[1500px]'>
        <img src="https://i.ibb.co/hRcJ07v/testimonials-img-01.png" alt="" />
        <div>
            <h2 className='text-2xl font-bold'>Legal Justice Claim Between Us and Our Customers</h2>
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