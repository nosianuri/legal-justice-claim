import React from 'react';

const Testimonial = ({ name, image, text, rating }) => {
    return (
      <div className="testimonial">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{text}</p>
        <div className="rating">{rating} stars</div>
      </div>
    );
  };
  

export default Testimonial