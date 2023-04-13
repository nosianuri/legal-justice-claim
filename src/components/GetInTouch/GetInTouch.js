import React from 'react';
import './GetInTouch.css';
import img1 from '../../assets/spine-injuries.svg';
import img2 from '../../assets/wheel-chair.svg';
import img3 from '../../assets/neck-bone.svg';
import img4 from '../../assets/brain-injuries.svg';
import img5 from '../../assets/broken-bone.svg';

const GetInTouch = () => {
  return (
    <div className='getintouch'>
            <h2 className='why'>
                Why Trust Us?
            </h2>
            <div className='injuries'>
                <div class="grid grid-cols-1 sm:grid-cols-5 g-4 sm:space-x-3 space-y-2 sm:space-y-0">
                    <div class="col bg-white">
                        <div class="card">
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h6 class="card-title mx-auto">SPINE INJURIES</h6>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col bg-white">
                        <div class="card">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h6 class="card-title mx-auto text-center">CATASTROPHIC INJURIES</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col bg-white">
                        <div class="card">
                            <img src={img3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h6 class="card-title mx-auto">NECK INJURIES</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col bg-white">
                        <div class="card">
                            <img src={img4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h6 class="card-title mx-auto">BRAIN INJURIES</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col bg-white">
                        <div class="card">
                            <img src={img5} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h6 class="card-title mx-auto text-center">BROKEN BONE INJURIES</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='item-injure'>
                <div className='grid grid-cols-1 sm:grid-cols-4'>
                    <div className='col '>
                        <div className='item injure_item'>
                            <strong>
                                <span>$28.0 </span>
                                 Million
                            </strong>
                            <p>Camp Lejeune Lawsuit Recovered</p>
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
            </div>
        </div>
  )
}

export default GetInTouch