import React from 'react'
import {
  useForm,
  formProvider,
  useFormContext,
  Controller,
} from "react-hook-form";

const Description = ({ register, errors, page, setPage, }) => {
  const handlePage = () => {
    setPage(page + 1);
}
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
      <div className="footer mt-5">
                            {(page > 2) && <button className="sm:text-xl text-lg cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-[#002f65] hover:text-white"
                                onClick={() => {
                                    setPage((currPage) => currPage - 1);
                                }}
                            >
                                Back
                            </button>}
                            {(page === 6) && <input className="sm:text-xl text-lg cursor-pointer rounded-lg bg-[#0d58ad] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#002f65] hover:text-white" type="submit"
                                value="Submit"
                            />}
                            {(page == 3) && <button onClick={handlePage} className="sm:text-xl text-lg cursor-pointer rounded-lg bg-[#0d58ad] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#002f65] hover:text-white"> Continue </button>
                            }
                            {(page > 3 && page < 6) && <input onClick={handlePage} className="sm:text-xl text-lg cursor-pointer rounded-lg bg-[#0d58ad] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#002f65] hover:text-white" type="submit"
                                value="Continue"
                            />}
                        </div>
    </div>
  )
}

export default Description