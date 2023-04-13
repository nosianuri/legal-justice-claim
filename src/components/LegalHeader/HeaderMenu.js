import React, { useState } from 'react';
import './LegalHeader.css';

const HeaderMenu = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showTestimonial, setShowTestimonial] = useState(false);

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const handleTestimonial = () => {
        setShowDropdown(!showDropdown);
    };
    return (
        <div className='bg-[#131416] text-[#fff] py-2'>
            <div className='sm:block hidden'>
                <div className='flex justify-center gap-5 '>
                    <div className='text-[16px] px-8 py-2 border border-[#131416] border-r-gray-400 font-semibold hover:bg-[#333] hover:bg-opacity-30'><a href="/">HOME</a></div>
                    <div className='text-[16px] px-8 py-2 border border-[#131416] border-r-gray-400 font-semibold navigation__item hover:bg-[#333] hover:bg-opacity-30' onMouseEnter={handleDropdown}>LAWSUITS <i class="fa-solid fa-angle-down pl-1"></i>
                        {showDropdown && (
                            <ul className="dropdown mt-2">
                                <li className="dropdown__item border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Rounpdup</a></li>
                                <li className="dropdown__item border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Camp Lejeune </a></li>
                                <li className="dropdown__item border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">MVA</a></li>
                                <li className="dropdown__item border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Talcome</a></li>
                                <li className="dropdown__item border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">NEC</a></li>
                                <li className="dropdown__item border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Tylenol</a></li>
                                <li className="dropdown__item border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Fire Fighter</a></li>
                                <li className="dropdown__item border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Hair Relaxer</a></li>
                            </ul>
                        )}
                    </div>
                    <div className='text-[16px] px-8 py-2 border border-[#131416] border-r-gray-400 font-semibold hover:bg-[#333] hover:bg-opacity-30'><a href="/">LEGAL NEWS</a></div>
                    <div className='text-[16px] px-8 py-2 border border-[#131416] border-r-gray-400 font-semibold hover:bg-[#333] hover:bg-opacity-30'><a href="/">TESTIMONIAL</a>
                    </div>
                    <div className='text-[16px] px-8 py-2 border border-[#131416] border-r-gray-400 font-semibold hover:bg-[#333] hover:bg-opacity-30'><a href="/">BLOG</a></div>
                    <div className='text-[16px] px-8 py-2 border border-[#131416] border-r-gray-400 font-semibold hover:bg-[#333] hover:bg-opacity-30'><a href="/">CONTACT</a></div>
                </div>
            </div>
            <div className='block sm:hidden'>
                <div className='text-[16px] px-8 py-2 border border-[#131416] border-r-gray-400 font-semibold navigation__item hover:bg-[#333] hover:bg-opacity-30' onMouseEnter={handleDropdown}>Menu <i class="fa-solid fa-angle-down pl-1"></i>
                    {showDropdown && (
                        <ul className="dropdown mt-2">
                            <li className="dropdown__item border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Rounpdup</a></li>
                            <li className="dropdown__item border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Camp Lejeune </a></li>
                            <li className="dropdown__item border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">MVA</a></li>
                            <li className="dropdown__item border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Talcome</a></li>
                            <li className="dropdown__item border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">NEC</a></li>
                            <li className="dropdown__item border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Tylenol</a></li>
                            <li className="dropdown__item border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Fire Fighter</a></li>
                            <li className="dropdown__item border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Hair Relaxer</a></li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu