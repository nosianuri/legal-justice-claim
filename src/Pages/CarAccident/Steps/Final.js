import React from 'react'
import { useStepperContext } from '../Context/StepperContext';
import {
  useForm,
  formProvider,
  useFormContext,
  Controller,
} from "react-hook-form";

const Final = ({ register, errors }) => {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col w-full">
      <h2 className='text-2xl font-semibold text-center'>Contact Information?  <em className='text-red-700'>*</em></h2>
      <div className='flex gap-1'>
        <div className=" mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs !leading-normal uppercase">
            City <em className='text-red-700'>*</em>
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-400 hover:border-blue-400 rounded">
            <input
              name="city"
              type="text"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              {...register("city", {
                required: {
                  value: true,
                  message: 'City Name is required'
                },

              })}
              placeholder='City' />

          </div>
          <p>
            {errors.city?.type === 'required' && <span className="text-xs text-red-500">{errors.city.message}</span>}
          </p>
        </div>
        <div className=" mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs !leading-normal uppercase">
            State <em className='text-red-700'>*</em>
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-400 hover:border-blue-400 rounded">
            <input
              name="state"
              type="text"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              {...register("state", {
                required: {
                  value: true,
                  message: 'State Name is required'
                },
                maxLength: {
                  value: 2,
                  message: 'Must be 2 characters longer'
                },
              })}
              placeholder='State' />

          </div>
          <p>
            {errors.state?.type === 'required' && <span className="text-xs text-red-500">{errors.state.message}</span>}
            {errors.state?.type === 'maxLength' && <span className="text-xs text-red-500">{errors.state.message}</span>}
          </p>
        </div>
      </div>

      <div className=" mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs !leading-normal uppercase">
          Zip Code <em className='text-red-700'>*</em>
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-400 hover:border-blue-400 rounded">
          <input
            name="zip_code"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            {...register("zip_code", {
              required: {
                value: true,
                message: 'Zip Code is required'
              },

            })}

            placeholder='ZIP Code' />
        </div>
        <p>
          {errors.zip_code?.type === 'required' && <span className="text-xs text-red-500">{errors.zip_code.message}</span>}
        </p>
      </div>
    </div>
  )
}

export default Final