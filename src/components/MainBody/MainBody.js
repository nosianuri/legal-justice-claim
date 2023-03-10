import React from 'react';
import './MainBody.css';
import Elmiron from '../Elmiron/Elmiron';
import RoundUp from '../RoundUp/RoundUp';
import RoundUpProduct from '../RoundUpProduct/RoundUpProduct';
import Litigation from '../Litigation/Litigation';
import Additional from '../Additional/Additional';
import LawsuitField from './LawsuitField';


const MainBody = () => {
    return (
        <div className='lawsuit_body '>
        <div className='  '>
        <LawsuitField />
        </div>
            

            <div className='lawsuit_blog  '>
                <div class="flex space-y-3 justify-between bg-[#13100E] p-5">

                    <select name="status" id="form-select" class="border border-gray-400 block py-2 px-4 w-1/2 rounded focus:outline-none font-semibold">
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
                    <button className='bg-[#BD902D] py-2 px-4 rounded'><a className='text-white text-lg font-semibold' href="/">Submit</a></button>

                    <p className='underline lg:block hidden  text-white mr-10 text-xl'><a className='hover:text-[#BD902D]' href="/">Latest News</a></p>

                </div>
                <div className='my-5'>
                    <h1 className='lg:text-4xl text-2xl font-bold'><span className='underline'>You MAY Get Paid</span> for Your Condition or Injury!</h1>
                    <h3 className='lg:text-4xl text-xl mt-3'>Find Yourself a Lawyer That Will Fight For You and Your Rights!</h3>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-5 lg:my-8 my-4'>
                    <div className='lg:text-xl text-md'>
                        You may claim millions of dollars for your pain and suffering. You probably didn't know you could be owed money for your situation, and it is time to speak up! Don't let you or your family suffer in silence.
                    </div>
                    <div className='space-y-2'>
                        <div className='flex space-x-2 items-center'><i class="fa-solid fa-check text-2xl text-[#BD902D] font-bold"></i><p className='lg:text-lg  font-semibold'>Receive the Compensation You Deserve!</p></div>
                        <div className='flex space-x-2'><i class="fa-solid fa-check text-2xl text-[#BD902D] font-bold"></i><p className='lg:text-lg font-semibold'>FREE No Obligation Consultation Pay Nothing!</p></div>
                        <div className='flex space-x-2'><i class="fa-solid fa-check text-2xl text-[#BD902D] font-bold"></i><p className='lg:text-lg font-semibold'>Your Contact Information and Case are Confidential!</p></div>
                    </div>
                </div>
                <div className='my-10'>
                <Elmiron />
                </div>
               
                <RoundUp />
                <RoundUpProduct />
                <Litigation />
                <Additional />
            </div>
        </div>
    )
}

export default MainBody