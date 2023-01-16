import React from 'react';
import { navData } from './data';

const Nav = () => {
  return (
    <nav className='w-full h-full bg-[#BD902D]'>
      <ul className='h-full flex flex-col justify-center items-center '>
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a
                className='text-md capitalize font-primary italic hover:text-dark transition-all duration-300'
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default Nav