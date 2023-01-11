import React from 'react';
import './MainBody.css';

const LawsuitField = () => {
  return (
    <div className='lawsuit_filed'>
      <div className='bg-[#13100E] p-3'>
        <label className='text-white text-lg py-1'>Select Lawsuit</label>
        <select name="status" id="form-select" class="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none font-semibold">
          <option value="">Select Status</option>
          <option value="in Progress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="cancelled">Cancelled</option>
          <option value="out-for-delivery">Out for delivery</option>
        </select>
      </div>
      <div className='mt-4 bg-gray-200'>
        <h3 className='uppercase text-2xl bg-gray-700 text-white text-center py-1'>Lawsuits Being Filed</h3>
        <div className='p-5'>
          <p><a className='hover:text-[#BD902D]' href="/earplug">3M Earplugs</a> </p>
          <p><a className='hover:text-[#BD902D]' href="/firefighting">Fire Fighting</a> </p>
          <p><a className='hover:text-[#BD902D]' href="/medicalmalpractice">Medical Malpractice</a> </p>
          <p><a className='hover:text-[#BD902D]' href="/caraccident">Car Accident</a> </p>
          <p><a className='hover:text-[#BD902D]' href="/mesothelioma">Mesothelioma</a> </p>
          <p><a className='hover:text-[#BD902D]' href="/motorcycleaccident">Motorcycle Accident</a> </p>
          <p><a className='hover:text-[#BD902D]' href="/nec">NEC</a> </p>
          <p><a className='hover:text-[#BD902D]' href="/zantac">Zantac</a> </p>
          <p><a className='hover:text-[#BD902D]' href="/truckaccident">Truck Accident</a> </p>
          <p><a className='hover:text-[#BD902D]' href="/talcumpowder">Talcum Powder</a> </p>
          <p><a className='hover:text-[#BD902D]' href="/sexabuse">Sex Abuse</a> </p>
          <p><a className='hover:text-[#BD902D]' href="/roundup">Roundup</a> </p>
          <p><a className='hover:text-[#BD902D]' href="/personalinjury">Personal Injury</a> </p>
        </div>

      </div>
    </div>
  )
}

export default LawsuitField;