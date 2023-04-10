import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/nb-logo.png.webp';
import img2 from '../assets/in-logo2.png.webp';
import img3 from '../assets/ne-logo5.png.webp';
import img4 from '../assets/th-logo6.png.webp';
import img5 from '../assets/usa-logo7.png.webp';
import img6 from '../assets/wa-logo.png (1).webp';
import img7 from '../assets/ab-logo.png.webp';


const LogoSlider = () => {
    const logos = [
        { id: 1, image: img1 },
        { id: 2, image: img2 },
        { id: 3, image: img3 },
        { id: 4, image: img4 },
        { id: 5, image: img5 },
        { id: 6, image: img6 },
        { id: 7, image: img7 },
        // add more logos here
      ];
      const [currentIndex, setCurrentIndex] = useState(0);

      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true, // Set autoplay to true
        autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
        beforeChange: (current, next) => setCurrentIndex(next),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      };
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((currentIndex + 1) % logos.length);
        }, 3000);
        return () => clearInterval(interval);
      }, [currentIndex]);
    
      const sliderRef = React.createRef();
    
      const handleClickPrev = () => {
        sliderRef.current.slickPrev();
      };
    
      const handleClickNext = () => {
        sliderRef.current.slickNext();
      };
    
  
    return (
        <div className='my-8'>
        <Slider {...settings} ref={sliderRef}>
          {logos.map((logo) => (
            <div key={logo.id}>
              <img src={logo.image} alt="logo" className="mx-auto" />
            </div>
          ))}
        </Slider>
        <div className="flex justify-between mt-[-50px] relative">
          <button
            className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={handleClickPrev}
          >
            &lt;
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
            onClick={handleClickNext}
          >
            &gt;
          </button>
        </div>
      </div>
    );
  };

  export default LogoSlider;