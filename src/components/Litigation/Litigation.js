import React from 'react';
import elmiron from '../../assets/elmiron.jpg';
import litigation1 from '../../assets/zantac.webp';
import litigation2 from '../../assets/litigation-bg-elmiron.jpg';
import litigation3 from '../../assets/litigation-bg-belviq.jpg';
import litigation4 from '../../assets/litigation4.jpg';
import litigation5 from '../../assets/litigation5.jpg';
import Heading from '../Shared/Heading/Heading';

const Litigation = () => {
  return (
    <div>
      <div className='flex mt-10 space-x-6'>
        <img src={elmiron} alt="" />
        <div>
          <p className='font-semibold text-[#300303] text-lg'><a className='hover:text-[#BD902D]' href="/"><span>ELMIRON</span> <span className=''>LAWSUITS ARE NOW BEING FILED</span></a></p>
          <p>Recent lawsuit filed May 19, 2020 claims Elmiron® linked to severe eye damage</p>
          <p className='underline text-md font-semibold text-[#BD902D]'>Read More »</p>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 my-10'>
       
        <div>
          <div className=''>
          <Heading title='Medical Litigation' />
            {/* <h2 className='text-xl  text-white pl-5 py-2'>Medical Litigation</h2> */}
          </div>

          <div className='flex space-x-5 mt-5'>
            <img className='w-auto h-auto' src={litigation4} alt="" />
            <div>
              <h3 className='text-[#13100E] text-lg'><a className='hover:text-[#BD902D]' href="/">Hernia Mesh Lawsuits</a></h3>
              <h5 className='text-[#300303] text-md leading-none mb-1'>FDA calls for Zantac to be pulled from market immediately</h5>
              <p className='text-xs'>The FDA has warned that Zantac® may be contaminated with cancer-causing agent...<span className='text-[#BD902D] font-bold'><a className='hover:text-[#13100E]' href="/">MORE »</a></span></p>
            </div>
          </div>
          <div className='flex space-x-5 mt-5'>
            <img className='w-auto' src={litigation2} alt="" />
            <div>
              <h3 className='text-[#13100E]  text-lg'><a className='hover:text-[#BD902D]' href="/">Elmiron Lawsuits</a></h3>
              <h5 className='text-[#300303] text-md leading-none mb-1'>FDA calls for Zantac to be pulled from market immediately</h5>
              <p className='text-xs'>The FDA has warned that Zantac® may be contaminated with cancer-causing agent...<span className='text-[#BD902D] font-bold'><a className='hover:text-[#13100E]' href="/">MORE »</a></span></p>
            </div>
          </div>
          <div className='flex space-x-5 mt-5'>
            <img className='w-auto' src={litigation3} alt="" />
            <div>
              <h3 className='text-[#13100E] text-lg'><a className='hover:text-[#BD902D]' href="/">Belviq Lawsuits</a></h3>
              <h5 className='text-[#300303] text-md leading-none mb-1'>FDA calls for Zantac to be pulled from market immediately</h5>
              <p className='text-xs'>The FDA has warned that Zantac® may be contaminated with cancer-causing agent...<span className='text-[#BD902D] font-bold'><a className='hover:text-[#13100E]' href="/">MORE »</a></span></p>
            </div>
          </div>
        </div>
        <div className=''>
          <div className=''>
          <Heading title='Drug Litigation' />
            {/* <h2 className='text-xl text-white pl-5 py-2 '>Drug Litigation</h2> */}
          </div>

          <div className='flex space-x-5 mt-5'>
            <img className='w-20' src={litigation1} alt="" />
            <div>
              <h3 className='text-[#13100E]  text-lg'><a className='hover:text-[#BD902D]' href="/">Zantac Lawsuits</a></h3>
              <h5 className='text-[#300303] text-md leading-none mb-1'>FDA calls for Zantac to be pulled from market immediately</h5>
              <p className='text-xs'>The FDA has warned that Zantac® may be contaminated with cancer-causing agent...<span className='text-[#BD902D] font-bold'><a className='hover:text-[#13100E]' href="/"> MORE »</a></span></p>
            </div>
          </div>
          <div className='flex space-x-5 mt-5'>
            <img className='w-auto h-auto' src={litigation5} alt="" />
            <div>
              <h3 className='text-[#13100E]  text-lg'><a className='hover:text-[#BD902D]' href="/">Surgical Stapler Lawsuits</a></h3>
              <h5 className='text-[#300303] text-md leading-none mb-1'>FDA calls for Zantac to be pulled from market immediately</h5>
              <p className='text-xs'>The FDA has warned that Zantac® may be contaminated with cancer-causing agent...<span className='text-[#BD902D] font-bold'><a className='hover:text-[#13100E]' href="/">MORE »</a></span></p>
            </div>
          </div>
          <div className='mt-6'>
            <div class=" !bg-no-repeat !bg-cover" style={{
              background: `url(https://i.ibb.co/Ypz3f5J/liti-bg.jpg)`
            }}>
              <div className='py-3 pl-5'>
                <h4 className='text-white text-xl'>Think You Have a Claim?</h4>
                <p className='underline text-yellow-500'><a className='hover:text-[#13100E]' href="/">Click Here for a FREE Claim Review</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Litigation