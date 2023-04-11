import React from 'react'
import { socialData } from './data';

const Social = () => {
  return (
    <div className='flex gap-x-[10px]'>
      {socialData.map((item, index) => {
        return (
          <a
            className='border border-white/20 bg-[#228B22] rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm text-[#fff] hover:text-[#fff] border-[#228B22] hover:border-[#228B22] hover:bg-[#800020] transition-all '
            href={item.href}
            key={index}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  )
}

export default Social