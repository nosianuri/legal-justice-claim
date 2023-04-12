import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import roundup from '../assets/roundup_bg.jpg';

const ExposureSlider = () => {
    const images = [
        {
            id: 1,
            url: roundup,
            link: '/',
            title: 'Roundup Maker Agrees to Pay $10 Billion to Settle Cancer Suits as of June, 24, 2020',
            desc: 'Monsanto has settled over 100,000 Roundup lawsuits, paying out about $11 billion as of May 2022. The recent Roundup settlement will pay as much as $9.6 billion to resolve victims involved in current litigation and set aside $1.25 billion to pay future claims as part of separate class-action lawsuits. The average Roundup lawsuit payout for Round One settlements was in the $120,000 to $180,000 per person range.Monsanto, a well-known agricultural company, has been at the center of controversy over its Roundup weed killer for years. In recent times, the company has faced...',
        },
        {
            id: 2,
            url: roundup,
            link: '/',
            title: 'Camp Lejeune Water Contamination Settlement Amounts & Payouts 2023. ',
            desc: 'Camp Lejeune lawsuit settlement payouts for contaminated water exposure is estimated to be over $6.7 billion. Victims who pursue a Camp lejeune toxic water claim will receive lucrative settlements which could be well over $1 million in some cases. However, another renowned law firm stated that settlement payouts for Camp Lejeune toxic exposure victims are estimated at $6.7 billion, individuals who file a claim will receive between $25,000 and $1 million or more, depending on the severity of their illness.The United States Marine Corps Camp Lejeune has long been the subject of ...',
        },
        {
            id: 3,
            url: roundup,
            link: '/',
            title: 'Typical Car Accident Settlement Amounts',
            desc: 'The Insurance Information Institute reports that the typical car accident settlement amount for bodily injury was $15,785 and the average compensation for property damage was $3,841 in 20181. Forbes also reports that the median amount awarded in auto accident cases was $16,000.Car accidents are unfortunately all too common on our roads, and the aftermath can be both physically and financially devastating. If you have been involved in a car accident, you may be wondering what kind of settlement you can expect to receive.However, its important to note that every case is unique...',
        },
        {
            id: 4,
            url: roundup,
            link: '/',
            title: 'Talcum Baby Powder Lawsuit.',
            desc: 'Johnson & Johnson paid $100,000,000 to settle a group of 1,000 talcum powder lawsuits.Johnson & Johnson announced that it will pay $8.9 billion to settle talcum powder lawsuits. The average compensation payout for talc powder victims is $4.4 million. Legal-Bay LLC reports that Johnson & Johnson will pay out $8.9 billion in damages to settle the talcum powder lawsuit.The use of talcum powder has been a common practice for many years, but recent lawsuits have shed light on the potential dangers of this product. Johnson & Johnson, one of the leading producers of talcum powder... ',
        },
        {
            id: 5,
            url: roundup,
            link: '/',
            title: 'Baby Formula NEC Lawsuit Payout & Settlements.',
            desc: 'The average verdict or settlement payout in a sampling of recent malpractice lawsuits for NEC in premature infants was around $3.5 million, but some cases may be worth more or less than that. The estimated settlement amounts for NEC lawsuits may range between $5,000 to over $500,000, but these are not guaranteed and depend on the outcome of each case. The compensation amount for NEC lawsuits may vary depending on the severity of the injury, the fault of the defendant, the future medical expenses, and other factors...',
        },
    ];
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <div className="max-w-7xl mx-auto">
            <Slider {...settings}>
                {images.map((image) => (
                    <div key={image.id}>
                        <div>
                            <h1 className='lg:text-6xl text-2xl mt-2 mb-5'>RoundUp Exposure linked to Cancer</h1>
                            <div className='lg:w-full w-full h-[1px] bg-gray-700'></div>
                            <div className='lg:flex space-y-3 mt-10 '>
                                <div className='mr-5'>
                                    <h3 className='lg:text-3xl text-xl text-[#800020] font-bold'><a className='hover:text-[#228B22]' href="/roundup">{image.title}</a></h3>
                                    <p className='text-lg mt-2'>{image.desc}<span className='font-bold text-[#800020] underline'><a className='hover:text-[#228B22]' href={image.link}> Read More »</a></span></p>
                                </div>
                                <div className='image-box w-[100%]'>
                                    <img className='' src={image.url} alt="" />
                                </div>
                            </div>
                            <div className='mb-10 mt-5'>
                                <a href={image.link}>
                                    <button className='bg-[#228B22] hover:bg-[#800020] px-3 text-white py-1 font-semibold rounded'>Free Claim Review »</button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ExposureSlider