import React from 'react';
import './MainBody.css';
import Elmiron from '../Elmiron/Elmiron';
import RoundUp from '../RoundUp/RoundUp';
import RoundUpProduct from '../RoundUpProduct/RoundUpProduct';
import Litigation from '../Litigation/Litigation';
import Additional from '../Additional/Additional';
import LawsuitField from './LawsuitField';
import star from '../../assets/citrus-stars.svg';
import google from '../../assets/google.svg';
import seen1 from '../../assets/in-logo2.png.webp';
import seen2 from '../../assets/nb-logo.png.webp';
import seen3 from '../../assets/th-logo6.png.webp';
import seen4 from '../../assets/usa-logo7.png.webp';
import seen5 from '../../assets/ne-logo5.png.webp';
import seen6 from '../../assets/in-logo2.png.webp';
import ImageSlider from '../ImageSlider';
import LogoSlider from '../LogoSlider';


const MainBody = () => {
    return (
        <div>
            <div className='lawsuit_body '>
                <div className=''>
                    <LawsuitField />
                </div>
                <div className='lawsuit_blog  '>
                    <div className="flex space-y-3 justify-between items-center bg-[#198ec0] sm:p-5 p-2">
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
                        <button className='bg-[#8bc53f] py-2 px-4 rounded'><a className='text-white text-lg font-semibold' href="/">Submit</a></button>
                        {/* <p className='underline lg:block hidden  text-white mr-10 text-xl'><a className='hover:text-[#8bc53f]' href="/">Legal News</a></p> */}
                    </div>
                    <RoundUp />
                    <div className='my-5'>
                        <h1 className='lg:text-4xl text-2xl font-bold !leading-normal'><span className='underline'>Secure Justice and Compensation</span>  with Our Experienced Legal Team</h1>
                        {/* <h3 className='lg:text-4xl text-xl mt-3'>Find Yourself a Lawyer That Will Fight For You and Your Rights!</h3> */}

                        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-5 lg:mb-8 '>
                            <div className='font-medium'>
                                We understand that an injury can be a life-changing event, causing physical, emotional, and financial turmoil. At our law firm, we're here to help you rise above your injury and reclaim your life. Our team of compassionate lawyers will fearlessly fight for your rights, securing the maximum compensation you're entitled to and the justice you deserve. We're committed to providing you with personalized attention and support throughout the legal process
                            </div>

                            <div className='space-y-2'>
                                <div className='flex space-x-2 '><i className="fa-solid fa-check text-2xl text-[#8bc53f] font-bold"></i><p className='lg:text-lg  font-semibold'>Get the Compensation You're Entitled to: Schedule a FREE, No-Obligation Consultation Today!
                                </p></div>
                                <div className='flex space-x-2'><i className="fa-solid fa-check text-2xl text-[#8bc53f] font-bold"></i><p className='lg:text-lg font-semibold'>Our Expert Legal Team Will Fight for Your Rights, While You Pay Nothing Upfront!
                                </p></div>
                                <div className='flex space-x-2'><i className="fa-solid fa-check text-2xl text-[#8bc53f] font-bold"></i><p className='lg:text-lg font-semibold'>Rest Easy Knowing Your Information is Safe
                                </p></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='text-center text-3xl text-[#000] font-bold mb-3'>As Seen In</div>
                        <div className='sm:w-[1000px] w-[370px] mx-auto'>
                            <LogoSlider />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mx-auto my-10'>
                        <ImageSlider />
                    </div>
                    {/* <div className='my-10'>
                    <Elmiron />
                </div> */}
                    <img src={star} alt="" className='mx-auto w-48' />
                    <div className='font-bold sm:text-3xl text-center mt-3'>Our Personal Injury Lawyers Have <br /> </div>
                    <div className='flex items-center justify-center font-bold sm:text-3xl mb-5'> Over 55,000 5-Star <img src={google} alt="" className='sm:w-24 w-16 mx-2' /> Logo Reviews</div>
                    {/* <RoundUp /> */}
                    {/* <RoundUpProduct /> */}
                    <Litigation />
                    {/* <Additional /> */}
        </div>
    )
}

export default MainBody