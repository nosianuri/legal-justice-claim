import React from 'react';
import d1 from '../../../assets/3M Earplugs (1).jpg';
import d2 from '../../../assets/Zantac (1).jpg';
import d3 from '../../../assets/talcom powder.jpg';
import d4 from '../../../assets/Mesothelioma.jpg';
import d5 from '../../../assets/Fire Fighting (1).jpg';
import d6 from '../../../assets/NEC (1).jpg';
import Heading from '../../../components/Shared/Heading/Heading';

const MmNews = () => {
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
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
                    <div>
                        <div className='box'>
                            <div className='img'>
                                <img src={d1} alt='' />
                            </div>
                            <h1 className='title'>3M Earplugs</h1>
                        </div>
                    </div>
                    <div>
                        <div className='box'>
                            <div className='img'>
                                <img src={d2} alt='' />
                            </div>
                            <h1 className='title'>Zantac</h1>
                        </div>
                    </div>
                    <div>
                        <div className='box'>
                            <div className='img'>
                                <img src={d3} alt='' />
                            </div>
                            <h1 className='title'>talcom powder</h1>
                        </div>
                    </div>
                    <div>
                        <div className='box'>
                            <div className='img'>
                                <img src={d4} alt='' />
                            </div>
                            <h1 className='title'>Mesothelioma</h1>
                        </div>
                    </div>
                    <div>
                        <div className='box'>
                            <div className='img'>
                                <img src={d5} alt='' />
                            </div>
                            <h1 className='title'>Fire Fighting</h1>
                        </div>
                    </div>
                    <div>
                        <div className='box'>
                            <div className='img'>
                                <img src={d6} alt='' />
                            </div>
                            <h1 className='title'>NEC</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
  )
}

export default MmNews