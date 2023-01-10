import React from 'react';
import elmiron from '../../assets/elmiron.jpg';
import litigation1 from '../../assets/litigation-bg-zantac.jpg';
import litigation2 from '../../assets/litigation-bg-elmiron.jpg';
import litigation3 from '../../assets/litigation-bg-belviq.jpg';
import litigation4 from '../../assets/litigation4.jpg';
import litigation5 from '../../assets/litigation5.jpg';

const Litigation = () => {
  return (
    <div>
      <div className='flex space-x-6'>
        <img src={elmiron} alt="" />
        <div>
          <h4>ELMIRON LAWSUITS ARE NOW BEING FILED</h4>
          <p>Recent lawsuit filed May 19, 2020 claims Elmiron® linked to severe eye damage</p>
          <p className='underline text-lg text-blue-800'>Read More »</p>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 my-10'>
        <div className=''>
          <div className='bg-gray-800 rounded'>
            <h2 className='text-xl text-white pl-5 py-2 '>Drug Litigation</h2>
          </div>

          <div className='flex space-x-5 mt-5'>
            <img className='w-auto h-auto' src={litigation1} alt="" />
            <div>
              <h3 className='text-blue-800 text-lg'>Zantac Lawsuits</h3>
              <h5 className='text-green-800 text-md leading-none mb-1'>FDA calls for Zantac to be pulled from market immediately</h5>
              <p className='text-xs'>The FDA has warned that Zantac® may be contaminated with cancer-causing agent...<span className='text-red-800 font-bold'>MORE »</span></p>
            </div>
          </div>
          <div className='flex space-x-5 mt-5'>
            <img className='w-auto' src={litigation2} alt="" />
            <div>
              <h3 className='text-blue-800 text-lg'>Zantac Lawsuits</h3>
              <h5 className='text-green-800 text-md leading-none mb-1'>FDA calls for Zantac to be pulled from market immediately</h5>
              <p className='text-xs'>The FDA has warned that Zantac® may be contaminated with cancer-causing agent...<span className='text-red-800 font-bold'>MORE »</span></p>
            </div>
          </div>
          <div className='flex space-x-5 mt-5'>
            <img className='w-auto' src={litigation3} alt="" />
            <div>
              <h3 className='text-blue-800 text-lg'>Zantac Lawsuits</h3>
              <h5 className='text-green-800 text-md leading-none mb-1'>FDA calls for Zantac to be pulled from market immediately</h5>
              <p className='text-xs'>The FDA has warned that Zantac® may be contaminated with cancer-causing agent...<span className='text-red-800 font-bold'>MORE »</span></p>
            </div>
          </div>
        </div>
        <div>
        <div className='bg-gray-800 rounded'>
        <h2 className='text-xl  text-white pl-5 py-2'>Medical Litigation</h2>
        </div>
          
          <div className='flex space-x-5 mt-5'>
            <img className='w-auto h-auto' src={litigation4} alt="" />
            <div>
              <h3 className='text-blue-800 text-lg'>Zantac Lawsuits</h3>
              <h5 className='text-green-800 text-md leading-none mb-1'>FDA calls for Zantac to be pulled from market immediately</h5>
              <p className='text-xs'>The FDA has warned that Zantac® may be contaminated with cancer-causing agent...<span className='text-red-800 font-bold'>MORE »</span></p>
            </div>
          </div>
          <div className='flex space-x-5 mt-5'>
            <img className='w-auto h-auto' src={litigation5} alt="" />
            <div>
              <h3 className='text-blue-800 text-lg'>Zantac Lawsuits</h3>
              <h5 className='text-green-800 text-md leading-none mb-1'>FDA calls for Zantac to be pulled from market immediately</h5>
              <p className='text-xs'>The FDA has warned that Zantac® may be contaminated with cancer-causing agent...<span className='text-red-800 font-bold'>MORE »</span></p>
            </div>
          </div>
          <div className='mt-6'>
            <div class=" !bg-no-repeat !bg-cover" style={{
              background: `url(https://i.ibb.co/Lp4nbnv/claim-bg.png)`
            }}>
              <div className='py-3 pl-5'>
                <h4 className='text-white text-xl'>Think You Have a Claim?</h4>
                <p className='underline text-yellow-500'>Click Here for a FREE Claim Review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Litigation