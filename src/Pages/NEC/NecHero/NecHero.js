import React from 'react'
import NecForm from './NecForm'

const NecHero = () => {
  return (
    <div style={{
        background: `url(https://i.ibb.co/xqB5YWT/imgpsh-fullsize-anim-1.jpg)`
    }} class="bg-no-repeat !bg-cover">
        <div className='lg:px-32 px-8'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                <div className='lg:py-16 py-5 lg:mx-16'>
                    <h1 className='lg:text-5xl text-4xl text-center font-semibold'>Baby Formula Lawsuits are now being filed!</h1>
                    <h3 className='text-[#300303] lg:text-[35px] text-2xl text-center font-semibold my-5 leading-tight'>Each year thousands of premature babies develop NEC after receiving cow-milk formula</h3>
                    <div className='bg-slate-50 border-l-4 border-gray-300 lg:mx-10 p-10 rounded'>
                        <h2 className='lg:text-4xl text-2xl mb-3'>Signs & Symptoms</h2>
                        <div className='lg:w-full w-full h-[1px] bg-gray-700'></div>
                        <div className='mt-5 '>
                            <p className='lg:text-2xl text-lg'>Intestinal perforation (a hole in the intestines)</p>
                            <p className='lg:text-2xl text-lg'>Scarring or strictures in the intestines</p>
                            <p className='lg:text-2xl text-lg'>Sepsis</p>
                            <p className='lg:text-2xl text-lg'>Cerebral palsy</p>
                            <p className='lg:text-2xl text-lg'>Neurological damage</p>
                            <p className='lg:text-2xl text-lg'>Abdominal pain and swelling</p>
                            <p className='lg:text-2xl text-lg'>Changes in heart rate, breathing, blood pressure or body temperature</p>
                            <p className='lg:text-2xl text-lg'>Diarrhea with bloody stool</p>
                            <p className='lg:text-2xl text-lg'>Green or yellow vomit</p>
                            <p className='lg:text-2xl text-lg'>Lethargy</p>
                            <p className='lg:text-2xl text-lg'>Refusing to eat</p>
                            <p className='lg:text-2xl text-lg'>Lack of weight gain</p>
                            <p className='lg:text-2xl text-lg'>and more...</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='lg:hidden blocked text-center mb-5'>
                        <h2 className='text-3xl'>Firefighting Foam Lawsuits are now being filed!</h2>
                        <h5 className='text-xl'>Toxic Firefighting Foam With PFAS Scrutinized by Multiple States*</h5>
                    </div>
                    <NecForm />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NecHero