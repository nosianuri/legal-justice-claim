import React from 'react';
import './MainBody.css';
import marker from '../../assets/marker.png';
import Elmiron from '../Elmiron/Elmiron';
import RoundUp from '../RoundUp/RoundUp';
import RoundUpProduct from '../RoundUpProduct/RoundUpProduct';
import Litigation from '../Litigation/Litigation';
import Additional from '../Additional/Additional';
import LawsuitField from './LawsuitField';

const MainBody = () => {
    return (
        <div className='lawsuit_body'>
            <LawsuitField />

            <div className='lawsuit_blog'>
                <div class="flex justify-between bg-[#003144] p-5">

                    <select name="status" id="form-select" class="border border-gray-400 block py-2 px-4 w-1/2 rounded focus:outline-none">
                        <option value="">Select a Lawsuit</option>
                        <option value="in Progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="out-for-delivery">Out for delivery</option>
                    </select>
                    <button className='bg-red-800 px-2 py-1 rounded'><a className='text-white text-lg font-semibold' href="/">Submit</a></button>

                    <p className='underline text-white mr-10 text-xl'>Latest News</p>

                </div>
                <div className='my-5'>
                    <h1 className='text-4xl font-bold'><span className='underline'>You MAY Get Paid</span> for Your Condition or Injury!</h1>
                    <h3 className='text-4xl mt-3'>Find Yourself a Lawyer That Will Fight For You and Your Rights!</h3>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-16 my-8'>
                    <div className='text-xl'>
                        You may claim millions of dollars for your pain and suffering. You probably didn't know you could be owed money for your situation, and it is time to speak up! Don't let you or your family suffer in silence.
                    </div>
                    <div>
                        <div className='flex'><img className='mr-3 w-8' src={marker} alt="" /><p className='text-lg font-semibold'>Receive the Compensation You Deserve!</p></div>
                        <div className='flex'><img className='mr-3 w-8' src={marker} alt="" /><p className='text-lg font-semibold'>FREE No Obligation Consultation Pay Nothing!</p></div>
                        <div className='flex'><img className='mr-3 w-8' src={marker} alt="" /><p className='text-lg font-semibold'>Your Contact Information and Case are Confidential!</p></div>
                    </div>
                </div>
                <Elmiron />
                <RoundUp />
                <RoundUpProduct />
                <Litigation />
                <Additional />
            </div>
        </div>
    )
}

export default MainBody