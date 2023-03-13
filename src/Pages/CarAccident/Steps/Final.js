import React from 'react'
import { useStepperContext } from '../Context/StepperContext';

const Final = () => {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col w-full">
    <h2 className='text-2xl font-semibold text-center'>Contact Information?  <em className='text-red-700'>*</em></h2>
      
      <div className=" mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs !leading-normal uppercase">
          City <em className='text-red-700'>*</em>
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-400 hover:border-blue-400 rounded">
          <input
            onChange={handleChange}
            value={userData["exp"] || ""}
            name="exp"
            placeholder="City"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className=" mx-2 flex-1">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs !leading-normal uppercase">
        State <em className='text-red-700'>*</em>
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-400 hover:border-blue-400 rounded">
        <input
          onChange={handleChange}
          value={userData["city"] || ""}
          name="city"
          placeholder="State"
          type="text"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
        />
      </div>
    </div>
    <div className=" mx-2 flex-1">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs !leading-normal uppercase">
        Zip Code <em className='text-red-700'>*</em>
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-400 hover:border-blue-400 rounded">
        <input
          onChange={handleChange}
          value={userData["city"] || ""}
          name="city"
          placeholder="Zip Code"
          type="text"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
        />
      </div>
    </div>
    </div>
  )
}

export default Final