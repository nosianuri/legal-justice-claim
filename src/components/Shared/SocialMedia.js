import React from 'react';
import Heading from './Heading/Heading';

const SocialMedia = () => {
  return (
    <div>
    <Heading title='Stay Connected' />
      <section className='social '>
        <div className='socBox'>
        <a href="https://www.facebook.com/LegalJusticeClaim">
          <i className='fab fa-facebook-f'></i>
          <span>12,740 Likes</span>
          </a>
        </div>
        <div className='socBox'>
        <a href="/">
          <i className='fab fa-pinterest'></i>
          <span>5,600 Fans</span>
          </a>
        </div>
        <div className='socBox'>
        <a href="/">
          <i className='fab fa-twitter'></i>
          <span>8,700 Followers</span>
          </a>
        </div>
        <div className='socBox'>
        <a href="/">
          <i className='fab fa-instagram'></i>
          <span>22,700 Followers</span>
          </a>
        </div>
        <div className='socBox'>
        <a href="/">
          <i className='fab fa-youtube'></i>
          <span>2,700 Subscriber</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default SocialMedia