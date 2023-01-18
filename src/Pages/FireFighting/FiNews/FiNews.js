import React from 'react';
import d1 from '../../../assets/Personal Injury.jpg';
import d2 from '../../../assets/3M Earplugs (1).jfif';
import d3 from '../../../assets/camp-lejeune.png';
import d4 from '../../../assets/NEC (1).jpg';
import d5 from '../../../assets/Truck Accident.jpg';
import d6 from '../../../assets/talcom powder.jpg';
import d7 from '../../../assets/Car Accident.jpg';
import d8 from '../../../assets/Roundup (1).jpg';
import d9 from '../../../assets/Medical Malpractice (1).jpg';
import d10 from '../../../assets/Zantac (1).jpg';
import d11 from '../../../assets/Sex Abuse (1).jpg';
import d12 from '../../../assets/Motorcycle Accident.jpg';
import Heading from '../../../components/Shared/Heading/Heading';
import './FiNews.css';

const FiNews = () => {
    return (
        <div>
            <div className='lg:mx-36 mt-16 px-5 lg:px-0'>
                <h1 className='my-5 lg:text-5xl text-2xl'>IN THE NEWS</h1>
                <div className='lg:w-full w-full h-[1px] bg-gray-400'></div>
                <p className='my-3 hover:underline'><a className=' text-blue-800' href="https://www.atsdr.cdc.gov/pfas/health-effects/index.html?CDC_AA_refVal=https%3A%2F%2Fwww.atsdr.cdc.gov%2Fpfas%2Fhealth-effects.html">Centers for Disease Control and Prevention</a></p>
                <p className='mb-10 hover:underline'><a className=' text-blue-800' href="https://www.cancer.org/healthy/cancer-causes/chemicals/teflon-and-perfluorooctanoic-acid-pfoa.html">American Cancer Society</a></p>
                <div className='mb-10'>
                    <Heading title='Additional Lawsuit' />
                    <div className=''>
                        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3'>
                            <div>
                                <div className='box'>
                                    <a href="/personalinjury">
                                        <div className='img'>
                                            <img src={d1} alt='' />
                                        </div>
                                    </a>
                                    <h1 className='title'>Personal Injury</h1>
                                </div>
                            </div>
                            <div>
                                <div className='box'>
                                    <a href="/earplug">
                                        <div className='img'>
                                            <img src={d2} alt='' />
                                        </div>
                                    </a>
                                    <h1 className='title'>3M Earplugs</h1>
                                </div>
                            </div>
                            <div>
                                <div className='box'>
                                    <a href="/camplejeune">
                                        <div className='img'>
                                            <img src={d3} alt='' />
                                        </div>
                                    </a>
                                    <h1 className='title'>Camp Lejeune</h1>
                                </div>
                            </div>
                            <div>
                                <div className='box'>
                                    <a href="/nec">
                                        <div className='img'>
                                            <img src={d4} alt='' />
                                        </div>
                                    </a>
                                    <h1 className='title'>NEC</h1>
                                </div>
                            </div>
                            <div>
                                <div className='box'>
                                    <a href="/personalinjury">
                                        <div className='img'>
                                            <img src={d5} alt='' />
                                        </div>
                                    </a>
                                    <h1 className='title'>Truck Accident</h1>
                                </div>
                            </div>
                            <div>
                                <div className='box'>
                                    <a href="/">
                                        <div className='img'>
                                            <img src={d6} alt='' />
                                        </div>
                                    </a>
                                    <h1 className='title'>Talcom powder</h1>
                                </div>
                            </div>
                            <div>
                                <div className='box'>
                                    <a href="/personalinjury">
                                        <div className='img'>
                                            <img src={d7} alt='' />
                                        </div>
                                    </a>
                                    <h1 className='title'>Car Accident</h1>
                                </div>
                            </div>
                            <div>
                                <div className='box'>
                                    <a href="/earplug">
                                        <div className='img'>
                                            <img src={d8} alt='' />
                                        </div>
                                    </a>
                                    <h1 className='title'>Roundup</h1>
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
                                    <a href="/zantac">
                                        <div className='img'>
                                            <img src={d10} alt='' />
                                        </div>
                                    </a>
                                    <h1 className='title'>Zantac</h1>
                                </div>
                            </div>
                            <div>
                                <div className='box'>
                                    <a href="/sexabuse">
                                        <div className='img'>
                                            <img src={d11} alt='' />
                                        </div>
                                    </a>
                                    <h1 className='title'>Sex Abuse</h1>
                                </div>
                            </div>
                            <div>
                                <div className='box'>
                                    <a href="/personalinjury">
                                        <div className='img'>
                                            <img src={d12} alt='' />
                                        </div>
                                    </a>
                                    <h1 className='title'>Motorcycle Accident</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FiNews