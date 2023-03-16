import React from 'react';

const Represent = ({ setCurrently, setPage }) => {

  const handleChange = (e) => {
    setCurrently(e);
    setPage(2)
  };

  return (
    <div className="flex flex-col w-full " data-aos="zoom-in-right" data-aos-delay="800" data-aos-duration="800">
      <div className="mx-2 flex-1">
        <div className='text-center'>
          <h2 className='text-xl font-semibold'>Do you already have an attorney representing you for this claim? <em className='text-red-700'>*</em></h2>
          <div className='my-5'>
            <div className='text-xl'>
              <div onClick={() => handleChange("yes")} className='radio-item'>
                <input name='radio' id='radio1' type="radio" />
                <label htmlFor="radio1">Yes</label>
              </div>
              <div onClick={() => handleChange("no")} className='radio-item'>              <input name='radio' id='radio2' type="radio" />
                <label htmlFor="radio2">No</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Represent