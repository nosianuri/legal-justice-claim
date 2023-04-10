import React from 'react';
import { useForm } from "react-hook-form";
import { useStepperContext } from '../Contexts/StepperContext';

const Account = () => {
  const { userData, setUserData } = useStepperContext();
  // handle events
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // handle submit events
  const onSubmit = data => alert(JSON.stringify(data));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='text-center'>
            <h2 className='text-2xl font-semibold'>Did you or a loved one serve, live, or work at Camp Lejeune for at least 30 days between 1953 and 1987? *</h2>
            <div className='my-5'>
              <div className="inline-block relative lg:w-96 w-40">
                <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name="camp_lj" id="cpform"  >
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
                    <input id='camplejeuneYes' name='camplejeuneYes' value="Yes" type="radio" required />
                    <label htmlFor="camplejeuneYes">Yes</label>
                </li>
                <li>
                    <input id='camplejeuneNo' name='camplejeuneNo' value="No" type="radio" />
                    <label htmlFor="camplejeuneYes">No</label>
                </li>
               </ul> */}

          </div>
        </form>
      </div>
    </div>
  )
}


export default Account