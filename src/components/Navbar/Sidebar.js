import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
      <div className="sidebar-header">
        <Link to="/" className="sidebar-logo">Logo</Link>
        <div className="close-icon" onClick={toggle}>
          <FaTimes />
        </div>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="/" className="sidebar-links" onClick={toggle}>Home</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/about" className="sidebar-links" onClick={toggle}>About</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/contact" className="sidebar-links" onClick={toggle}>Contact</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;