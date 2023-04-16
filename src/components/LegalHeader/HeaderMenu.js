import React, { useEffect, useRef, useState } from 'react';
import './LegalHeader.css';
import { FaSearch } from 'react-icons/fa';
var data = require("../../LOW_DATA.json")

const HeaderMenu = () => {
    const [searchlaw, setSearchlaw] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const handleMenu = () => {
        setShowMenu(!showMenu);
    };

    const onSearch = (searchTerm) => {
        setSearchlaw(searchTerm);
        console.log('search', searchTerm);
    }
    return (
        <div className='bg-[#131416] text-[#fff] py-2'>
            <div className='sm:block hidden'>
                <div className='flex justify-center gap-5 '>
                    <div className='text-[16px] px-8 py-2 border border-[#131416] border-r-gray-400 font-semibold hover:bg-[#333] hover:bg-opacity-30'><a href="/">HOME</a></div>
                    <div className='text-[16px] px-8 py-2 border border-[#131416] border-r-gray-400 font-semibold navigation__item hover:bg-[#333] hover:bg-opacity-30 !z-50 overflow-y-visible' onMouseEnter={handleDropdown}>LAWSUITS <i class="fa-solid fa-angle-down pl-1"></i>
                        {showDropdown && (
                            <ul className="dropdown_nav mt-2 fixed z-50">
                                <li className="dropdown__item py-1 pl-4 border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Roundup</a></li>
                                <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Camp Lejeune </a></li>
                                <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">MVA</a></li>
                                <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Talcome Powder</a></li>
                                <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">NEC</a></li>
                                <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Tylenol</a></li>
                                <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Fire Fighter Foam</a></li>
                                <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Hair Relaxer</a></li>
                            </ul>
                        )}
                    </div>
                    <div className='text-[16px] px-8 py-2 border border-[#131416] border-r-gray-400 font-semibold hover:bg-[#333] hover:bg-opacity-30'><a href="/legal-news">LEGAL NEWS</a></div>
                    <div className='text-[16px] px-8 py-2 border border-[#131416] border-r-gray-400 font-semibold hover:bg-[#333] hover:bg-opacity-30'><a href="/testimonial">TESTIMONIAL</a>
                    </div>
                    <div className='text-[16px] px-8 py-2 border border-[#131416] border-r-gray-400 font-semibold hover:bg-[#333] hover:bg-opacity-30'><a href="/about-us">ABOUT</a></div>
                    <div>
                        <div className=''>
                            <div className='border-2 border-[#fff] rounded px-3 py-2 font-medium'>
                                <input className='bg-transparent outline-none' type="text" value={searchlaw} name="search" placeholder="Search Lawsuit..." onChange={(event) => { setSearchlaw(event.target.value) }} />
                                <button onClick={() => onSearch(searchlaw)} ><FaSearch /></button>
                            </div>
                            <div className='dropdownS fixed z-50'>
                                {data.filter(item => {
                                    const searchTerm = searchlaw.toLowerCase();
                                    const fullName = item.name.toLowerCase();
                                    return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm
                                }).slice(0, 10)
                                    .map((item) => (
                                        <div key={item._id} className='dropdown-row' onClick={() => onSearch(item.name)}>{item.name}</div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='block sm:hidden'>
                <div  className='text-[16px] px-8 py-2 border border-[#131416] border-r-gray-400 font-semibold navigation__item hover:bg-[#333] hover:bg-opacity-30' onMouseEnter={handleMenu}>Menu <i class="fa-solid fa-angle-down pl-1"></i>
                    {showMenu && (
                        <ul className="dropdown_nav mt-2 fixed z-50">
                            <li className="dropdown__item py-1 pl-4 border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Home</a></li>
                            <li className="dropdown__item py-1 pl-4 border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Roundup</a></li>
                            <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Camp Lejeune </a></li>
                            <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">MVA</a></li>
                            <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Talcome Powder</a></li>
                            <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">NEC</a></li>
                            <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Tylenol</a></li>
                            <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Fire Fighter Foam</a></li>
                            <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Hair Relaxer</a></li>
                            <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Legal News</a></li>
                            <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Testimonial</a></li>
                            <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">About Us</a></li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu