import React, { useState } from 'react';
import logo from "../../assets/Asset 1@320x-8.png";
import { FaSearch } from 'react-icons/fa';
var data = require("../../LOW_DATA.json")

const HeadTop = () => {
    const [searchlaw, setSearchlaw] = useState("");
    const onSearch = (searchTerm) => {
        setSearchlaw(searchTerm);
        console.log('search', searchTerm);
    }
  return (
    <div className=' transparent lehead'>
    <div className='flex justify-between sm:mx-36'>
        <div className='flex items-center py-2'>
            <img src={logo} alt="" className='lg:w-24 w-14' />
            <p className='sm:text-xl pl-2 font-bold legal'>Legal Justice Claim</p>
        </div>
        <div className='sm:block hidden'>
            <div className='bg-[#cf2e2e] text-[#fff] px-4 py-2 font-medium text-[22px] hover:underline' >Free Consultation</div>
            <div className='mt-2'>
                        <div className='border-2 border-gray-800 rounded px-3 py-1 font-medium'>
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
                    </div>
        </div>
    </div>
    </div>
  )
}

export default HeadTop