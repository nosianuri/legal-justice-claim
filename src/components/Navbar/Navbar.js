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
      <div className="navbar-start">
        <a href='/' className="lg:pl-16 py-2">
          <img className='lg:w-24 w-14' src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden sm:block">
        <div className='flex items-center text-2xl'>
          <a className='text-[#198ec0] font-bold' href="/">Call Guida Today <span className='text-[#8bc53f]'>1-877-232-6848</span></a>
          <div className='ml-5'>
          <Social />
          </div>
          
        </div>
        <div className='lg:flex'>
          <ul className="menu menu-horizontal font-bold ">
            <li className='hover:bg-[#fff] hover:text-[#8bc53f] text-[#198ec0]'><NavLink to='/' className={({ isActive }) => isActive ? 'bg-[#fff]' : 'hover:bg-[#fff] hover:text-[#8bc53f]'}>LAWSUITS</NavLink></li>
            <li className='hover:bg-[#fff] hover:text-[#8bc53f] text-[#198ec0]'><NavLink to='/contact' className={({ isActive }) => isActive ? 'bg-[#fff]' : 'hover:bg-[#fff] hover:text-[#8bc53f]'}>LEGAL NEWS</NavLink></li>
            <li className='hover:bg-[#fff] text-[#198ec0]'><NavLink to='/contact' className={({ isActive }) => isActive ? 'bg-[#fff]' : 'hover:bg-[#fff] hover:text-[#8bc53f]'}>TESTIMONIALS</NavLink></li>
            {/* <li tabindex="0">
            <a className="justify-between">
              CASES WE CAN HELP YOU WITH
              <i className='fas fa-caret-down' />
            </a>
            <ul className="p-2 bg-[#13100E]">
              <li className='hover:bg-[#8bc53f]'><a>Blog</a></li>
              <li className='hover:bg-[#8bc53f]'><a>Event</a></li>
              <li className='hover:bg-[#8bc53f]'><a>Faq</a></li>
            </ul>
          </li> */}
            <li className='hover:bg-[#8bc53f] text-[#198ec0]'><NavLink to='/contact' className={({ isActive }) => isActive ? 'bg-[#8bc53f]' : 'hover:bg-[#fff] hover:text-[#8bc53f]'}>CONTACT</NavLink></li>
          </ul>

         
        </div>
      </div>
<div className='navbar-end'>
<div className="flex items-center border border-gray-400 rounded-lg px-3 py-1 mr-24">
            <input
              className="w-full pr-12 bg-transparent outline-none"
              type="text"
              placeholder="Search"
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
              {/* <SearchIcon className="h-5 w-5 mx-auto" /> */}
            </button>
          </div>
</div>
      <div className="dropdown ">
        <label tabindex="0" className="btn text-white lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" className="menu menu-compact text-white dropdown-content mt-3 p-2 shadow bg-[#13100E] rounded-box w-52">
          <li><NavLink to='/' className={({ isActive }) => isActive ? 'bg-[#8bc53f]' : 'hover:bg-[#8bc53f]'}>Lawsuits </NavLink></li>
          <li><NavLink to='/' className={({ isActive }) => isActive ? 'bg-[#8bc53f]' : 'hover:bg-[#8bc53f]'}>Legal News </NavLink></li>
          <li><NavLink to='/' className={({ isActive }) => isActive ? 'bg-[#8bc53f]' : 'hover:bg-[#8bc53f]'}>Testimonials </NavLink></li>

          {/* <li tabindex="0">
            <a className="justify-between">
              CASES WE CAN HELP YOU WITH
              <i className='fas fa-caret-down' />
            </a>
            <ul className="p-2 ">
              <li className='hover:bg-[#8bc53f]'><a>Blog</a></li>
              <li className='hover:bg-[#8bc53f]'><a>Event</a></li>
              <li className='hover:bg-[#8bc53f]'><a>Faq</a></li>
            </ul>
          </li> */}
          <li className='hover:bg-[#8bc53f]'><NavLink to='/contact' className={({ isActive }) => isActive ? 'bg-[#8bc53f]' : 'hover:bg-[#8bc53f]'}>CONTACT US</NavLink></li>
          <li className='hover:bg-[#8bc53f]'><NavLink to='/attorneys' className={({ isActive }) => isActive ? 'bg-[#8bc53f]' : 'hover:bg-[#8bc53f]'}>ATTORNEYS</NavLink></li>
        </ul>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Navbar;