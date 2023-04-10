import React from 'react'
import { socialData } from './data';

const Social = () => {
  return (
    <div className='flex gap-x-[10px]'>
      {socialData.map((item, index) => {
        return (
          <a
            className='border border-white/20 bg-[#8bc53f] rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm text-[#fff] hover:text-[#fff] border-[#8bc53f] hover:border-[#8bc53f] hover:bg-[#198ec0] transition-all '
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