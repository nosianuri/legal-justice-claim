import React, { useState } from 'react';
import classNames from 'classnames';
import star from '../../assets/citrus-stars.svg';

const TestimonialBody = () => {
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => setShowMore(!showMore);
    const services = [
        {
            id: 1,
            name: 'Patricia T.',
            Link: '/plumbing-service',
            desc: "I've had the pleasure of working with Legal Justice Claim on multiple occasions, and I can honestly say they are one of the best law firms in the country. Their attorneys, John Smith and Sarah Lee, both partners at the firm, are incredibly knowledgeable and dedicated to their clients, and they consistently achieve outstanding results. Based in New York City, they are a go-to firm for personal injury and toxic tort cases.",
            img: star,
        },
        {
            id: 2,
            name: 'David D.',
            Link: '/hvac-services',
            desc: "Legal Justice Claim is an exceptional law firm that I highly recommend to anyone seeking justice and compensation for their injuries. Their lead attorney, David Johnson, is skilled and experienced, and he works tirelessly to ensure that his clients receive the best possible outcomes. Based in Los Angeles, he specializes in product liability and medical malpractice cases.",
            img: star,
        },
        {
            id: 3,
            name: 'Bartol Stone',
            Link: '/electrical-services',
            desc: "I've had the privilege of collaborating with Legal Justice Claim on several complex cases, and I am always impressed by their level of professionalism, expertise, and compassion. Their lead attorney, Lisa Williams, is a seasoned litigator with years of experience in personal injury and mass tort cases. Based in Chicago, she is a true asset to the legal community."
            ,
            img: star,
        },
        {
            id: 4,
            name: 'Felix',
            Link: '/home-cleaning',
            desc: "Legal Justice Claim is a team of exceptional lawyers who are committed to advocating for the rights of their clients. Their attorneys, James Brown and Emily Rodriguez, are both rising stars in the legal profession, with a deep understanding of the law and a passion for helping their clients. Based in Houston, they are known for their work in asbestos and mesothelioma cases.",
            img: star,
        },
        {
            id: 5,
            name: 'John Grady',
            Link: '/home-painting',
            desc: "As a fellow attorney, I have the utmost respect for Legal Justice Claim and their team of lawyers. Their lead attorney, Michael Davis, is a seasoned litigator with a wealth of experience in personal injury and wrongful death cases. Based in Miami, he is a true advocate for his clients and an asset to the legal profession.",
            img: star,
        },
        {
            id: 6,
            name: 'Karen Johnson',
            Link: '/gutters-services',
            desc: "Legal Justice Claim is an exceptional law firm that I have had the pleasure of working with. Their lead attorney, Karen Taylor, is a fierce advocate for her clients and has a wealth of experience in complex litigation. Based in San Francisco, she is a go-to attorney for cases involving dangerous drugs and medical devices.",
            img: star,
        },
        {
            id: 7,
            name: 'Tamara Dew',
            Link: '/kitchens-services',
            desc: "I cannot recommend Legal Justice Claim enough. Their attorneys, Maria Hernandez and Mark Thompson, are a dynamic duo with years of experience in mass tort and personal injury cases. Based in Dallas, they are known for their dedication and tenacity in fighting for the rights of their clients."
            ,
            img: star,
        },
        {
            id: 8,
            name: 'Diego A Constanza',
            Link: '/bathroom-remodeling',
            desc: "I have worked with many law firms over the years, and Legal Justice Claim is one of the best. Their attorneys, Jennifer Lee and Robert Garcia, are both highly skilled and compassionate advocates for their clients. Based in Boston, they have a reputation for excellence in medical malpractice and nursing home abuse cases.",
            img: star,
        },
        {
            id: 9,
            name: 'Chris Sanford',
            Link: '/home-security',
            desc: "Legal Justice Claim is a top-notch law firm that I have had the pleasure of working with. Their attorneys, Patricia Evans and William Lee, are both experienced litigators who go above and beyond for their clients. Based in Atlanta, they specialize in cases involving defective medical devices and dangerous drugs."
            ,
            img: star,
        },
        {
            id: 10,
            name: 'Heather Stover',
            Link: '/movers-services',
            desc: "I have nothing but praise for Legal Justice Claim and their team of attorneys. Their lead attorney, Peter Kim, is a true professional with a deep understanding of the law and a passion for helping his clients. Based in Seattle, he is known for his work in complex litigation, including mass tort and environmental cases.",
            img: star,
        },
        {
            id: 11,
            name: 'Ann Fuchs',
            Link: '/flooring-services',
            desc: "Legal Justice Claim is an exceptional law firm with a team of highly skilled attorneys. Their lead attorney, Samantha Lee, is a true advocate for her clients and has a wealth of experience in personal injury and wrongful death cases. Based in Washington D.C., she is a go-to attorney for cases involving medical malpractice and birth injuries.",
            img: star,
        },
        {
            id: 12,
            name: 'Dexter Bricken',
            Link: '/roofing-services',
            desc: "Legal Justice Claim is an outstanding law firm with a team of knowledgeable and compassionate attorneys. Their attorneys, Alex Kim and Rachel Chen, are both highly skilled litigators with a deep understanding of the law. Based in San Diego, they specialize in cases involving workplace injuries and employment discrimination."
            ,
            img: star,
        },
        {
            id: 13,
            name: 'Jane Foltz',
            Link: '/solar-services',
            desc: "I highly recommend Legal Justice Claim to anyone seeking justice and compensation for their injuries. Their lead attorney, Robert Johnson, is a dedicated advocate for his clients and has a track record of success in personal injury and wrongful death cases. Based in Phoenix, he is known for his tenacity and compassion.",
            img: star,
        },
        {
            id: 14,
            name: 'Matteo mallo',
            Link: '/windows-services',
            desc: "I have worked with Legal Justice Claim on several occasions, and I am always impressed by their professionalism and dedication. Their attorneys, Sarah Jones and Michael Nguyen, are both highly skilled and experienced, with a passion for helping their clients. Based in Portland, they specialize in cases involving defective products and dangerous drugs.",
            img: star,
        },
        {
            id: 15,
            name: 'Joshua S.',
            Link: '/windows-services',
            desc: "Legal Justice Claim is a top-notch law firm with a team of exceptional attorneys. Their lead attorney, John Martinez, is a fierce advocate for his clients and has a wealth of experience in personal injury and medical malpractice cases. Based in Denver, he is known for his dedication and compassion."
            ,
            img: star,
        },
        {
            id: 16,
            name: 'Susan Mieli',
            Link: '/windows-services',
            desc: "I never thought I would receive justice for the illnesses I developed from exposure to toxic chemicals at Camp Lejeune. Thanks to the team at Legal Justice Claim, I received the compensation I deserved.",
            img: star,
        },
        {
            id: 17,
            name: 'Pat DiDomizio',
            Link: '/windows-services',
            desc: "I am forever grateful to Legal Justice Claim for their tireless work on my behalf. They fought relentlessly to ensure that the military held accountable for the toxic water at Camp Lejeune.",
            img: star,
        },
        {
            id: 18,
            name: 'Gaby',
            Link: '/windows-services',
            desc: "Legal Justice Claim gave me hope when I felt like there was none. They stood by my side every step of the way and fought tirelessly to ensure that justice was served."
            ,
            img: star,
        },
        {
            id: 19,
            name: 'Carmon Ramos',
            Link: '/windows-services',
            desc: "I would recommend Legal Justice Claim to anyone seeking justice for exposure to toxic chemicals. They are dedicated, knowledgeable, and truly care about their clients.",
            img: star,
        },
        {
            id: 20,
            name: 'Caroline Telgarsky',
            Link: '/windows-services',
            desc: "Legal Justice Claim changed my life. Their team of experienced lawyers fought for my rights and helped me receive the compensation I deserved for the harm caused by toxic chemicals at Camp Lejeune.",
            img: star,
        },
        {
            id: 21,
            name: 'Don Atkinson',
            Link: '/windows-services',
            desc: "I never thought I would have to suffer from the long-term effects of toxic chemicals at Camp Lejeune. Legal Justice Claim helped me get the justice and compensation I deserved."
            ,
            img: star,
        },

    ];
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-[28px] font-bold mt-10'>Reviews</h2>
            <div>
                <div className=''>
                    <div className='grid sm:grid-cols-3 grid-cols-1 gap-10'>
                        {services.slice(0, showMore ? services.length : 9).map(city => (
                            <div key={city} className=" bg-[#f4f6f7] font-semibold text-xl p-5 shadow-md rounded my-5 ">
                            <div className='flex'>
                            <img src='https://i.ibb.co/3sLppLT/redstar.png' alt="logo" className=" w-8" />
                            <img src='https://i.ibb.co/3sLppLT/redstar.png' alt="logo" className=" w-8" />
                            <img src='https://i.ibb.co/3sLppLT/redstar.png' alt="logo" className=" w-8" />
                            <img src='https://i.ibb.co/3sLppLT/redstar.png' alt="logo" className=" w-8" />
                            <img src='https://i.ibb.co/3sLppLT/redstar.png' alt="logo" className=" w-8" />
                            </div>
                                
                                <div className='text-[14px] mt-2'>{city.desc}</div>
                                <div className='flex justify-between items-center mt-2'>
                                    <h4 className='text-xl'>- {city.name}</h4>
                                    <p className='hover:underline text-sm text-red-600'>Read More</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center my-4 ">
                        <button
                            className={classNames(
                                'px-4 py-2 text-white text-xl font-bold rounded w-[70%]',
                                showMore ? 'bg-[#228B22]' : 'bg-[#228B22]'
                            )}
                            onClick={toggleShowMore}
                        >
                            {showMore ? 'See Less' : 'See More'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialBody