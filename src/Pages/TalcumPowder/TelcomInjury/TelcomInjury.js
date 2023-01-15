import React from 'react';
import marker from '../../../assets/marker.png';

const TelcomInjury = () => {
  return (
    <div>
        <div className='my-5'>
                    <h1 className='lg:text-4xl text-2xl font-bold'><span className='underline'>You MAY Get Paid</span> for Your Condition or Injury!</h1>
                    <h3 className='lg:text-4xl text-xl mt-3'>Find Yourself a Lawyer That Will Fight For You and Your Rights!</h3>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-5 lg:my-8 my-4'>
                    <div className='lg:text-xl text-md'>
                        You may claim millions of dollars for your pain and suffering. You probably didn't know you could be owed money for your situation, and it is time to speak up! Don't let you or your family suffer in silence.
                    </div>
                    <div className='space-y-2'>
                        <div className='flex space-x-2'><img className='lg:w-8 ' src={marker} alt="" /><p className='lg:text-lg font-semibold'>Receive the Compensation You Deserve!</p></div>
                        <div className='flex space-x-2'><img className='lg:w-8' src={marker} alt="" /><p className='lg:text-lg font-semibold'>FREE No Obligation Consultation Pay Nothing!</p></div>
                        <div className='flex space-x-2'><img className='lg:w-8 ' src={marker} alt="" /><p className='lg:text-lg font-semibold'>Your Contact Information and Case are Confidential!</p></div>
                    </div>
                </div>
    </div>
  )
}

export default TelcomInjury