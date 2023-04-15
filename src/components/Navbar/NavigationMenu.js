import React, { useState } from 'react';
import { FaSearch, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from "../../assets/Asset 1@320x-8.png";
import './Navigation.css';
import Social from '../Shared/Header/Social';
var data = require("../../LOW_DATA.json")

function NavigationMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const [searchlaw, setSearchlaw] = useState("");
    const onSearch = (searchTerm) => {
        setSearchlaw(searchTerm);
        console.log('search', searchTerm);
    }

    return (
        <div className="nav-container ">
            <nav className="navbar">
                <a href="/">
                    <img className='lg:w-24 w-14' src={logo} alt="" /> 
                    <p className='sm:text-2xl pl-2 font-bold legal overflow-y-hidden'>Legal Justice Claim</p>
                </a>
                <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
                    <li className='hover:border-2 border-[#f6f6f6] border-b-[#800020]  font-bold'><a href="#">LAWSUITS</a></li>
                    <li className='hover:border-2 border-[#f6f6f6] border-b-[#800020]  font-bold'><a href="#">LEGAL NEWS</a></li>
                    <li className='hover:border-2 border-[#f6f6f6] border-b-[#800020]  font-bold'><a href="#">TESTIMONIALS</a></li>
                    <li className='hover:border-2 border-[#f6f6f6] border-b-[#800020] font-bold '><a href="#">CONTACT</a></li>
                    <li className=''>
                        <div className='border border-[#800020] rounded-lg px-3 py-1 font-medium'>
                            <input className='bg-transparent outline-none' type="text" value={searchlaw} name="search" placeholder="Search Lawsuit..." onChange={(event) => { setSearchlaw(event.target.value) }} />
                            <button onClick={() => onSearch(searchlaw)} ><FaSearch /></button>
                        </div>
                        <div className='dropdown'>
                            {data.filter(item => {
                                const searchTerm = searchlaw.toLowerCase();
                                const fullName = item.name.toLowerCase();
                                return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm
                            }).slice(0,10)
                                .map((item) => (
                                    <div key={item._id} className='dropdown-row' onClick={() => onSearch(item.name)}>{item.name}</div>
                                ))}
                        </div>
                    </li>
                    <Social />
                </ul>
                <div className="menu-icon pr-5" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </div>
            </nav>
        </div>
    );
}

export default NavigationMenu;
