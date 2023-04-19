import React from 'react'
import ReviewSlider from './ReviewSlider'

const RoundUpReview = () => {
  return (
    <div id='reviews'>
    <div className='sm:flex'>
        <div className='sm:flex justify-between gap-1 items-center sm:w-[2000px] mx-2'>
        <img src="https://i.ibb.co/hRcJ07v/testimonials-img-01.png" alt="" className='!sm:w-[800px] !w-auto h-auto' />
        <div className='px-2 py-2 text-center'>
            <h2 className='text-2xl font-bold'> Between Us & Our Clients</h2>
        </div>
        </div>
        <div>
            <ReviewSlider />
        </div>
    </div>
    </div>
  )
}

export default RoundUpReview