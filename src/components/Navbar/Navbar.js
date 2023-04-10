import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/Asset 1@320x-8.png";


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
    <div className="navbar fixed z-50 bg-[#09193d]">
      <div className="navbar-start">
        <a href='/' className="lg:pl-16 py-2">
          <img className='lg:w-24 w-14' src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-white lg:pr-32">
          <li className='mx-1'><NavLink to='/' className={({ isActive }) => isActive ? 'bg-[#BD902D]' : 'hover:bg-[#BD902D]'}>LAWSUITS </NavLink></li>
          <li className='hover:bg-[#BD902D]'><NavLink to='/contact' className={({ isActive }) => isActive ? 'bg-[#BD902D]' : 'hover:bg-[#BD902D]'}>LEGAL NEWS</NavLink></li>
          <li className='hover:bg-[#BD902D]'><NavLink to='/contact' className={({ isActive }) => isActive ? 'bg-[#BD902D]' : 'hover:bg-[#BD902D]'}>TESTIMONIALS</NavLink></li>
          {/* <li tabindex="0">
            <a className="justify-between">
              CASES WE CAN HELP YOU WITH
              <i className='fas fa-caret-down' />
            </a>
            <ul className="p-2 bg-[#13100E]">
              <li className='hover:bg-[#BD902D]'><a>Blog</a></li>
              <li className='hover:bg-[#BD902D]'><a>Event</a></li>
              <li className='hover:bg-[#BD902D]'><a>Faq</a></li>
            </ul>
          </li> */}
          <li className='hover:bg-[#BD902D]'><NavLink to='/contact' className={({ isActive }) => isActive ? 'bg-[#BD902D]' : 'hover:bg-[#BD902D]'}>CONTACT</NavLink></li>
        </ul>

      </div>
      <div className='navbar-end lg:pr-24'>
        <div className="flex items-center border rounded-lg px-3 py-2">
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
          <li><NavLink to='/' className={({ isActive }) => isActive ? 'bg-[#BD902D]' : 'hover:bg-[#BD902D]'}>Lawsuits </NavLink></li>
          <li><NavLink to='/' className={({ isActive }) => isActive ? 'bg-[#BD902D]' : 'hover:bg-[#BD902D]'}>Legal News </NavLink></li>
          <li><NavLink to='/' className={({ isActive }) => isActive ? 'bg-[#BD902D]' : 'hover:bg-[#BD902D]'}>Testimonials </NavLink></li>

          {/* <li tabindex="0">
            <a className="justify-between">
              CASES WE CAN HELP YOU WITH
              <i className='fas fa-caret-down' />
            </a>
            <ul className="p-2 ">
              <li className='hover:bg-[#BD902D]'><a>Blog</a></li>
              <li className='hover:bg-[#BD902D]'><a>Event</a></li>
              <li className='hover:bg-[#BD902D]'><a>Faq</a></li>
            </ul>
          </li> */}
          <li className='hover:bg-[#BD902D]'><NavLink to='/contact' className={({ isActive }) => isActive ? 'bg-[#BD902D]' : 'hover:bg-[#BD902D]'}>CONTACT US</NavLink></li>
          <li className='hover:bg-[#BD902D]'><NavLink to='/attorneys' className={({ isActive }) => isActive ? 'bg-[#BD902D]' : 'hover:bg-[#BD902D]'}>ATTORNEYS</NavLink></li>
        </ul>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Navbar;