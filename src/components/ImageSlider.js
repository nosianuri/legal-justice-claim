import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    const images = [
        {
            id: 1,
            url: 'https://i.ibb.co/sQcQs3g/legal-web-image-2.png',
            link: '/',
            title: 'Have you used Zantac®?',
            desc: 'FDA calls for heartburn drug Zantac to be pulled from market immediately, April 1, 2020',
        },
        {
            id: 2,
            url: 'https://i.ibb.co/BV097ZZ/legal-web-image-1.png',
            link: '/',
            title: 'Have you used Zantac®?',
            desc: 'FDA calls for heartburn drug Zantac to be pulled from market immediately, April 1, 2020',
        },
        {
            id: 3,
            url: 'https://i.ibb.co/t4Zv1qF/legal-web-image-3.png',
            link: '/',
            title: 'Have you used Telcome?',
            desc: 'Johnson & Johnson paid $100,000,000 to settle a group of 1,000 talcum powder lawsuits.',
        },
        {
            id: 4,
            url: 'https://i.ibb.co/BV097ZZ/legal-web-image-1.png',
            link: '/',
            title: 'Have you used Zantac®?',
            desc: 'FDA calls for heartburn drug Zantac to be pulled from market immediately, April 1, 2020',
        },
    ];
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="max-w-7xl mx-auto">
            <Slider {...settings}>
                {images.map((image) => (
                    <div key={image.id}>
                        <div className="sm:py-10 py-5  bg-no-repeat !bg-cover" style={{
                            background: `url(${image.url})`
                        }}>
                            <div className='elmiron-box lg:w-1/2 '>
                                <h1 className='lg:text-4xl text-xl pt-3 lg:mb-3 !leading-normal'>{image.title}</h1>
                                <p className='lg:text-2xl text-md lg:mb-3 mb-1'>{image.desc}</p>
                                <a href={image.link}>
                                    <button className='bg-[#228B22] hover:text-[#E1251A] hover:bg-[#fff] lg:px-3 px-2 lg:py-2 py-1 font-semibold rounded sm:text-[25px] text-sm '>Free Claim Review »</button>
                                </a>
                            </div>
                        </div>
                        {/* <img className="mx-auto" src={image.url} alt="Slide" /> */}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;