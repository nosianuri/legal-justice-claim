import React from 'react';

const Fault = ({ setPage, setFault }) => {

  const handleChange = (e) => {
    setFault(e);
    setPage(3)
  };
  return (
    <div className="flex flex-col w-full" data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="300">
      <div className="mx-2  flex-1">
        <div className='text-center'>
          <h2 className='text-2xl font-semibold'>Was the accident your fault? <em className='text-red-700'>*</em></h2>
          <div className='my-5'>
            <div className='text-xl'>
              <div onClick={() => handleChange("yes")} className='radio-item'>
                <input name='radio' id='radio1' type="radio" />
                <label htmlFor="radio1">Yes</label>
              </div>
              <div onClick={() => handleChange("no")} className='radio-item'>
                <input name='radio' id='radio2' type="radio" />
                <label htmlFor="radio2">No</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}
export default Fault