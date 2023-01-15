import React from 'react';
import Heading from '../Shared/Heading/Heading';
import Ap1 from '../../assets/Medical Malpractice (1).jpg';
import Ap2 from '../../assets/talcom powder.jpg';
import Ap4 from '../../assets/Sex Abuse (1).jpg';
import Ap5 from '../../assets/Personal Injury.jpg';
import Ap6 from '../../assets/Zantac (1).jpg';
import Ap7 from '../../assets/NEC (1).jpg';
import Ap8 from '../../assets/Fire Fighting (1).jpg';

const Additional = () => {
    return (
        <div>
            <div className=''>
            <Heading title='Additional Lawsuit' />
                {/* <h3 className='text-xl text-gray-300'>Additional Lawsuit</h3> */}
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5'>
            <div>
                    <img src={Ap1} alt="" />
                    <div>
                        <h5 className='text-md font-semibold text-[#300303]'>Medical Malpractice</h5>
                        <p className='text-xs'>Medical malpractice occurs when a hospital, doctor or other health care professional, through a negligent act or omission, causes an injury to a patient.This is known as the standard of care... 
                        </p>
                        <button className='underline text-xs text-[#BD902D] font-semibold'>READ MORE »</button>
                    </div>
                </div>
                <div>
                    <img src={Ap2} alt="" />
                    <div>
                        <h5 className='text-md font-semibold text-[#300303]'>Talcum Powder</h5>
                        <p className='text-xs'>Numerous medical studies have been conducted and most have indicated that the use of talc-based powders is associated with a 33-percent increased risk of developing Ovarian Cancer...
                        </p>
                        <button className='underline text-xs text-[#BD902D] font-semibold'>READ MORE »</button>
                    </div>
                </div>
                <div>
                    <img className='w-48' src="https://i.ibb.co/3pqW4ww/roundup-bg.jpg" alt="" />
                    <div>
                        <h5 className='text-md font-semibold text-[#300303]'>RoundUp RoundUp®</h5>
                        <p className='text-xs'>Millions of consumers have used the weed killer in their home gardens and lawns since it was introduced in 1976 and, unfortunately, it has been found to contain harmful chemicals that may cause cancer...
                        </p>
                        <button className='underline text-xs text-[#BD902D] font-semibold'>READ MORE »</button>
                    </div>
                </div>
                <div>
                    <img src={Ap4} alt="" />
                    <div>
                        <h5 className='text-md font-semibold text-[#300303]'>Sex Abuse</h5>
                        <p className='text-xs'>Sexual abuse occurs when there is undesired sexual behavior by one person upon another, this is also referred to as molestation. It often happens by taking advantage of or using force on another...
                        </p>
                        <button className='underline text-xs text-[#BD902D] font-semibold'>READ MORE »</button>
                    </div>
                </div>
                
                <div>
                    <img className='w-40' src="https://i.ibb.co/yQJsddQ/personal-injuryjpg.jpg" alt="" />
                    <div>
                        <h5 className='text-md font-semibold text-[#300303]'>Personal Injury</h5>
                        <p className='text-xs'>People get injured every day, in automobiles, motorcycles, a slip and fall, work-related accidents, medical malpractice, a faulty/defective product. You may be entitled to compensation...
                        </p>
                        <button className='underline text-xs text-[#BD902D] font-semibold'>READ MORE »</button>
                    </div>
                </div>
                
                <div>
                    <img src={Ap6} alt="" />
                    <div>
                        <h5 className='text-md font-semibold text-[#300303]'>Zantac</h5>
                        <p className='text-xs'>Since 2010, the FDA has received more than 1,600 reports of Paragard® complications where the copper IUD broke or fractured, including at least 700 serious injuries. Many women have filed complaints...
                        </p>
                        <button className='underline text-xs text-[#BD902D] font-semibold'>READ MORE »</button>
                    </div>
                </div>
                <div>
                    <img src={Ap7} alt="" />
                    <div>
                        <h5 className='text-md font-semibold text-[#300303]'>NEC</h5>
                        <p className='text-xs'>Gileads’s TDF/PreP drugs belong to a class of antiretroviral drugs that are prescribed to treat HIV in combination with other medications.TDF drugs are also used to slow the progression of HIV as well...
                        </p>
                        <button className='underline text-xs text-[#BD902D] font-semibold'>READ MORE »</button>
                    </div>
                </div>
                <div>
                    <img src={Ap8} alt="" />
                    <div>
                        <h5 className='text-md font-semibold text-[#300303]'>Fire Fighting</h5>
                        <p className='text-xs'>Lawsuits are currently being filed by abuse victims across the United States. So far dioceses and religious orders have been forced to pay settlements totaling more than $3 billion.
                        </p>
                        <button className='underline text-xs text-[#BD902D] font-semibold'>READ MORE »</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Additional