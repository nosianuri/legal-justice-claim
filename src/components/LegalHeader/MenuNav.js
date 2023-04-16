import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
var data = require("../../LOW_DATA.json")

const MenuNav = () => {
    const [searchlaw, setSearchlaw] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const onSearch = (searchTerm) => {
        setSearchlaw(searchTerm);
        console.log('search', searchTerm);
    }
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
        <div className="dropdown !overflow-visible">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li tabIndex={0}>
                    <a className="justify-between !overflow-visible">
                        Parent
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                    </a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </li>
                <li><a>Item 3</a></li>
            </ul>
        </div>
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li tabIndex={0} className='overflow-visible'>
                <a>
                    Parent
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </a>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </li>
            <li><a>Item 3</a></li>
        </ul>
    </div>
    <div className="navbar-end">
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
  )
}

export default MenuNav