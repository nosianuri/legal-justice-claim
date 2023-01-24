import React from 'react';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MmForm = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    console.log(selectedDate);
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = formData => {

        const data = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            phone: formData.phone,
            email: formData.email,
            city: formData.city,
            state: formData.state,
            zip_code: formData.zip_code,
            incident_date: selectedDate,
            physical_injury: formData.physical_injury,
            currently_represented: formData.currently_represented,
            at_fault: formData.at_fault,
            case_description: formData.case_description,
        }
        console.log(data);
        fetch('https://leadmanager.rayadvertising.com/api/post-mva', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('succesfuly post data');
                    reset();
                }
                else {
                    toast.error('Something is wrong');
                }

            })
    }

    return (
        <div className='mb-16 bg-[#f0f0f0] border-8 border-[#f0f0f0] lg:mt-[-20px] rounded-t-xl shadow-xl'>
            <div className='p-5'>
                <div className='bg-[#BD902D] lg:px-10 px-2 rounded-t-xl text-white py-3' id="page-form">
                    <h2 className='text-center lg:text-xl'>FILL OUT THE FORM BELOW</h2>
                    <h5 className='text-center lg:text-2xl text-xl'>TO GET YOUR FREE CLAIM REVIEW</h5>
                    <p className='text-center lg:text-xl'>You may be entitled to <span className='underline'>financial compensation!</span></p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid lg:grid-cols-2 grid-cols-1 pt-5 pb-3 lg:gap-8'>
                        <div className='space-y-3 mb-3 lg:mb-0'>
                            <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D]' type="text"
                                {...register("first_name", {
                                    required: {
                                        value: true,
                                        message: 'First Name is required'
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'Must be 3 characters longer'
                                    }
                                })}
                                required
                                placeholder='First Name' />
                            <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D]' type="text"
                                {...register("last_name", {
                                    required: {
                                        value: true,
                                        message: 'last Name is required'
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'Must be 3 characters longer'
                                    }
                                })}
                                required
                                placeholder='Last Name' />
                            <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D]' type="text"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },

                                })}
                                required
                                placeholder='Email' />
                            {/* <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D]' type="text" name='zip' placeholder='ZIP' /> */}
                        </div>
                        <div className='space-y-3'>
                            <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D]' type="number"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone Number is required'
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: 'Must be 10 characters longer'
                                    }
                                })}
                                required
                                placeholder='Phone' />
                            <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D]' type="text"
                                {...register("city", {
                                    required: {
                                        value: true,
                                        message: 'City Name is required'
                                    },

                                })}
                                required
                                placeholder='City' />
                            <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D]' type="text"
                                {...register("state", {
                                    required: {
                                        value: true,
                                        message: 'State Name is required'
                                    },

                                })}
                                required
                                placeholder='State' />
                            {/* <DatePicker className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D]' selected={selectedDate} onChange={date => setSelectedDate(date)}  dateFormat='yyyy/mm/dd' placeholder='Incident Date' /> */}
                            {/* <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D]' type="date" name='date'  /> */}
                        </div>

                    </div>
                    <div className='mb-5'>
                        <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D]' type="text"
                            {...register("zip_code", {
                                required: {
                                    value: true,
                                    message: 'Zip Code is required'
                                },

                            })}
                            required
                            placeholder='ZIP Code' />
                    </div>

                    <div className='lg:w-full w-full h-[1px] bg-gray-300'></div>
                    <div className='bg-[#BD902D] lg:mx-16 rounded-xl'>
                        <h3 className='mt-5 lg:text-lg py-1 text-center text-white'>Your Information is 100% Confidential</h3>
                        <div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 lg:gap-10 py-1 lg:px-3 my-2 justify-between items-center'>
                        <p>Physical Injury !</p>
                        <div>
                            <div class="inline-block relative lg:w-40">
                                <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                    {...register("physical_injury", {
                                        required: {
                                            value: true,
                                            message: 'Physical Injury is required'
                                        },

                                    })}
                                    required>
                                    <option>[Select]</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-full w-full h-[1px] bg-gray-300 '></div>
                    <div className='grid grid-cols-2 lg:gap-10 py-1 lg:px-3 justify-center items-center my-2'>
                        <p>Currently Represented !</p>
                        <div>
                            <div class="inline-block relative lg:w-40">
                                <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                    {...register("currently_represented", {
                                        required: {
                                            value: true,
                                            message: 'Currently Represented is required'
                                        },

                                    })}
                                    required>
                                    <option>[Select]</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-full w-full h-[1px] bg-gray-300 '></div>
                    <div className='grid grid-cols-2 lg:gap-10 py-1 lg:px-3 my-2 justify-center items-center'>
                        <p>At Fault !</p>
                        <div>
                            <div class="inline-block relative lg:w-40 ">
                                <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                    {...register("at_fault", {
                                        required: {
                                            value: true,
                                            message: 'At Fault is required'
                                        },

                                    })}
                                    required>
                                    <option>[Select]</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-full w-full h-[1px] bg-gray-300 '></div>
                    <div className='grid grid-cols-2 lg:gap-10 py-1 lg:px-3 my-2 justify-center items-center'>
                        <p>Incident Date !</p>
                        <div className='inline-block relative w-40'>
                            <DatePicker className='block appearance-none px-2 rounded  py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D] w-40' selected={selectedDate} onChange={date => setSelectedDate(date)} dateFormat='yyyy/MM/dd' required 
                              />
                              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                        </div>
                    </div>


                    <div className='lg:px-10 mt-3'>
                        <textarea className='rounded w-full p-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#BD902D]' id="" cols="50" rows="2" placeholder='More details about your claim' type="message"
                            {...register("case_description", {
                                required: {
                                    value: true,
                                    message: 'Case Description is required'
                                },

                            })}
                            required />
                    </div>
                    <div className='text-center bg-[#BD902D] rounded my-5'>
                        <a href="/">
                            <button className='uppercase text-xl py-2 text-white'>Submit My Claim</button>
                        </a>
                    </div>
                </form>
                <p className='text-xs text-gray-400 lg:px-10'>By clicking the “Submit My Claim” button, you certify that you have provided your legal name and your own phone number, you agree to the <a className='text-[#BD902D] hover:underline' href="/terms&condition">Terms and Conditions</a> and <a className='text-[#BD902D]' href="/privacy-policy">Privacy Policy</a> and authorize Lawsuit-Winning and its <a className='text-[#BD902D]' href="/">partners</a> to contact you by email or at the phone number you entered using automated technology including recurring auto-dialers, pre-recorded messages, and text messages, even if your phone is a mobile number or is currently listed on any state, federal, or corporate “Do Not Call” list. You understand that your telephone company may impose charges on you for these contacts, and that you can revoke this consent at any time. For SMS campaigns Text STOP to cancel and HELP for help. Message and data rates may apply. By clicking the “Submit My Claim” button and submitting this form, I affirm that I have read and agree to this Site’s <a className='text-[#BD902D]' href="/terms&condition">Terms and Conditions</a> (including the arbitration provision and the E-SIGN consent) and Privacy Policy.</p>
            </div>
        </div>
    )
}

export default MmForm