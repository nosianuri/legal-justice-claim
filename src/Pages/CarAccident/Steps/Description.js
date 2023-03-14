import React from 'react'
import {
  useForm,
  formProvider,
  useFormContext,
  Controller,
} from "react-hook-form";

const Description = ({ register, errors }) => {
  return (
    <div>
      <h2 className='text-2xl font-semibold'>Case Description <em className='text-red-700'>*</em></h2>
      <div className=' mt-5'>
        <textarea className='border border-gray-500 rounded w-full p-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#d7d9db]' id="" cols="50" rows="3" placeholder='More details about your claim' type="message"
          {...register("case_description", {
            required: {
              value: true,
              message: 'Case Description is required'
            },
            minLength: {
                  value: 20,
                  message: 'Must be 20 characters longer'
                }
          })}
          required />
        <p>
          {errors.case_description?.type === 'required' && <span className="text-xs text-red-500">{errors.case_description.message}</span>}
          {errors.case_description?.type === 'minLength' && <span className="text-xs text-red-500">{errors.case_description.message}</span>}
        </p>
      </div>
    </div>
  )
}

export default Description