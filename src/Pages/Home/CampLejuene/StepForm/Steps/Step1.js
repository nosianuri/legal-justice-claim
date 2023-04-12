import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";

const Step1 = ({ formData, setFormData, page, setPage }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
    
      const navigate = useNavigate();
      const handleChange = (e) => {
        if (e === "no") {
          navigate('/car-accident')
        }
        else if (e === "yes") {
          setPage(1)
        }
      };
  
  return (
    <div className="flex flex-col w-full" >
    <div className="mx-2  flex-1">
      <div className='text-center'>
        <h2 className='text-xl font-semibold'>Did you or a loved one serve, live, or work at Camp Lejeune for at least 30 days between 1953 and 1987?<em className='text-red-700'>*</em></h2>
        <div className='my-5' >
          <div className='text-xl'>
            <div onClick={() => handleChange("yes")} className='radio-item'>
              <input name='radio' id='radio1' type="radio" onChange={handleChange} />
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
  </div>
  )
}

export default Step1