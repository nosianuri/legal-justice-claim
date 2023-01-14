import React from 'react'
import tpost1 from '../../../assets/tpost.webp';
import tpost2 from '../../../assets/tpost2.jpg';
import tpost3 from '../../../assets/tpost3.jpg';
import Heading from '../Heading/Heading';
import './Tpost.css';

const Tpost = () => {
    
  return (
   
    <>
      <section className='tpost'>
        <Heading title='Tiktok post' />
        <div>
        <div className='box flex'>
              <div className='img'>
                <img src={tpost1} alt='' />
              </div>
              <div className='text'>
                <h1 className='title'>US Promises to give Intel aid to locate the soldiers...</h1>
                <span>a year ago</span>
              </div>
            </div>
            <div className='box flex'>
              <div className='img'>
                <img src={tpost2} alt='' />
              </div>
              <div className='text'>
                <h1 className='title'>Renewable energy dead as industry waits for Policy...</h1>
                <span>a year ago</span>
              </div>
            </div>
            <div className='box flex'>
              <div className='img'>
                <img src={tpost3} alt='' />
              </div>
              <div className='text'>
                <h1 className='title'>Mount Etna erupts fashion in nice looking pictures...</h1>
                <span>a year ago</span>
              </div>
            </div>
        </div>
        {/* {tpost.map((val) => {
          return (
            <div className='box flexSB'>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <div className='text'>
                <h1 className='title'>{val.title.slice(0, 35)}...</h1>
                <span>a year ago</span>
              </div>
            </div>
          )
        })} */}
      </section>
    </>
  )
    
}

export default Tpost;