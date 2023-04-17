import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import roundup from '../assets/roundup_bg.jpg';

const ExposureSlider = () => {
    const images = [
        {
            id: 1,
            url: 'https://i.ibb.co/12GCxbS/roundup-expous.png',
            link: '/roundup',
            title: 'Roundup Maker Agrees to Pay $10 Billion to Settle Cancer Suits as of June, 24, 2020',
            desc: 'Monsanto has settled over 100,000 Roundup lawsuits, paying out about $11 billion as of May 2022. The recent Roundup settlement will pay as much as $9.6 billion to resolve victims involved in current litigation and set aside $1.25 billion to pay future claims as part of separate class-action lawsuits. The average Roundup lawsuit payout for Round One settlements was in the $120,000 to $180,000 per person range.Monsanto, a well-known agricultural company, has been at the center of controversy over its Roundup weed killer for years. In recent times, the company has faced...',
        },
        {
            id: 2,
            url: 'https://i.ibb.co/x33Wx7h/camp-expouse.png',
            link: '/camplejeune',
            title: 'Camp Lejeune Water Contamination Settlement Amounts & Payouts 2023. ',
            desc: 'Camp Lejeune lawsuit settlement payouts for contaminated water exposure is estimated to be over $6.7 billion. Victims who pursue a Camp lejeune toxic water claim will receive lucrative settlements which could be well over $1 million in some cases. However, another renowned law firm stated that settlement payouts for Camp Lejeune toxic exposure victims are estimated at $6.7 billion, individuals who file a claim will receive between $25,000 and $1 million or more, depending on the severity of their illness.The United States Marine Corps Camp Lejeune has long been the subject of ...',
        },
        {
            id: 3,
            url: 'https://i.ibb.co/9qprZFp/mva-expous.png',
            link: '/mva',
            title: 'Typical Car Accident Settlement Amounts',
            desc: 'The Insurance Information Institute reports that the typical car accident settlement amount for bodily injury was $15,785 and the average compensation for property damage was $3,841 in 20181. Forbes also reports that the median amount awarded in auto accident cases was $16,000.Car accidents are unfortunately all too common on our roads, and the aftermath can be both physically and financially devastating. If you have been involved in a car accident, you may be wondering what kind of settlement you can expect to receive.However, its important to note that every case is unique...',
        },
        {
            id: 4,
            url: 'https://i.ibb.co/Q61jFYq/talcum-expous.png',
            link: '/talcome',
            title: 'Talcum Baby Powder Lawsuit.',
            desc: 'Johnson & Johnson paid $100,000,000 to settle a group of 1,000 talcum powder lawsuits.Johnson & Johnson announced that it will pay $8.9 billion to settle talcum powder lawsuits. The average compensation payout for talc powder victims is $4.4 million. Legal-Bay LLC reports that Johnson & Johnson will pay out $8.9 billion in damages to settle the talcum powder lawsuit.The use of talcum powder has been a common practice for many years, but recent lawsuits have shed light on the potential dangers of this product. Johnson & Johnson, one of the leading producers of talcum powder... ',
        },
        {
            id: 5,
            url: 'https://i.ibb.co/wJXkxMj/tylenol-expous.png',
            link: '/tylenol',
            title: 'Tylenol Autism ADHD Lawsuit Payouts.',
            desc: 'A Tylenol autism class action lawsuit has been certified and it is estimated that over 100,000 victims will file a lawsuit. While its too early to provide a solid dollar amount estimate for settlements, based on prior results in similar dangerous drug lawsuits, it is projected that Tylenol Autism ADHD Lawsuit Payouts could be between $50,000 and $500,000+ depending on the strength of the claim and direction of the litigation. The potential compensation amount is significant and could provide much-needed financial...',
        },
        {
            id: 6,
            url: 'https://i.ibb.co/GWGNp85/hair-expouse.png',
            link: '/hair-relaxer',
            title: 'Hair Straightener Cancer Lawsuit.',
            desc: 'The potential value of hair relaxer lawsuits can range from $300,000 to $1,750,000. However, the amount of compensation you may be able to receive in a hair relaxer lawsuit depends on different factors of your case.In a hair relaxer lawsuit, the compensation amount you receive will depend on various factors such as the extent of your injuries, the severity of your medical condition, the cost of your medical expenses, the duration of your suffering, and the impact of your injuries on your daily life...',
        },
        {
            id: 7,
            url: 'https://i.ibb.co/KDRxMgR/fighter-expouse.png',
            link: '/fire-fighter-foam',
            title: 'AFFF firefighting foam, which contains toxic PFAS chemicals.',
            desc: 'AFFF firefighting foam cases could result in significant compensation payouts for victims, with top tier settlements ranging from $300,000 to $600,000 on average. Second tier cases may receive an estimated value of $150,000 to $280,000. These payouts are based on previous mass tort cases involving cancer, and demonstrate the potential for victims to receive much-needed financial support. Its important for those affected by AFFF firefighting foam to take action now and hold manufacturers accountable for their negligence....',
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
                            <h1 className='lg:text-6xl text-2xl mt-2 mb-5 overflow-y-hidden'>RoundUp Exposure linked to Cancer</h1>
                            <div className='lg:w-full w-full h-[1px] bg-gray-700'></div>
                            <div className='lg:flex space-y-3 mt-10 '>
                                <div className='mr-5'>
                                    <h3 className='lg:text-3xl text-xl text-[#800020] font-bold'><a className='hover:text-[#228B22]' href="/roundup">{image.title}</a></h3>
                                    <p className='text-lg mt-2 text-justify'>{image.desc}<span className='font-bold text-[#800020] underline'><a className='hover:text-[#228B22]' href={image.link}> Read More »</a></span></p>
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