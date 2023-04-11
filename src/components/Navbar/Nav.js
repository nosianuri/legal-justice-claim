import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">Logo</Link>
                <div className="menu-icon" onClick={toggle}>
                    <FaBars />
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-links">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className='sm:block hidden'>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            </div>
        </nav>
    );
};

export default Nav;