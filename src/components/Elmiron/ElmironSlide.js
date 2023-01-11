import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { elmiron } from './data';
// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './Elmiron.css';
import { Navigation, Autoplay, Pagination } from 'swiper';

const ElmironSlide = () => {
    const { programs } = elmiron;
    return (
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        autoplay={true}
        navigation
        pagination={{ clickable: true }}
        // grabCursor={true}
        // breakpoints={{
        //   768: {
        //     slidesPerView: 1,
        //   },
        //   1024: {
        //     slidesPerView: 1,
        //   },
        // }}
        modules={[Navigation, Autoplay, Pagination]}
        className='reviewSlider core-box'
      >
        {programs.map((program, idx) => {
          // destructure program
          const { image, name, description } = program;
  
          return (
  
            <SwiperSlide
              key={idx}
            >
              <div class="py-5  bg-no-repeat !bg-cover" style={{
            background: `url(${image})`
        }}>
            <div className='elmiron-box lg:w-1/2 '>
                <h1 className='lg:text-4xl text-2xl pt-3 mb-3'>{name}</h1>
                <p className='lg:text-2xl text-md mb-3'>{description}</p>
                <button className='bg-[#BD902D] hover:bg-[#13100E] px-3 py-1 font-semibold rounded'>Free Claim Review »</button>
            </div>
        </div>
  
            </SwiperSlide>
  
          );
        })}
      </Swiper>
    );
}

export default ElmironSlide