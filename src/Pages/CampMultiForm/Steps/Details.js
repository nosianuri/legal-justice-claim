import React from 'react';
import { useForm } from 'react-hook-form';

const Details = ({ page, setPage, setAllData, AllData }) => {
  const { register, reset, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setAllData({
      ...AllData,
      first_name: data.first_name,
      last_name: data.last_name,
      phone: data.phone,
      email: data.email,
    })
    setPage(page + 1);
    console.log(AllData, data, page)
  }

  return (
    <div className="flex flex-col w-full" data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="300">
      <h2 className='text-2xl font-semibold text-center'>Personal Information?  <em className='text-red-700'>*</em></h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex gap-1'>
          <div className=" mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs !leading-normal uppercase">
              First Name <em className='text-red-700'>*</em>
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-400 hover:border-blue-400 rounded">                <input name="first_name" className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              {...register("first_name", {
                required: {
                  value: true,
                  message: 'First Name is required'
                },
                minLength: {
                  value: 3,
                  message: 'Must be 3 characters longer'
                }
              })}
              placeholder='First Name' />
            </div>
            <p>
              {errors.first_name?.type === 'required' && <span className="text-xs text-red-500">{errors.first_name.message}</span>}
              {errors.first_name?.type === 'minLength' && <span className="text-xs text-red-500">{errors.first_name.message}</span>}
            </p>
          </div>
          <div className=" mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs !leading-normal uppercase">
              Last Name<em className='text-red-700'>*</em>              </div>
            <div className="bg-white my-2 p-1 flex border border-gray-400 hover:border-blue-400 rounded">                <input name="last_name" type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800"                  {...register("last_name", {
              required: {
                value: true,
                message: 'Last Name is required'
              },
              minLength: {
                value: 3,
                message: 'Must be 3 characters longer'
              }
            })}
              placeholder='Last Name' />
            </div>
            <p>
              {errors.last_name?.type === 'required' && <span className="text-xs text-red-500">{errors.last_name.message}</span>}
              {errors.last_name?.type === 'minLength' && <span className="text-xs text-red-500">{errors.last_name.message}</span>}
            </p>
          </div>
        </div>
        <div className='flex gap-1'>
          <div className=" mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs !leading-normal uppercase">                Email<em className='text-red-700'>*</em>              </div>
            <div className="bg-white my-2 p-1 flex border border-gray-400 hover:border-blue-400 rounded">
              <input name="email" className="p-1 px-2 appearance-none outline-none w-full text-gray-800"                  {...register("email", {
                required: {
                  value: true,
                  message: 'Email is required'
                },
              })}
                placeholder='Email' />
            </div>
            <p>
              {errors.email?.type === 'required' && <span className="text-xs text-red-500">{errors.email.message}</span>}
            </p>
          </div>
          <div className=" mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs !leading-normal uppercase">
              Phone Number<em className='text-red-700'>*</em>
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-400 hover:border-blue-400 rounded">                <input name="phone" type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800"                  {...register("phone", {
              required: {
                value: true,
                message: 'Phone Number is required'
              },
              maxLength: {
                value: 10,
                message: 'Must be 10 characters longer'
              },
              minLength: {
                value: 10,
                message: 'Must be 10 characters longer'
              }
            })}
              placeholder='Phone' />
            </div>
            <p>
              {errors.phone?.type === 'required' && <span className="text-xs text-red-500">{errors.phone.message}</span>}
              {errors.phone?.type === 'maxLength' && <span className="text-xs text-red-500">{errors.phone.message}</span>}
              {errors.phone?.type === 'minLength' && <span className="text-xs text-red-500">{errors.phone.message}</span>}
            </p>
          </div>
        </div>
        <div className="footer mt-5">
          <button className="sm:text-xl text-lg cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-[#002f65] hover:text-white" disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Back
          </button>
          <input className="sm:text-xl text-lg cursor-pointer rounded-lg bg-[#0d58ad] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#002f65] hover:text-white" type="submit" value="Continue" />
        </div>
      </form>
    </div>
    )
}
export default Details