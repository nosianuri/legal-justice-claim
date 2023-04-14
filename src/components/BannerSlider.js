import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var data = require("../LOW_DATA.json")

const BannerSlider = () => {
    const [searchlaw, setSearchlaw] = useState("");
    const images = [
        {
            id: 1,
            url: 'https://i.ibb.co/jfdgXMs/Copy-of-Purple-Minimalist-World-Day-For-International-Justice-Facebook-Event-Cover-2000-727-px.jpg',
        },
        {
            id: 2,
            url: 'https://i.ibb.co/ZTM1XR0/Copy-of-Purple-Minimalist-World-Day-For-International-Justice-Facebook-Event-Cover-2000-727-px-1.jpg',
        },
        {
            id: 3,
            url: 'https://i.ibb.co/QDDBw2p/Winning-Post-1.jpg',
        },
    ];
    const settings = {
        // dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    
    const onSearch = (searchTerm) => {
        setSearchlaw(searchTerm);
        console.log('search', searchTerm);
    }
    return (
        <div className="">
            <Slider {...settings}>
                {images.map((image) => (
                    <div key={image.id}>
                        <div className=" bg-no-repeat bg-hero !bg-cover" style={{
                            background: `url(${image.url})`
                        }}>
                            <div className='bg-black bg-opacity-50 lg:min-h-[580px]  min-h-[380px] flex  items-center'>
                                <div className='sm:mt-10 mt-8 sm:px-10 px-1'>
                                    <img src="https://i.ibb.co/HqmYDxT/Scale.png" alt="" className='!w-24 mx-auto ' />
                                    <h4 className='text-[23px] lg:text-[38px] md:text-[32px] expert text-white text-center leading-tight'>Expert Legal Advocates for <br /> Winning Your</h4>
                                    <h5 className="sliding-text text-[23px] lg:text-[45px] md:text-[40px] text-white font-medium compensation text-center tracking-widest leading-tight">Lawsuit <br /> Compensation</h5>

                                    <div className='bg-[#373536] mt-10 text-[#fff] py-5 px-10 mb-10 '>
                                        <strong className='text-[#F8F8F8] uppercase  fnt'>Find the Lawsuit</strong>
                                        <div className='mt-2'>
                                            <div className='border border-[#fff] bg-[#fff]  p-1 font-medium grid sm:grid-cols-2 grid-cols-1'>
                                                <div>
                                                    <input className='bg-transparent outline-none w-full text-lg text-[#000] py-4 pl-3 pr-32' type="text" value={searchlaw} name="search" placeholder="Select Lawsuit..." onChange={(event) => { setSearchlaw(event.target.value) }} />
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
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default BannerSlider