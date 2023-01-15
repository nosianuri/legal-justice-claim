import React from 'react';
import Category from '../Shared/Category';
import SocialMedia from '../Shared/SocialMedia';
import Subscribe from '../Shared/Subscribe';
import Tpost from '../Shared/Tpost/Tpost';
import './MainBody.css';

const LawsuitField = () => {
  return (
    <div className='lawsuit_filed'>
      <div className='bg-[#13100E] p-3'>
        <label className='text-white text-lg py-1'>Select Lawsuit</label>
        <select name="status" id="form-select" class="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none font-semibold mt-3">
          <option value="">Select a Lawsuit</option>
          <option value="earplug">3M Earplugs</option>
          <option value="caraccident">Car Accident</option>
          <option value="fire-fighting">Fire Fighting</option>
          <option value="medical-malpractice">Medical Malpractice</option>
          <option value="mesothelioma">Mesothelioma</option>
          <option value="motorcycle-accident">Motorcycle Accident</option>
          <option value="out-for-delivery">NEC</option>
          <option value="personal-injury">Personal Injury</option>
          <option value="roundup">Roundup</option>
          <option value="sex-abuse">Sex Abuse</option>
          <option value="talcum-powder">Talcum Powder</option>
          <option value="truck-accident">Truck Accident</option>
          <option value="zantac">Zantac</option>
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
      <SocialMedia />
      <Subscribe />
      <Tpost />
      <Category />
    </div>
  )
}

export default LawsuitField;