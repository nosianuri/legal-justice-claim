import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
var data = require("../LOW_DATA.json")

const BannerTop = () => {
    const [searchlaw, setSearchlaw] = useState("");
    const [selectedValue, setSelectedValue] = useState('');
    const navigate = useNavigate();
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
        // console.log(event.target.value);
        if (event.target.value == 'camplejeune') {
            navigate('/camplejeune');
        }
        else if (event.target.value == 'nec') {
            navigate('/nec');
        }
        else if (event.target.value == 'mva') {
            navigate('/mva');
        }
        else if (event.target.value == 'roundup') {
            navigate('/roundup');
        }
        else if (event.target.value == 'hair-relaxer') {
            navigate('/hair-relaxer');
        }
        else if (event.target.value == 'talcome') {
            navigate('/talcome');
        }
        else if (event.target.value == 'tylenol') {
            navigate('/tylenol');
        }
        else if (event.target.value == 'fire-fighter-foam') {
            navigate('/fire-fighter-foam');
        }
        else {
            navigate('/');
        }
    };
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
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const onSearch = (searchTerm) => {
        setSearchlaw(searchTerm);
        console.log('search', searchTerm);
    }

    return (
        <div className='bg-black bg-opacity-50 lg:min-h-[580px]  min-h-[380px] flex sm:justify-start justify-center items-center'>
            <div className='sm:mt-10 mt-8 sm:px-10 px-1'>
                <img src="https://i.ibb.co/HqmYDxT/Scale.png" alt="" className='!w-24 mx-auto ' />
                <h4 className='text-[23px] lg:text-[38px] md:text-[32px] expert text-white text-center leading-tight'>Expert Legal Advocates for <br /> Winning Your</h4>
                <h5 className="sliding-text text-[23px] lg:text-[45px] md:text-[40px] text-white font-medium compensation text-center tracking-widest leading-tight !max-h-13 !overflow-y-hidden">Lawsuit <br /> Compensation</h5>

                <div className='bg-[#373536] mt-10 text-[#fff] py-5 px-10 mb-24 sm:w-[750px] '>
                    <strong className='text-[#F8F8F8] uppercase fnt'>Find the Lawsuit</strong>
                    <div className='mt-2'>
                        <div className='border border-[#fff] bg-[#fff]  p-1 font-medium grid sm:grid-cols-2 grid-cols-1'>
                            <select name="status" id="select-option" value={selectedValue} onChange={handleSelectChange} className="border border-white text-[#333] block py-2 px-4 w-full rounded focus:outline-none font-semibold" >
                                <option value="">Select a Lawsuit</option>
                                <option value="camplejeune">
                                    Camp Lejeune
                                </option>
                                <option value="fire-fighter-foam">Fire Fighting Foam</option>
                                <option value="hair-relaxer">Hair Relaxer</option>
                                <option value="mva">MVA</option>
                                <option value="nec">
                                    NEC
                                </option>
                                <option value="roundup">
                                    Roundup
                                </option>
                                <option value="talcome">Talcum Powder</option>
                                <option value="tylenol">Tylenol</option>
                            </select>


                            <div className='text-center bg-[#E1251A] border border-[#E1251A] hover:bg-[#fff] hover:text-[#E1251A]'>
                                <button onClick={() => onSearch(searchlaw)} ><div className=' font-[800] !text-[17.776px] py-4  '>File Lawsuit Now!</div></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerTop