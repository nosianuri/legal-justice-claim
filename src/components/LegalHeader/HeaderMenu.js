import React, { useEffect, useRef, useState } from 'react';
import './LegalHeader.css';
import { FaSearch } from 'react-icons/fa';
var data = require("../../LOW_DATA.json")

const HeaderMenu = () => {
    const [searchlaw, setSearchlaw] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const toggleShowMore = () => setOpen(!open);
    const toggleShowMenu = () => setIsOpen(!isOpen);
    // const sectionRef = useRef(null);
    const menus = [
        {
            id: 1,
            name: 'Camp Lejeune',
            Link: '/camplejeune',
        },
        {
            id: 2,
            name: 'Fire Fighter Foam',
            Link: '/fire-fighter-foam',
        },
        {
            id: 3,
            name: 'Hair Relaxer',
            Link: '/hair-relaxer',
        },
        {
            id: 4,
            name: 'MVA',
            Link: '/mva',
        },
        {
            id: 5,
            name: 'NEC',
            Link: '/nec',
        },
        {
            id: 6,
            name: 'RoundUp',
            Link: '/roundup',
        },
        {
            id: 7,
            name: 'Talcum Powder',
            Link: '/talcome',
        },
        {
            id: 8,
            name: 'Tylenol',
            Link: '/tylenol',
        },
    ];
    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (sectionRef.current && !sectionRef.current.contains(event.target)) {
    //             setIsOpen(false);
    //         }
    //     };

    //     document.addEventListener('click', handleClickOutside);

    //     return () => {
    //         document.removeEventListener('click', handleClickOutside);
    //     };
    // }, [sectionRef]);

    // const handleClick = () => {
    //     setIsOpen(!isOpen);
    // };
    // const clickLawsuits = () => {
    //     setOpen(!isOpen);
    // };

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
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
                                <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/camplejeune">Camp Lejeune </a></li>
                                <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/fire-fighter-foam">Fire Fighter Foam</a></li>
                                <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/hair-relaxer">Hair Relaxer</a></li>
                                <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/mva">MVA</a></li>
                                <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/nec">NEC</a></li>
                                <li className="dropdown__item py-1 pl-4 border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/roundup">Roundup</a></li>
                                <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/talcome">Talcome Powder</a></li>
                                <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/tylenol">Tylenol</a></li>


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
                <div className='text-[16px] px-8 py-2 border border-[#131416] border-r-gray-400 font-semibold navigation__item hover:bg-[#333] hover:bg-opacity-30' onClick={toggleShowMenu}>{isOpen ? 'Menu' : 'Menu'} <i class="fa-solid fa-angle-down pl-1"></i>
                    {isOpen && (
                        <ul className="dropdown_nav mt-2 absolute z-50">
                            <li className="dropdown__item py-1 pl-4 border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/">Home</a></li>
                            <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]" > Lawsuits<i class="fa-solid fa-angle-down pl-1"></i>
                                <div className=''>
                                    {menus.slice(0, open ? menus.length : 6).map(city => (
                                        <div key={city} className=" ">
                                            <span className="">
                                                <li className=" py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href={city.Link}>{city.name} </a></li>
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                {/* {open && (
                                    <ul className=" mt-2 ">
                                        <li className=" py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/camplejeune">Camp Lejeune </a></li>
                                        <li className=" py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/fire-fighter-foam">Fire Fighter Foam</a></li>
                                        <li className=" py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/hair-relaxer">Hair Relaxer</a></li>
                                        <li className=" py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/mva">MVA</a></li>
                                        <li className=" py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/nec">NEC</a></li>
                                        <li className=" py-1 pl-4 border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/roundup">Roundup</a></li>
                                        <li className=" py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/talcome">Talcome Powder</a></li>
                                        <li className=" py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/tylenol">Tylenol</a></li>
                                    </ul>
                                )} */}
                            </li>
                            <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/legal-news">Legal News</a></li>
                            <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/testimonial">Testimonial</a></li>
                            <li className="dropdown__item py-1 pl-4  border border-[#cf2e2e] border-b-[#be2929] hover:bg-[#cc4545]"><a href="/about-us">About Us</a></li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu