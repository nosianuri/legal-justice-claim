import React, { useState } from 'react';
var data = require("../../LOW_DATA.json")

const Hbanner = () => {
    const [searchlaw, setSearchlaw] = useState("");
    const onSearch = (searchTerm) => {
        setSearchlaw(searchTerm);
        console.log('search', searchTerm);
    }
    return (
        <div style={{
            background: `url(https://i.ibb.co/jfdgXMs/Copy-of-Purple-Minimalist-World-Day-For-International-Justice-Facebook-Event-Cover-2000-727-px.jpg)`
        }} className=' bg-hero !bg-cover '>
            <div className='bg-black bg-opacity-50 lg:min-h-[580px]  min-h-[380px] flex  items-center'>
                <div className='sm:mt-10 mt-8 sm:px-10 px-1'>
                    <img src="https://i.ibb.co/HqmYDxT/Scale.png" alt="" className='w-24 mx-auto ' />
                    <h4 className='text-[23px] lg:text-[45px] md:text-[40px] expert text-white text-center'>Expert Legal Advocates for <br /> Winning Your</h4>
                    <h5 className="sliding-text text-[23px] lg:text-[45px] md:text-[40px] text-white font-medium compensation text-center tracking-widest">Lawsuit <br /> Compensation</h5>

                    <div className='bg-[#373536] mt-10 text-[#fff] py-5 px-10 mb-10 '>
                        <strong className='text-[#F8F8F8] uppercase  fnt'>Find the Lawsuit</strong>
                        <div className='mt-2'>
                            <div className='border border-[#fff] bg-[#fff]  p-1 font-medium grid sm:grid-cols-2 grid-cols-1'>
                                <div>
                                    <input className='bg-transparent outline-none w-full text-lg text-[#000] py-4 pl-3 pr-32' type="text" value={searchlaw} name="search" placeholder="Search Lawsuit..." onChange={(event) => { setSearchlaw(event.target.value) }} />
                                </div>
                                <div className='text-center bg-[#E1251A]'>
                                    <button onClick={() => onSearch(searchlaw)} ><div className=' font-[800] !text-[17.776px] py-4  '>File Lawsuit Now!</div></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hbanner