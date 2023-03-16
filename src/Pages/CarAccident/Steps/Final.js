import React from 'react';
import { useForm } from 'react-hook-form';

const Final = ({ page, setPage, onSubmit }) => {
  const { register, reset, formState: { errors }, handleSubmit } = useForm();

  return (
    <div className="flex flex-col w-full" data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="300">
      <h2 className='text-2xl font-semibold text-center'>Contact Information?  <em className='text-red-700'>*</em></h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex gap-1'>
          <div className=" mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs !leading-normal uppercase">              City <em className='text-red-700'>*</em>
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-400 hover:border-blue-400 rounded">
              <input name="city" type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800"         
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
              <input name="state" type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
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
            <input name="zip_code" type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              {...register("zip_code", {
                required: {
                  value: true,
                  message: 'Zip Code is required'
                },
                maxLength: {
                  value: 5,
                  message: 'Must be 5 characters longer'
                },
                minLength: {
                  value: 5,
                  message: 'Must be 5 characters longer'
                }
              })}
              placeholder='ZIP Code' />
          </div>
          <p>
            {errors.zip_code?.type === 'required' && <span className="text-xs text-red-500">{errors.zip_code.message}</span>}
            {errors.zip_code?.type === 'maxLength' && <span className="text-xs text-red-500">{errors.zip_code.message}</span>}
            {errors.zip_code?.type === 'minLength' && <span className="text-xs text-red-500">{errors.zip_code.message}</span>}
          </p>
          
        </div>
        <div className="footer mt-5">
          <button className="sm:text-xl text-lg cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-[#002f65] hover:text-white" disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Back
          </button>
          <input className="sm:text-xl text-lg cursor-pointer rounded-lg bg-[#0d58ad] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#002f65] hover:text-white" type="submit" value="Submit" />
        </div>
      </form>
    </div>)
}
export default Final