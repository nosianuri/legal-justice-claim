import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    const images = [
        {
            id: 1,
            url: 'https://i.ibb.co/dKNyqxz/hair-board.png',
            link: '/hair-relaxer',
            title: 'Have you used Hair Relaxer?',
            desc: 'FDA calls for heartburn drug Zantac to be pulled from market immediately, April 1, 2020',
        },
        {
            id: 2,
            url: 'https://i.ibb.co/KwM4wct/firefirghter-board.png',
            link: '/fire-fighter-foam',
            title: 'Have you used Zantac®?',
            desc: 'FDA calls for heartburn drug Zantac to be pulled from market immediately, April 1, 2020',
        },
        {
            id: 3,
            url: 'https://i.ibb.co/jVL0c75/talcum-board.png',
            link: '/',
            title: 'Have you used Telcome?',
            desc: 'Johnson & Johnson paid $100,000,000 to settle a group of 1,000 talcum powder lawsuits.',
        },
        {
            id: 4,
            url: 'https://i.ibb.co/Hq33Q8X/roundup-board.png',
            link: '/roundup',
            title: 'Have you used RoundUp?',
            desc: 'FDA calls for heartburn drug Zantac to be pulled from market immediately, April 1, 2020',
        },
        {
            id: 5,
            url: 'https://i.ibb.co/8Nh6FxF/camp-board.png',
            link: '/camplejeune',
            title: 'Have you used Zantac®?',
            desc: 'FDA calls for heartburn drug Zantac to be pulled from market immediately, April 1, 2020',
        },
        {
            id: 6,
            url: 'https://i.ibb.co/LJ9SHbz/mva-board.png',
            link: '/mva',
            title: 'Have you used MVA?',
            desc: 'FDA calls for heartburn drug Zantac to be pulled from market immediately, April 1, 2020',
        },
        {
            id: 7,
            url: 'https://i.ibb.co/WxXYqDZ/nec-board.png',
            link: '/nec',
            title: 'Have you used NEC?',
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