import React from 'react'
import './Banner.css';
import SlidingTextAnimation from '../SlidingTextAnimation';
import NavigationMenu from '../Navbar/NavigationMenu';

const Banner = () => {

  return (
    <section style={{
      background: `url(https://i.ibb.co/HCpcch9/legal1.png)`
    }} className=' bg-hero !bg-cover '>
      {/* header */}
      <div className='bg-black bg-opacity-40'>
        {/* <NavigationMenu /> */}
        <div className='container mx-auto lg:min-h-[580px]  min-h-[490px] flex justify-center items-center'>
          {/* text */}
          <div className='text-center flex flex-col sm:mt-16'>
            <div
              className='font-primary italic lg:font-bold mb-1 lg:px-36 md:px-8 lg:mx-36 pt-16 px-5'>
              <h2 className='text-[38px] lg:text-[58px] md:text-[40px] text-white'>Legal Justice Claim
              </h2>
              <h4 className='text-[20px] lg:text-[32px] md:text-[25px] text-white'>Expert Legal Advocates for Winning Your Lawsuit and Maximum Compensation</h4>
              <div className=' mx-auto'>
              <SlidingTextAnimation />
              </div>
              
              <div className="flex justify-between items-center bg-[#800020] sm:py-3 sm:px-5 p-2 mt-5 w-1/2 mx-auto">
                <select name="status" id="form-select" className="border border-gray-400 block py-2 px-4 w-1/2 rounded focus:outline-none font-semibold">
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
                <button className='bg-[#228B22] py-2 px-4 rounded'><a className='text-white text-lg font-semibold' href="/">Submit</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner