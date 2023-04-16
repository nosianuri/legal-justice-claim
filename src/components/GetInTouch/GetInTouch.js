import React from 'react';
import './GetInTouch.css';
import img1 from '../../assets/1.svg';
import img2 from '../../assets/2.svg';
import img3 from '../../assets/3.svg';
import img4 from '../../assets/4.svg';
import img5 from '../../assets/5.svg';
// import img6 from '../../assets/5F883B87-22F2-4E47-8FC8-CDB7E941D520.svg';
import img7 from '../../assets/7.svg';
import img8 from '../../assets/8.svg';
import img9 from '../../assets/get4.svg';
import img10 from '../../assets/get7.svg';

const GetInTouch = () => {
    return (
        <div className='getintouch'>
            <h2 className='why'>
                Why Trust Us?
            </h2>
            <div className='injuries px-10 pb-10'>
                <div class="grid grid-cols-1 sm:grid-cols-4 gap-10  space-y-2 sm:space-y-0">
                    <div class="col ">
                    <a href="/camplejeune">
                        <div class="card bg-white">
                         <img src={img1} class="card-img-top w-16" alt="..." />
                            <div class="card-body">
                                {/* <h6 class="card-title mx-auto">SPINE INJURIES</h6> */}
                                <div className='item'>
                                    <strong>
                                        <span>$28.0 </span>
                                        Million
                                    </strong>
                                    <p>Camp Lejeune Lawsuit Recovered</p>
                                </div>
                            </div>
                        </div>
                        </a>
                        <div className='text-center mt-2'>
                            <a href="/camplejeune">
                                <button className=' text-white hover:underline  lg:px-3 px-2 lg:py-2 py-1 font-semibold rounded sm:text-[26px] text-[22px] '>Free Consultation »</button>
                            </a>
                        </div>

                    </div>

                    <div class="col ">
                    <a href="/talcome">
                        <div class="card bg-white">
                            <img src={img10} class="card-img-top" alt="..." />
                            <div class="card-body">
                                {/* <h6 class="card-title mx-auto text-center">CATASTROPHIC INJURIES</h6> */}
                                <div className='item'>
                                    <strong>
                                        <span>$27.5</span>
                                        Million
                                    </strong>
                                    <p>Talcome Powder Lawsuit Recovered</p>
                                </div>
                            </div>
                        </div>
                        </a>
                        <div className='text-center mt-2'>
                            <a href="/talcome">
                                <button className=' text-white hover:underline  lg:px-3 px-2 lg:py-2 py-1 font-semibold rounded sm:text-[26px] text-[22px] '>Free Consultation »</button>
                            </a>
                        </div>
                    </div>
                    <div class="col ">
                    <a href="/hair-relaxer">
                        <div class="card bg-white">
                            <img src={img5} class="card-img-top" alt="..." />
                            <div class="card-body">
                                {/* <h6 class="card-title mx-auto">NECK INJURIES</h6> */}
                                <div className='item'>
                                    <strong>
                                        <span>$15.5</span>
                                        Million
                                    </strong>
                                    <p>Hair - Relaxer Lawsuit  Recovered</p>
                                </div>
                            </div>
                        </div>
                        </a>
                        <div className='text-center mt-2'>
                            <a href="/hair-relaxer">
                                <button className=' text-white hover:underline  lg:px-3 px-2 lg:py-2 py-1 font-semibold rounded sm:text-[26px] text-[22px] '>Free Consultation »</button>
                            </a>
                        </div>
                    </div>
                    <div class="col ">
                    <a href="/fire-fighter-foam">
                        <div class="card bg-white">
                            <img src={img8} class="card-img-top" alt="..." />
                            <div class="card-body">
                                {/* <h6 class="card-title mx-auto">BRAIN INJURIES</h6> */}
                                <div className='item'>
                                    <strong>
                                        <span>$11.0 </span>
                                        Million
                                    </strong>
                                    <p>Fire Fighter Foam Lawsuit Recovered</p>
                                </div>
                            </div>
                        </div>
                        </a>
                        <div className='text-center mt-2'>
                            <a href="/fire-fighter-foam">
                                <button className=' text-white hover:underline  lg:px-3 px-2 lg:py-2 py-1 font-semibold rounded sm:text-[26px] text-[22px] '>Free Consultation »</button>
                            </a>
                        </div>
                    </div>
                    <div class="col ">
                    <a href="/roundup">
                        <div class="card bg-white">
                            <img src={img4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                {/* <h6 class="card-title mx-auto text-center">BROKEN BONE INJURIES</h6> */}
                                <div className='item'>
                                    <strong>
                                        <span>$12.0</span>
                                        Million
                                    </strong>
                                    <p>Roundup Lawsuit Recovered</p>
                                </div>
                            </div>
                        </div>
                        </a>
                        <div className='text-center mt-2'>
                            <a href="/roundup">
                                <button className=' text-white hover:underline  lg:px-3 px-2 lg:py-2 py-1 font-semibold rounded sm:text-[26px] text-[22px] '>Free Consultation »</button>
                            </a>
                        </div>
                    </div>
                    <div class="col ">
                    <a href="/tylenol">
                        <div class="card bg-white">
                            <img src={img9} class="card-img-top" alt="..." />
                            <div class="card-body">
                                {/* <h6 class="card-title mx-auto text-center">BROKEN BONE INJURIES</h6> */}
                                <div className='item'>
                                    <strong>
                                        <span>$10.0</span>
                                        Million
                                    </strong>
                                    <p>Tylenol Lawsuit Recovered</p>
                                </div>
                            </div>
                        </div>
                        </a>
                        <div className='text-center mt-2'>
                            <a href="/tylenol">
                                <button className=' text-white hover:underline  lg:px-3 px-2 lg:py-2 py-1 font-semibold rounded sm:text-[26px] text-[22px] '>Free Consultation »</button>
                            </a>
                        </div>
                    </div>
                    <div class="col ">
                    <a href="/nec">
                        <div class="card bg-white">
                            <img src={img7} class="card-img-top" alt="..." />
                            <div class="card-body">
                                {/* <h6 class="card-title mx-auto text-center">BROKEN BONE INJURIES</h6> */}
                                <div className='item'>
                                    <strong>
                                        <span>$9.5</span>
                                        Million
                                    </strong>
                                    <p>NEC Lawsuit Recovered</p>
                                </div>
                            </div>
                        </div>
                        </a>
                        <div className='text-center mt-2'>
                            <a href="/nec">
                                <button className=' text-white hover:underline  lg:px-3 px-2 lg:py-2 py-1 font-semibold rounded sm:text-[26px] text-[22px] '>Free Consultation »</button>
                            </a>
                        </div>
                    </div>
                    <div class="col ">
                    <a href="/mva">
                        <div class="card bg-white">
                            <img src={img3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                {/* <h6 class="card-title mx-auto text-center">BROKEN BONE INJURIES</h6> */}
                                <div className='item'>
                                    <strong>
                                        <span>$8.0</span>
                                        Million
                                    </strong>
                                    <p>MVA Lawsuit Recovered</p>
                                </div>
                            </div>
                        </div>
                        </a>
                        <div className='text-center mt-2'>
                            <a href="/mva">
                                <button className=' text-white hover:underline lg:px-3 px-0 lg:py-2 py-0 font-semibold sm:text-[26px] text-[22px]'>Free Consultation »</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='item-injure'>
                <div className='grid grid-cols-1 sm:grid-cols-4'>
                    <div className='col '>
                        <div className='item injure_item'>
                            <strong>
                                <span>$28.0 </span>
                                 Million
                            </strong>
                            <p>Camp Lejeune Lawsuit Recovered</p>
                            <a href="/">
                                    <button className='bg-[#228B22] hover:text-[#E1251A] hover:bg-[#fff] lg:px-3 px-2 lg:py-2 py-1 font-semibold rounded sm:text-[25px] text-sm mt-1'>Free Claim Review »</button>
                                </a>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='item injure_item'>
                            <strong>
                                <span>$27.5</span>
                                Million
                            </strong>
                            <p>Talcome Powder Lawsuit Recovered</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='item injure_item'>
                            <strong>
                                <span>$15.5</span>
                                Million
                            </strong>
                            <p>Hair Relaxer Lawsuit Recovered</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='item injure_item'>
                            <strong>
                                <span>$11.0 </span>
                                Million
                            </strong>
                            <p>Fire Fighter Lawsuit Recovered</p>
                        </div>
                    </div>
                    
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-4'>
                        <div className='col'>
                            <div className='item injure_item'>
                                <strong>
                                    <span>$12.0</span>
                                    Million
                                </strong>
                                <p>Roundup Lawsuit Recovered</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='item injure_item'>
                                <strong>
                                    <span>$10.0</span>
                                    Million
                                </strong>
                                <p>Tylenol Lawsuit Recovered</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='item injure_item'>
                                <strong>
                                    <span>$9.5</span>
                                    Million
                                </strong>
                                <p>NEC Lawsuit Recovered</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='item injure_item'>
                                <strong>
                                    <span>$8.0</span>
                                    Million
                                </strong>
                                <p>MVA Lawsuit Recovered</p>
                            </div>
                        </div>
                    </div>
            </div> */}
        </div>
    )
}

export default GetInTouch