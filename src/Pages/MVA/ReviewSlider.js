import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import star from '../../assets/citrus-stars.svg';

const ReviewSlider = () => {
  const logos = [
    {
      id: 1,
      name: "Bartol Stone",
      image: star,
      desc: "I've had the pleasure of working with Legal Justice Claim on multiple occasions, and I can honestly say they are one of the best law firms in the country. Their attorneys, John Smith and Sarah Lee, both partners at the firm, are incredibly knowledgeable and dedicated to their clients, and they consistently achieve outstanding results. Based in New York City, they are a go-to firm for personal injury and toxic tort cases.",
      shorts: "I've had the pleasure of working with Legal Justice Claim on multiple occasions, and I can honestly say they are one of the best law firms in the...",
    },
    {
      id: 2,
      name: "David D.",
      image: star,
      desc: "Legal Justice Claim is an exceptional law firm that I highly recommend to anyone seeking justice and compensation for their injuries. Their lead attorney, David Johnson, is skilled and experienced, and he works tirelessly to ensure that his clients receive the best possible outcomes. Based in Los Angeles, he specializes in product liability and medical malpractice cases.",
      shorts: "Legal Justice Claim is an exceptional law firm that I highly recommend to anyone seeking justice and compensation for their injuries. Their lead...",
    },
    {
      id: 3,
      name: "Patricia T.",
      image: star,
      desc: "I've had the privilege of collaborating with Legal Justice Claim on several complex cases, and I am always impressed by their level of professionalism, expertise, and compassion. Their lead attorney, Lisa Williams, is a seasoned litigator with years of experience in personal injury and mass tort cases. Based in Chicago, she is a true asset to the legal community.",
      shorts: "I've had the privilege of collaborating with Legal Justice Claim on several complex cases, and I am always impressed by their level of...",
    },
    {
      id: 4,
      name: "Felix",
      image: star,
      desc: "Legal Justice Claim is a team of exceptional lawyers who are committed to advocating for the rights of their clients. Their attorneys, James Brown and Emily Rodriguez, are both rising stars in the legal profession, with a deep understanding of the law and a passion for helping their clients. Based in Houston, they are known for their work in asbestos and mesothelioma cases.",
      shorts: "Legal Justice Claim is a team of exceptional lawyers who are committed to advocating for the rights of their clients. Their attorneys, James Brown...",
    },
    {
      id: 5,
      name: "Karen Johnson",
      image: star,
      desc: "As a fellow attorney, I have the utmost respect for Legal Justice Claim and their team of lawyers. Their lead attorney, Michael Davis, is a seasoned litigator with a wealth of experience in personal injury and wrongful death cases. Based in Miami, he is a true advocate for his clients and an asset to the legal profession."
      ,
      shorts: "As a fellow attorney, I have the utmost respect for Legal Justice Claim and their team of lawyers. Their lead attorney, Michael Davis, is a seasoned..."
      ,
    },
    {
      id: 6,
      name: "Tamara Dew",
      image: star,
      desc: "Legal Justice Claim is an exceptional law firm that I have had the pleasure of working with. Their lead attorney, Karen Taylor, is a fierce advocate for her clients and has a wealth of experience in complex litigation. Based in San Francisco, she is a go-to attorney for cases involving dangerous drugs and medical devices.",
      shorts: "Legal Justice Claim is an exceptional law firm that I have had the pleasure of working with. Their lead attorney, Karen Taylor, is a fierce advocate for...",
    },
    {
      id: 7,
      name: "Ann Fuchs",
      image: star,
      desc: "I cannot recommend Legal Justice Claim enough. Their attorneys, Maria Hernandez and Mark Thompson, are a dynamic duo with years of experience in mass tort and personal injury cases. Based in Dallas, they are known for their dedication and tenacity in fighting for the rights of their clients."
      ,
      shorts: "I cannot recommend Legal Justice Claim enough. Their attorneys, Maria Hernandez and Mark Thompson, are a dynamic duo with years of experience ..."
      ,
    },

  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
  return (
    <div className='my-8 space-s-3'>
      <Slider {...settings} ref={sliderRef}>
        {logos.map((logo) => (
          <div key={logo.id} className='p-5'>
            <img src="https://i.ibb.co/9g0VDYP/reviewthunder-removebg-preview.png" alt="" className='!w-24' />
            <div className='text-[16px] mt-3 text-justify'>{logo.shorts}</div>
            <div className='flex justify-between items-center mt-2'>
              <h4 className='sm:text-[18px] text-[12px]'>{logo.name}</h4>
              <p className='hover:underline sm:text-sm text-xs text-red-600'>Read More</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ReviewSlider