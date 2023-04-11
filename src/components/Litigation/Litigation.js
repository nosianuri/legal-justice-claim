import React from 'react';
import elmiron from '../../assets/necl.jfif';
import litigation1 from '../../assets/zantac.webp';
import litigation2 from '../../assets/litigation-bg-elmiron.jpg';
import litigation3 from '../../assets/litigation-bg-belviq.jpg';
import litigation4 from '../../assets/litigation4.jpg';
import litigation5 from '../../assets/litigation5.jpg';
import Heading from '../Shared/Heading/Heading';

const Litigation = () => {
  return (
    <div className='max-w-7xl mx-auto px-1'>
      {/* <div className='flex mt-10 space-x-6'>
        <img src={elmiron} alt="" />
        <div>
          <p className='font-semibold text-[#300303] text-lg'><a className='hover:text-[#800020]' href="/nec"><span>NEC</span> <span className=''>LAWSUITS ARE NOW BEING FILED</span></a></p>
          <p>TOXIC BABY FORMULA NEC LAWSUIT UPDATE JANUARY 2023 | NEC FORMULA LAWSUIT</p>
          <p className='underline text-md font-semibold text-[#800020]'><a className='hover:text-[#13100E]' href="/nec">Read More »</a></p>
        </div>
      </div> */}
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 my-10' >

        <div  data-aos='fade-up' data-aos-delay='500'>
          <div className=''>
            <Heading title='Drug Lawsuit' />
            {/* <h2 className='text-xl  text-white pl-5 py-2'>Medical Litigation</h2> */}
          </div>

          <div className='flex space-x-5 mt-5'>
          <div className='image-box'>
          <img className='w-auto h-auto' src='https://i.ibb.co/2W415ds/Roundup-1.jpg' alt="" />
          </div>
            <div>
              <h3 className='text-[#13100E]  text-lg'><a className='hover:text-[#800020]' href="/zantac">Round Up</a></h3>
              <h5 className='text-[#300303] text-md leading-none mb-1'>FDA calls for Zantac to be pulled from market immediately</h5>
              <p className='text-xs'>The FDA has warned that Zantac® may be contaminated with cancer-causing agent...<span className='text-[#800020] font-bold'><a className='hover:text-[#13100E]' href="/zantac"> MORE »</a></span></p>
            </div>
          </div>
          <div className='flex space-x-5 mt-5'>
          <div className='image-box'>
          <img className='w-auto h-auto' src='https://i.ibb.co/7QSdd2z/camp-lejeune.png' alt="" />
          </div>
            
            <div>
              <h3 className='text-[#13100E]  text-lg'><a className='hover:text-[#800020]' href="/">Camp Lejeune</a></h3>
              <h5 className='text-[#300303] text-md leading-none mb-1'>FDA calls for Zantac to be pulled from market immediately</h5>
              <p className='text-xs'>The FDA has warned that Zantac® may be contaminated with cancer-causing agent...<span className='text-[#800020] font-bold'><a className='hover:text-[#13100E]' href="/">MORE »</a></span></p>
            </div>
          </div>
          <div className='flex space-x-5 mt-5'>
          <div className='image-box'>
          <img className='w-auto' src='https://i.ibb.co/7QSdd2z/camp-lejeune.png' alt="" />
          </div>
            
            <div>
              <h3 className='text-[#13100E] text-lg'><a className='hover:text-[#800020]' href="/">MVA
              </a></h3>
              <h5 className='text-[#300303] text-md leading-none mb-1'>FDA calls for Zantac to be pulled from market immediately</h5>
              <p className='text-xs'>The FDA has warned that Zantac® may be contaminated with cancer-causing agent...<span className='text-[#800020] font-bold'><a className='hover:text-[#13100E]' href="/">MORE »</a></span></p>
            </div>
          </div>
        </div>
        <div data-aos='fade-down' data-aos-delay='500'>
          <div className=''>
            <Heading title='Medical Lawsuit' />
            {/* <h2 className='text-xl text-white pl-5 py-2 '>Drug Litigation</h2> */}
          </div>

          <div className='flex space-x-5 mt-5'>
          <div className='image-box'>
          <img className='w-auto h-auto' src='https://i.ibb.co/VQPgs12/talcom-powder.jpg' alt="" />
          </div>
            
            <div>
              <h3 className='text-[#13100E] text-lg'><a className='hover:text-[#800020]' href="/">Talcom Powder</a></h3>
              <h5 className='text-[#300303] text-md leading-none mb-1'>FDA calls for Zantac to be pulled from market immediately</h5>
              <p className='text-xs'>The FDA has warned that Zantac® may be contaminated with cancer-causing agent...<span className='text-[#800020] font-bold'><a className='hover:text-[#13100E]' href="/">MORE »</a></span></p>
            </div>
          </div>
          <div className='flex space-x-5 mt-5'>
          <div className='image-box'>
          <img className='w-auto h-auto' src='https://i.ibb.co/Wv6nDYR/NEC-1.jpg' alt="" />
          </div>
            <div>
              <h3 className='text-[#13100E]  text-lg'><a className='hover:text-[#800020]' href="/">NEC
              </a></h3>
              <h5 className='text-[#300303] text-md leading-none mb-1'>FDA calls for Zantac to be pulled from market immediately</h5>
              <p className='text-xs'>The FDA has warned that Zantac® may be contaminated with cancer-causing agent...<span className='text-[#800020] font-bold'><a className='hover:text-[#13100E]' href="/">MORE »</a></span></p>
            </div>
          </div>
          <div className='mt-6'>
            <div className=" !bg-no-repeat !bg-cover" style={{
              background: `url(https://i.ibb.co/Ypz3f5J/liti-bg.jpg)`
            }}>
              <div className='py-3 pl-5'>
                <h4 className='text-white text-xl'>Think You Have a Claim?</h4>
                <p className='underline text-yellow-500'><a className='hover:text-[#fff]' href="/">Click Here for a FREE Claim Review</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Litigation