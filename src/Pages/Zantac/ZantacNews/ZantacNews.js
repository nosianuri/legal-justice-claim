import React from 'react';
import d1 from '../../../assets/NEC (1).jpg';
import d2 from '../../../assets/Sex Abuse (1).jpg';
import d3 from '../../../assets/Roundup (1).jpg';
import d4 from '../../../assets/Mesothelioma.jpg';
import d5 from '../../../assets/Personal Injury.jpg';
import d6 from '../../../assets/3M Earplugs (1).jfif';
import d7 from '../../../assets/Fire Fighting (1).jpg';
import d8 from '../../../assets/Car Accident.jpg';
import d9 from '../../../assets/Medical Malpractice (1).jpg';
import d10 from '../../../assets/Motorcycle Accident.jpg';
import d11 from '../../../assets/camp-lejeune.png';
import d12 from '../../../assets/Truck Accident.jpg';
import Heading from '../../../components/Shared/Heading/Heading';


const ZantacNews = () => {
  return (
    <div>
    <div className='lg:mx-36 mt-16 px-5 lg:px-0'>
        <h1 className='my-5 lg:text-5xl text-2xl'>IN THE NEWS</h1>
        <div className='lg:w-full w-full h-[1px] bg-gray-400'></div>
        <p className='my-3 hover:underline'><a className=' text-blue-800' href="/">https://www.justice.gov/opa/pr/3m-company-agrees-pay-91-million-resolve-allegations-it-supplied-united-states-defective-dual</a></p>
        <p className='mb-10 hover:underline'><a className=' text-blue-800' href="/">https://www.justice.gov/opa/pr/3m-company-agrees-pay-91-million-resolve-allegations-it-supplied-united-states-defective-dual</a></p>
        <div className='mb-10'>
            <Heading title='Additional Lawsuit' />
            <div className=''>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3'>
                    <div>
                        <div className='box'>
                        <a href="/nec">
                            <div className='img'>
                                <img src={d1} alt='' />
                            </div>
                            </a>
                            <h1 className='title'>NEC</h1>
                        </div>
                    </div>
                    <div>
                        <div className='box'>
                        <a href="/sexabuse">
                            <div className='img'>
                                <img src={d2} alt='' />
                            </div>
                            </a>
                            <h1 className='title'>Sex Abuse</h1>
                        </div>
                    </div>
                    <div>
                        <div className='box'>
                        <a href="/roundup">
                            <div className='img'>
                                <img src={d3} alt='' />
                            </div>
                            </a>
                            <h1 className='title'>Roundup</h1>
                        </div>
                    </div>
                    <div>
                        <div className='box'>
                        <a href="/">
                            <div className='img'>
                                <img src={d4} alt='' />
                            </div>
                            </a>
                            <h1 className='title'>Mesothelioma</h1>
                        </div>
                    </div>
                    <div>
                        <div className='box'>
                        <a href="/personalinjury">
                            <div className='img'>
                                <img src={d5} alt='' />
                            </div>
                            </a>
                            <h1 className='title'>Personal Injury</h1>
                        </div>
                    </div>
                    <div>
                        <div className='box'>
                        <a href="/earplug">
                            <div className='img'>
                                <img src={d6} alt='' />
                            </div>
                            </a>
                            <h1 className='title'>3M Earplugs</h1>
                        </div>
                    </div>
                    <div>
                        <div className='box'>
                        <a href="/firefighting">
                            <div className='img'>
                                <img src={d7} alt='' />
                            </div>
                            </a>
                            <h1 className='title'>Fire Fighting</h1>
                        </div>
                    </div>
                    <div>
                        <div className='box'>
                        <a href="/personalinjury">
                            <div className='img'>
                                <img src={d8} alt='' />
                            </div>
                            </a>
                            <h1 className='title'>Car Accident</h1>
                        </div>
                    </div>
                    <div>
                        <div className='box'>
                        <a href="/personalinjury">
                            <div className='img'>
                                <img src={d9} alt='' />
                            </div>
                            </a>
                            <h1 className='title'>Medical Malpractice</h1>
                        </div>
                    </div>
                    <div>
                        <div className='box'>
                        <a href="/personalinjury">
                            <div className='img'>
                                <img src={d10} alt='' />
                            </div>
                            </a>
                            <h1 className='title'>Motorcycle Accident</h1>
                        </div>
                    </div>
                    <div>
                        <div className='box'>
                        <a href="https://camplejeuneus.com/">
                            <div className='img'>
                                <img src={d11} alt='' />
                            </div>
                            </a>
                            <h1 className='title'>Camp Lejeune</h1>
                        </div>
                    </div>
                    <div>
                        <div className='box'>
                        <a href="/personalinjury">
                            <div className='img'>
                                <img src={d12} alt='' />
                            </div>
                            </a>
                            <h1 className='title'>Truck Accident</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
  )
}

export default ZantacNews