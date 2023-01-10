import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/lawsuit.png";

const Navbar = () => {

  return (
    <div class="navbar bg-[#003144]">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact text-white dropdown-content mt-3 p-2 shadow bg-[#003144] rounded-box w-52">
          <li><NavLink to='/' className={({isActive}) => isActive ? 'bg-[#FD5D14]' : 'hover:bg-[#FD5D14]'}>Home</NavLink></li>
          
            <li tabindex="0">
              <a class="justify-between">
                CASES WE CAN HELP YOU WITH
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
              </a>
              <ul class="p-2">
                <li className='hover:bg-[#FD5D14]'><a>Blog</a></li>
                <li className='hover:bg-[#FD5D14]'><a>Event</a></li>
                <li className='hover:bg-[#FD5D14]'><a>Faq</a></li>
              </ul>
            </li>
            <li className='hover:bg-[#FD5D14]'><NavLink  to='/contact'  className={({isActive}) => isActive ? 'bg-[#FD5D14]' : 'hover:bg-[#FD5D14]'}>CONTACT</NavLink></li>
          <li className='hover:bg-[#FD5D14]'><NavLink to='/attorneys'  className={({isActive}) => isActive ? 'bg-[#FD5D14]' : 'hover:bg-[#FD5D14]'}>ATTORNEYS</NavLink></li>
          </ul>
        </div>
        <a href='/' class="lg:pl-16">
          <img className='w-56' src={logo} alt="" />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal text-white">
        <li><NavLink to='/' className={({isActive}) => isActive ? 'bg-[#FD5D14]' : 'hover:bg-[#FD5D14]'}>Home</NavLink></li>
          
            <li tabindex="0">
              <a class="justify-between">
                CASES WE CAN HELP YOU WITH
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
              </a>
              <ul class="p-2">
                <li className='hover:bg-[#FD5D14]'><a>Blog</a></li>
                <li className='hover:bg-[#FD5D14]'><a>Event</a></li>
                <li className='hover:bg-[#FD5D14]'><a>Faq</a></li>
              </ul>
            </li>
            <li className='hover:bg-[#FD5D14]'><NavLink  to='/contact'  className={({isActive}) => isActive ? 'bg-[#FD5D14]' : 'hover:bg-[#FD5D14]'}>CONTACT</NavLink></li>
          <li className='hover:bg-[#FD5D14]'><NavLink to='/attorneys'  className={({isActive}) => isActive ? 'bg-[#FD5D14]' : 'hover:bg-[#FD5D14]'}>ATTORNEYS</NavLink></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar;