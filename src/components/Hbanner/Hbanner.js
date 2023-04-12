import React from 'react'

const Hbanner = () => {
    return (
        <div style={{
            background: `url(https://i.ibb.co/bJDWLCP/home-banner-new.jpg)`
          }} className=' bg-hero !bg-cover '>
          <div className='bg-black bg-opacity-50 lg:min-h-[580px]  min-h-[380px] flex  items-center '>
          <div className='mt-28 sm:px-10 px-1'>
            <h2 className='text-[38px] lg:text-[58px] md:text-[40px] font-bold text-white sm:pt-16'>Legal Justice Claim
            </h2>
            <h4 className='text-[20px] lg:text-[32px] md:text-[25px] text-white'>Expert Legal Advocates for Winning Your <br /> Lawsuit and Maximum Compensation.</h4>
            <h5 className="sliding-text text-[20px] lg:text-[32px] md:text-[25px] text-white">Over $900 Million Recovered for 5,000+ Clients</h5>
            <div className="flex justify-between items-center bg-[#800020] sm:py-3 sm:px-5 p-2 mt-5 sm:w-2/3 ">
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
                <button className='bg-[#228B22] py-2 px-4 rounded'><a className='text-white sm:text-base text-sm font-semibold file_font' href="/">File Lawsuit Now!</a></button>
              </div>
            </div>
            </div>
        </div>
    )
}

export default Hbanner