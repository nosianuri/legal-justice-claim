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
    <h2 className='text-2xl font-semibold text-center'>Personal Information? *</h2>
      <div className=" mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs !leading-normal uppercase">
          Email
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["card"] || ""}
            name="card"
            placeholder="Email"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className=" mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs !leading-normal uppercase">
          Phone Number
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["exp"] || ""}
            name="exp"
            placeholder="Phone Number"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  )
}

export default Final