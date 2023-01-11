import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link to="/" className="navbar-logo">
          EPIC
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa-solid fa-circle-xmark' : 'fa-solid fa-bars'}></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/attorneys" className="nav-links" onClick={closeMobileMenu}>
              Attorneys
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar