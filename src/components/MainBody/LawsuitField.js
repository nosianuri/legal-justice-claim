import React from 'react';
import './MainBody.css';

const LawsuitField = () => {
  return (
    <div className='lawsuit_filed'>
      <div className='bg-[#003144] p-3'>
        <label className='text-white py-1'>Select Lawsuit</label>
        <select name="status" id="form-select" class="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none">
          <option value="">Select Status</option>
          <option value="in Progress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="cancelled">Cancelled</option>
          <option value="out-for-delivery">Out for delivery</option>
        </select>
      </div>
      <div className='bg-gray-200'>
        <h3 className='uppercase text-2xl bg-gray-700 text-white text-center py-1'>Lawsuits Being Filed</h3>
        <div className='p-5'>
          <p>3M Earplugs</p>
          <p>Acetaminophen Autism</p>
          <p>Allergan Breast lmplants</p>
          <p>Asbestos Lung Cancer</p>
          <p>Belviq</p>
          <p>Boy Scout Abuse</p>
          <p>California Wildfires</p>
          <p>Camp Lejeune</p>
          <p>Cartiva</p>
          <p>Clergy Abuse</p>
          <p>Car Accident</p>
          <p>Constraction Defects</p>
          <p>CPAP Machine</p>
          <p>Elmiron</p>
          <p>Exactech</p>
          <p>Firefighting Foam</p>
          <p>GM Vehicle Recall</p>
        </div>

      </div>
    </div>
  )
}

export default LawsuitField;