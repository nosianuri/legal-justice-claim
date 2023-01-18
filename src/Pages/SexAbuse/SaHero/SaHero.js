import React from 'react'
import SaForm from './SaForm'

const SaHero = () => {
  return (
    <div style={{
        background: `url(https://i.ibb.co/VT1XYWg/Sex-Abuse.jpg)`
    }} class="bg-no-repeat !bg-cover">
        <div className='lg:px-32 px-8 bg-black bg-opacity-25'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                <div className='lg:py-16 py-5 lg:mx-16 order-2'>
                    <h1 className='lg:text-5xl text-4xl text-center font-bold'>Southern Baptist Church Lawsuits are now being filed!</h1>
                    <h3 className='text-[#300303] lg:text-[35px] text-2xl text-center my-5 leading-tight font-semibold'>SBC Sexual Abuse Cover-Up & Cases. May, 2022 report reveals 700 victims of Southern Baptist sexual abuse ***</h3>
                    <div className='bg-slate-50 border-l-4 border-gray-300 lg:mx-10 p-10 rounded shadow-xl'>
                        <h2 className='lg:text-4xl text-2xl mb-3'>Signs & Symptoms</h2>
                        <div className='lg:w-full w-full h-[1px] bg-gray-700'></div>
                        <div className='mt-5 '>
                            <p className='lg:text-2xl text-lg'>Attempted Rape</p>
                            <p className='lg:text-2xl text-lg'>Fondling</p>
                            <p className='lg:text-2xl text-lg'>Groping</p>
                            <p className='lg:text-2xl text-lg'>Intimidating sexual abuse victims</p>
                            <p className='lg:text-2xl text-lg'>Masturbation/Exhibitionism</p>
                            <p className='lg:text-2xl text-lg'>Sexual Abuse</p>
                            <p className='lg:text-2xl text-lg'>Sexual Assault</p>
                            <p className='lg:text-2xl text-lg'>Sexual Harassment or Threats</p>
                            <p className='lg:text-2xl text-lg'>Torture</p>
                            <p className='lg:text-2xl text-lg'>Unwanted Sexual Contact or Touching</p>
                            <p className='lg:text-2xl text-lg'>and more...</p>
                        </div>
                    </div>
                </div>
                <div className='lg:order-2'>
                    <div className='lg:hidden blocked text-center my-5'>
                        <h2 className='lg:text-5xl text-4xl text-center font-bold'>Southern Baptist Church Lawsuits are now being filed!</h2>
                        <h5 className='text-[#300303] lg:text-[35px] text-2xl text-center my-5 leading-tight font-semibold'>SBC Sexual Abuse Cover-Up & Cases. New May 2022 report reveals 700 victims of Southern Baptist sexual abuse ***</h5>
                    </div>
                    <SaForm />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SaHero