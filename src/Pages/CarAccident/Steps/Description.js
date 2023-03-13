import React from 'react'

const Description = () => {
  return (
    <div>
    <h2 className='text-2xl font-semibold'>Case Description <em className='text-red-700'>*</em></h2>
      <div className=' mt-5'>
                        <textarea className='border border-gray-700 rounded w-full p-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D]' id="" cols="50" rows="3" placeholder='More details about your claim' type="message"
                            
                            required />
                        {/* <p>
                            {errors.case_description?.type === 'required' && <span className="text-xs text-red-500">{errors.case_description.message}</span>}
                        </p> */}
                    </div>
    </div>
  )
}

export default Description