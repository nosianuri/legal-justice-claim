import React from 'react';
import './Tbanner.css';

const Tbanner = () => {

  return (
    <div className='tbanner'>
      <div className='artcle'>
        <h1>Thank you</h1>
        <div className="checkmark-circle">
          <div className="background"></div>
          <div className="checkmark draw"></div>
        </div>
        <h2> <span className='application'>100% of</span>  applicants who Called after submitting their application received immediate assistance with their claim.</h2>
        <h4> Get in touch now <span className='excla'>!</span> </h4>
      </div>
    </div>
  )
}

export default Tbanner