import React from 'react'
import MultiForm from '../../CarAccident/MultiForm'
import StepForm from './StepForm/StepForm'

const CampForm = () => {
  return (
    <div className='my-10 max-w-7xl mx-auto'>
    <div className='formbox  text-center py-5 rounded-xl sm:mx-0 mx-2'>
        <h2 className='font-bold text-3xl text-[#800020]'>SEE IF YOU ARE ELIGIBLE FOR A CAMP LEJEUNE CLAIM</h2>
        <h4 className='font-medium text-2xl'>Please complete the form below to check you or your <br /> <span className='font-bold'>loved one's eligibility for Toxic Water compensation.</span></h4>
       <StepForm />
        </div>
    </div>
  )
}

export default CampForm