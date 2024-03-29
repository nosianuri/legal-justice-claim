import React from 'react'
import { useStepperContext } from '../Contexts/StepperContext';

const Claim = () => {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className='text-center'>
          <h2 className='text-2xl font-semibold'>Do you already have an attorney representing you for this claim? *</h2>
          <div className='my-5'>
            <div className="inline-block relative w-40">
              <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name="representation" required>
                <option value="" selected>Please select...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
          {/* <ul className='my-3'>
                <li>
                    <input id='camplejeuneYes' name='camplejeuneYes' value="Yes" type="radio" />
                    <label htmlFor="camplejeuneYes">Yes</label>
                </li>
                <li>
                    <input id='camplejeuneNo' name='camplejeuneNo' value="No" type="radio" />
                    <label htmlFor="camplejeuneYes">No</label>
                </li>
               </ul> */}
        </div>
      </div>
    </div>
  )
}

export default Claim