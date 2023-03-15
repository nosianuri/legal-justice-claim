import React from 'react';
import { useForm } from 'react-hook-form';

const Description = ({ page, setPage, setAllData, AllData }) => {

  const { register, reset, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setAllData({
      ...AllData,
      case_description: data.case_description,
    })
    setPage(page + 1);
    console.log(AllData, data, page)
  }

  return (
    <div data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="300">
      <h2 className='text-2xl font-semibold'>Case Description <em className='text-red-700'>*</em></h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=' mt-5'>
          <textarea className='border border-gray-500 rounded w-full p-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#137bb6]' id="" cols="50" rows="3" placeholder='More details about your claim' type="message"
            {...register("case_description", {
              required: {
                message: 'Case Description is required'
              },
              minLength: {
                  value: 3,
                  message: 'Must be 3 characters longer'
                }
            })}
            required />
          <p>
            {errors.case_description?.type === 'required' && <span className="text-xs text-red-500">{errors.case_description.message}</span>}
            {errors.case_description?.type === 'minLength' && <span className="text-xs text-red-500">{errors.case_description.message}</span>}
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
          <input className="sm:text-xl text-lg cursor-pointer rounded-lg bg-[#0d58ad] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#002f65] hover:text-white" type="submit" value="Continue"
          />
        </div>
      </form>
    </div>)
}
export default Description