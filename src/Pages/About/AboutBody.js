import React from 'react';
import LogoSlider from '../../components/LogoSlider';
import star from '../../assets/citrus-stars.svg';
import google from '../../assets/google.svg';

const AboutBody = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='my-8'>
                <div className='sm:flex  justify-between'>
                    <div className='sm:w-[700px]'>
                        <h2 className='text-[35px] font-bold mb-5 about-heading'>About Legal Justice Claim</h2>
                        <h4 className='text-[17px] text-justify'>Welcome to Legal Justice Claim, your ultimate destination for lawsuit claim victories! We are a leading website that specializes in providing our clients with top-notch legal services to ensure that they receive the justice they deserve. Our team of expert lawyers has helped countless individuals and businesses navigate the complexities of the legal system to win their lawsuits.</h4>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/vsCYxq4/sidenav-img-01.jpg" className='w-auto h-auto' alt="" />
                    </div>
                </div>
                <h3 className='text-2xl font-semibold '>Legal Justice Claim Difference</h3>
                <p className='text-[17px] mt-2 text-justify'>At Legal Justice Claim, we believe that everyone deserves access to justice, regardless of their financial situation. We are committed to providing our clients with affordable legal services and to ensuring that they receive the best possible outcome in their lawsuits. Our team of lawyers has a proven track record of success, and we are proud to have helped our clients recover millions of dollars in compensation.</p>
                <p className='text-[17px] mt-2 text-justify'>Our website was founded with the aim of making it easier for individuals and businesses to find the right legal representation for their needs. We understand that the legal system can be intimidating, and that finding the right lawyer can be a daunting task. That's why we have created a user-friendly platform that connects our clients with the best lawyers in their area.</p>

                <p className='text-[17px] mt-2 text-justify'>Our website is also dedicated to providing our clients with informative and educational resources to help them better understand the legal system. We believe that knowledge is power, and that the more our clients know about their legal rights, the better equipped they will be to navigate the legal system and win their lawsuits.</p>

                <div className='bg-[#333] text-[#fff] p-5 text-[18px] mt-2 sm:w-[800px] mb-5 text-justify'>Legal Justice Claim has a rich history of helping people win their lawsuits. Our website was founded by a team of experienced lawyers who saw a need for a more affordable and accessible legal services platform. Since then, we have helped countless clients achieve justice and recover compensation for their losses.</div>
                <div className='bg-[#333] text-[#fff] p-5'>
                    <strong className='text-[35px] about-heading text-justify'>Fight for justice and hold wrongdoers
                        <br />
                         accountable with an attorney
                        </strong>
                    <div className='w-[850px] mx-auto'>
                        <div className='grid grid-cols-2 gap-5'>
                            <div className='flex gap-5 mt-3'>
                                <i class="fa-regular fa-copy text-[45px]"></i>
                                <div>
                                    <h3 className='text-xl'>100% Satisfaction Guarantee</h3>
                                    <h5 className='mt-2 text-justify'>With our legal services, we offer a 100% satisfaction guarantee. Our team of experienced attorneys will work tirelessly to ensure that you receive the justice you deserve.
                                    </h5>
                                </div>
                            </div>
                            <div className='flex gap-5 mt-3'>
                                <i class="fa-regular fa-handshake text-[45px]"></i>
                                <div>
                                    <h3 className='text-xl'>Local Attorneys You Can Trust</h3>
                                    <h5 className='mt-2 text-justify'>Our attorneys are local, licensed, and fully qualified to represent you in your legal claim. You can trust us to handle your case with the utmost professionalism and dedication.
                                    </h5>
                                </div>
                            </div>
                            <div className='flex gap-5 mt-3'>
                                <i class="fa-solid fa-tags text-[45px]"></i>
                                <div>
                                    <h3 className='text-xl'>Free Quote for Affordable Legal Representation</h3>
                                    <h5 className='mt-2 text-justify'>At our law firm, we believe in making legal services affordable and accessible to everyone. That's why we offer a free quote for our services, so you can get the legal representation you need without any hidden fees or surprises.</h5>
                                </div>
                            </div>
                            <div className='flex gap-5 mt-3'>
                                <i class="fa-regular fa-hourglass-half text-[45px] leading-normal"></i>
                                <div>
                                    <h3 className='text-xl'>24/7 Emergency Services</h3>
                                    <h5 className='mt-2 text-justify'>Our attorneys are available 24/7 to provide you with emergency legal services. No matter the time of day or night, you can count on us to be there for you when you need us most.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:mb-16 mt-16'>
                    <div className='text-center text-3xl text-[#000] font-bold mb-3'>As Seen In</div>
                    <div className='max-w-7xl mx-auto'>
                        <LogoSlider />
                    </div>
                </div>


                <p className='text-[20px] mt-2'>In conclusion, Legal Justice Claim is your one-stop-shop for all your legal needs. Our team of expert lawyers is dedicated to helping you win your lawsuit and receive the justice you deserve. Contact us today to learn more about how we can help you!</p>

                <div className='mt-8'>
                    <img src={star} alt="" className='mx-auto w-48' />
                    <div className='font-bold sm:text-3xl text-center mt-3'>Our Personal Injury Lawyers Have <br /> </div>
                    <div className='flex items-center justify-center font-bold sm:text-3xl mb-5'> Over 55,000 5-Star <img src={google} alt="" className='sm:w-24 w-16 mx-2' /> Logo Reviews</div>
                </div>
            </div>
        </div>
    )
}

export default AboutBody