import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/Asset 1@320x-8.png";

const Navbar = () => {

  return (
    <div class="navbar fixed z-50 bg-[#13100E]">
      <div class="navbar-start">
        
        <a href='/' class="lg:pl-16 py-2">
          <img className='lg:w-24 w-14' src={logo} alt="" />
        </a>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal text-white lg:pr-32">
        <li><NavLink to='/' className={({isActive}) => isActive ? 'bg-[#BD902D]' : 'hover:bg-[#BD902D]'}>Home</NavLink></li>
          
            <li tabindex="0">
              <a class="justify-between">
                CASES WE CAN HELP YOU WITH
                <i className='fas fa-caret-down' />
              </a>
              <ul class="p-2 bg-[#13100E]">
                <li className='hover:bg-[#BD902D]'><a>Blog</a></li>
                <li className='hover:bg-[#BD902D]'><a>Event</a></li>
                <li className='hover:bg-[#BD902D]'><a>Faq</a></li>
              </ul>
            </li>
            <li className='hover:bg-[#BD902D]'><NavLink  to='/contact'  className={({isActive}) => isActive ? 'bg-[#BD902D]' : 'hover:bg-[#BD902D]'}>CONTACT</NavLink></li>
          <li className='hover:bg-[#BD902D]'><NavLink to='/attorneys'  className={({isActive}) => isActive ? 'bg-[#BD902D]' : 'hover:bg-[#BD902D]'}>ATTORNEYS</NavLink></li>
        </ul>
      </div>
      <div class="dropdown ">
          <label tabindex="0" class="btn text-white lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact text-white dropdown-content mt-3 p-2 shadow bg-[#13100E] rounded-box w-52">
          <li><NavLink to='/' className={({isActive}) => isActive ? 'bg-[#BD902D]' : 'hover:bg-[#BD902D]'}>Home</NavLink></li>
          
            <li tabindex="0">
              <a class="justify-between">
                CASES WE CAN HELP YOU WITH
                <i className='fas fa-caret-down' />
              </a>
              <ul class="p-2 ">
                <li className='hover:bg-[#BD902D]'><a>Blog</a></li>
                <li className='hover:bg-[#BD902D]'><a>Event</a></li>
                <li className='hover:bg-[#BD902D]'><a>Faq</a></li>
              </ul>
            </li>
            <li className='hover:bg-[#BD902D]'><NavLink  to='/contact'  className={({isActive}) => isActive ? 'bg-[#BD902D]' : 'hover:bg-[#BD902D]'}>CONTACT</NavLink></li>
          <li className='hover:bg-[#BD902D]'><NavLink to='/attorneys'  className={({isActive}) => isActive ? 'bg-[#BD902D]' : 'hover:bg-[#BD902D]'}>ATTORNEYS</NavLink></li>
          </ul>
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default Navbar;