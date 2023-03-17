import React from 'react';
import { useForm } from 'react-hook-form';

const Final = ({ page, setPage, onSubmit, submitButton }) => {
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
            <div class="inline-block relative w-40">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id='state' name="state" required>
                <option value="Please select">Please select...</option>
                <option value="AK">AK</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="DC">DC</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MD">MD</option>
                <option value="MA">MA</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">MO</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NV">NV</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="Pancreatic cancer">Pancreatic cancer</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY">WY</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            {/* <div className="font-bold h-6 mt-3 text-gray-500 text-xs !leading-normal uppercase">
              State <em className='text-red-700'>*</em>
            </div> */}
            {/* <div className="bg-white my-2 p-1 flex border border-gray-400 hover:border-blue-400 rounded">
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
            </div> */}
            {/* <p>
              {errors.state?.type === 'required' && <span className="text-xs text-red-500">{errors.state.message}</span>}
              {errors.state?.type === 'maxLength' && <span className="text-xs text-red-500">{errors.state.message}</span>}
            </p> */}
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
          <input id='submitButton' className="sm:text-xl text-lg cursor-pointer rounded-lg bg-[#0d58ad] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#002f65] hover:text-white" type="submit" value="Submit" />
        </div>
      </form>
    </div>)
}
export default Final