import React from 'react';
import './MainBody.css';

const LawsuitField = () => {
  return (
    <div className='lawsuit_filed'>
      <div className='bg-[#800020] p-3'>
        <label className='text-white text-lg py-1'>Read Testimonial</label>
        <select name="status" id="form-select" className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none font-semibold mt-3">
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
        <h3 className='uppercase lg:text-2xl text-xl bg-gray-700 text-white text-center py-1'>Compensation Available</h3>
        <div className='p-5'>
          <p><a className='hover:text-[#8bc53f]' href="/earplug">3M Earplugs</a> </p>
          <p><a className='hover:text-[#8bc53f]' href="/firefighting">Fire Fighting</a> </p>
          <p><a className='hover:text-[#8bc53f]' href="/personalinjury">Medical Malpractice</a> </p>
          <p><a className='hover:text-[#8bc53f]' href="/personalinjury">Car Accident</a> </p>
          <p><a className='hover:text-[#8bc53f]' href="/camplejeune">Camp Lejeune</a> </p>
          <p><a className='hover:text-[#8bc53f]' href="/">Mesothelioma</a> </p>
          <p><a className='hover:text-[#8bc53f]' href="/personalinjury">Motorcycle Accident</a> </p>
          <p><a className='hover:text-[#8bc53f]' href="/nec">NEC</a> </p>
          <p><a className='hover:text-[#8bc53f]' href="/zantac">Zantac</a> </p>
          <p><a className='hover:text-[#8bc53f]' href="/personalinjury">Truck Accident</a> </p>
          <p><a className='hover:text-[#8bc53f]' href="/">Talcum Powder</a> </p>
          <p><a className='hover:text-[#8bc53f]' href="/sexabuse">Sex Abuse</a> </p>
          <p><a className='hover:text-[#8bc53f]' href="/roundup">Roundup</a> </p>
          <p><a className='hover:text-[#8bc53f]' href="/personalinjury">Personal Injury</a> </p>
        </div>

      </div>
      {/* <SocialMedia /> */}
      {/* <Subscribe /> */}
      {/* <Tpost /> */}
      {/* <Category /> */}
    </div>
  )
}

export default LawsuitField;