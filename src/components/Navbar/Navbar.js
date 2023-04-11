import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/Asset 1@320x-8.png";
import Social from '../Shared/Header/Social';


const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Perform search logic here using the `searchTerm` state variable
    console.log(`Searching for: ${searchTerm}`);
  };
  return (
    <div className="navbar fixed z-50 bg-[#f6f6f6]">
      <div className="navbar-start hidden sm:block ml-16">
        <a href='/' className=" py-2">
          <img className='lg:w-24 w-14' src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden sm:block">
        <div className='flex items-center text-2xl'>
          <a className='text-[#198ec0] font-bold' href="/">Call Guida Today <span className='text-[#228B22]'>1-877-232-6848</span></a>
          <div className='ml-5'>
            <Social />
          </div>
        </div>
        <div className='lg:flex'>
          <ul className="menu menu-horizontal font-bold ">
            <li className='hover:bg-[#f6f6f6] hover:text-[#228B22] text-[#198ec0]'><NavLink to='/' className={({ isActive }) => isActive ? 'border border-[#f6f6f6] border-b-[#198ec0]' : 'hover:bg-[#f6f6f6] hover:text-[#228B22]'}>LAWSUITS</NavLink></li>
            <li className='hover:bg-[#f6f6f6] hover:text-[#228B22] text-[#198ec0]'><NavLink to='/contact' className={({ isActive }) => isActive ? 'border border-[#f6f6f6] border-b-[#198ec0]' : 'hover:bg-[#f6f6f6] hover:text-[#228B22]'}>LEGAL NEWS</NavLink></li>
            <li className='hover:bg-[#f6f6f6] text-[#198ec0]'><NavLink to='/contact' className={({ isActive }) => isActive ? 'border border-[#f6f6f6] border-b-[#198ec0]' : 'hover:bg-[#f6f6f6] hover:text-[#228B22]'}>TESTIMONIALS</NavLink></li>
            
            <li className='hover:bg-[#f6f6f6] text-[#198ec0]'><NavLink to='/contact' className={({ isActive }) => isActive ? 'bg-[#228B22]' : 'hover:bg-[#f6f6f6] hover:text-[#228B22]'}>CONTACT</NavLink></li>
          </ul>
        </div>
      </div>
      <div className='navbar-end hidden sm:block'>
        <div className="flex items-center w-1/2 justify-center mx-auto border border-gray-400 rounded-lg px-3 py-1 mr-24">
          <input
            className="w-full pr-12 bg-transparent outline-none"
            type="text"
            placeholder="Search Lawsuit"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button
            className="absolute right-24 top-0 h-full w-12 text-gray-600"
            onClick={handleSearch}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
      </div>
      {/* <div className='flex justify-between items-center gap-10'>
        <div className="dropdown ">
          <label tabindex="0" className="btn text-white bg-[#198ec0] lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" className="menu menu-compact text-white dropdown-content mt-3 p-2 shadow bg-[#f6f6f6] rounded w-52">
            <li className='hover:bg-[#228B22] text-[#198ec0]'><NavLink to='/contact' className={({ isActive }) => isActive ? 'bg-[#228B22]' : 'hover:bg-[#fff] hover:text-[#228B22]'}>Lawsuits</NavLink></li>
            <li className='hover:bg-[#228B22] text-[#198ec0]'><NavLink to='/contact' className={({ isActive }) => isActive ? 'bg-[#228B22]' : 'hover:bg-[#fff] hover:text-[#228B22]'}>Legal News</NavLink></li>
            <li className='hover:bg-[#228B22] text-[#198ec0]'><NavLink to='/contact' className={({ isActive }) => isActive ? 'bg-[#228B22]' : 'hover:bg-[#fff] hover:text-[#228B22]'}>Testimonials</NavLink></li>
           
            <li className='hover:bg-[#228B22] text-[#198ec0]'><NavLink to='/contact' className={({ isActive }) => isActive ? 'bg-[#228B22]' : 'hover:bg-[#fff] hover:text-[#228B22]'}>CONTACT</NavLink></li>
            <li className='hover:bg-[#228B22] text-[#198ec0]'><NavLink to='/contact' className={({ isActive }) => isActive ? 'bg-[#228B22]' : 'hover:bg-[#fff] hover:text-[#228B22]'}>CONTACT</NavLink></li>
            
          </ul>
        </div>
        <div className='navbar-center'>
          <a href='/' className="lg:pl-16 py-2">
            <img className='lg:w-24 w-14' src={logo} alt="" />
          </a>
        </div>
        <div className=''><a className='text-[#198ec0] font-bold flex' href="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
        </svg>
          <span className='text-[#228B22] pl-3'>1-877-232-6848</span></a></div>
      </div> */}
      <div>
      </div>
    </div>
  )
}

export default Navbar;