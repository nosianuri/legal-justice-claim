// import React, { useState } from 'react';
// import './Navbar.css';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar-nav">
//       <div className="navbar-header">
//         <button type="button" className="navbar-toggle" onClick={toggleDropdown}>
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//         </button>
//         <a href="#" className="navbar-brand">My Website</a>
//       </div>
//       <div className={`navbar-collapse ${isOpen ? "show" : ""}`}>
//         <ul className="nav navbar-nav">
//           <li className="nav-item">
//             <a href="#" className="nav-link">Home</a>
//           </li>
//           <li className="nav-item dropdown">
//             <a href="#" className="nav-link" onClick={toggleDropdown}>Dropdown</a>
//             <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
//               <a href="#" className="dropdown-item">Option 1</a>
//               <a href="#" className="dropdown-item">Option 2</a>
//               <a href="#" className="dropdown-item">Option 3</a>
//             </div>
//           </li>
//           <li className="nav-item">
//             <a href="#" className="nav-link">About</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
