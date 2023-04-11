import React, { useState } from 'react';
import { FaSearch, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from "../../assets/Asset 1@320x-8.png";
import './Navigation.css';

function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-container">
      <nav className="navbar">
      <a href="/">
      <img className='lg:w-24 w-14' src={logo} alt="" />
      </a>
        <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
          <li className='hover:border-2 border-[#f6f6f6] border-b-[#198ec0]'><a href="#">LAWSUITS</a></li>
          <li className='hover:border-2 border-[#f6f6f6] border-b-[#198ec0]'><a href="#">LEGAL NEWS</a></li>
          <li className='hover:border-2 border-[#f6f6f6] border-b-[#198ec0]'><a href="#">TESTIMONIALS</a></li>
          <li className='hover:border-2 border-[#f6f6f6] border-b-[#198ec0]'><a href="#">CONTACT</a></li>
          <li>
            <form action="#" method="get">
            <div className='border border-sky-600 rounded-lg px-3 py-1'>
              <input className='bg-transparent outline-none' type="text" name="search" placeholder="Search Lawsuit..." />
              <button type="submit"><FaSearch /></button>
              </div>
            </form>
          </li>
          <li className="social-icons text-[#198ec0]">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </li>
        </ul>
        <div className="menu-icon pr-5" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </div>
  );
}

export default NavigationMenu;
