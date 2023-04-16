import React from 'react'
import NewsCards from './NewsCards';
import './LegalNews.css';
import { Helmet } from 'react-helmet';
import LegalHeader from '../../components/LegalHeader/LegalHeader';
import Footer from '../../components/Footer/Footer';
import nec from '../../assets/Johnson-Johnsons-Asbestos-Contaminated-Talc-Powder2-300x300.avif';

const LegalNews = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Testimonial | Legal Justice Claim </title>
            </Helmet>
            <LegalHeader />
            <div className='bg-[#f8f9fa]'>
                <div className='max-w-7xl mx-auto py-10'>
                    <div className='blogbody'>
                        <div>
                            <strong className='lg:text-3xl text-xl px-2 mb-3'>Legal News On Legal Justice Claim</strong>
                            <div className='!mx-auto'>
                                <NewsCards />
                            </div>

                        </div>
                        <div>
                            <div className='mb-8'>
                                <h5 className='text-xl mb-2'>Recent News</h5>
                                <div className='w-full h-[1px] bg-blue-500'></div>
                                <div className='bg-gray-300 !px-4 py-2 my-2'>
                                    <div className='flex gap-1 items-center'>
                                        <a href="https://www.r3hlvtrk.com/3J67C/8BZ7TGG/">
                                            <img src="https://i.ibb.co/rKjvVK4/checkmark.png" alt="" /></a>
                                        <h6 className='text-xl pt-2'>Step 1:</h6>
                                    </div>
                                    <p className='font-bold mt-2 text-sm'>CLICK HERE to see latest news </p>
                                    <a href="https://www.torhoermanlaw.com/toxic-baby-formula-nec-lawsuit/nec-lawsuit-payout-settlements/">
                                        <img src={nec} alt="" className='w-32 mx-auto mt-5' />
                                    </a>
                                    <p className='text-sm text-center my-3'>Johnson-Johnsons-Asbestos-Contaminated-Talc-Powder2 <br />
                                        Concerns Grow In Asbestos Contamination On Baby Powder Products</p>
                                    <a href="https://www.torhoermanlaw.com/toxic-baby-formula-nec-lawsuit/nec-lawsuit-payout-settlements/">
                                        <div className='bg-orange-500 text-center text-[#fff]'>legal news</div>
                                    </a>
                                </div>
                            </div>

                            <div className='mb-8'>
                                <h2 className='text-xl uppercase mb-2'>verdicts</h2>
                                <div className='w-full h-[2px] bg-blue-500'></div>
                                <a href="https://www.millerandzois.com/products-liability/medical-device-lawsuits/talcum-powder/">
                                    <img src="https://i.ibb.co/9r3LpG2/Johnson-Johnsons-talc-powder-cancer-case-victim-300x300.jpg" alt="" className='mt-2 w-full' /></a>
                                <p className='text-sm font-bold italic'>
                                    Jury Says J&J Must Pay $750 Million In Talc Powder Cancer Case </p>
                                {/* <p className='mt-1 font-bold italic'>Christina Butler,</p> */}
                            </div>

                            <div className='bg-white shadow-xl p-5'>
                                <h2 className='text-[20px] font-bold underline'>Recent Posts</h2>
                                <ul className='ul-article'>
                                    <li><a className='hover:text-red-600' href="https://www.elglaw.com/faq/expected-camp-lejeune-settlement-amount/">Latest Camp Lejeune Post</a></li>
                                    <li><a className='hover:text-red-600' href="https://www.forbes.com/advisor/legal/product-liability/roundup-lawsuit-update/">Latest Round Up Post</a></li>
                                    <li><a className='hover:text-red-600' href="https://www.forbes.com/advisor/legal/auto-accident/typical-car-settlement-amounts/">Latest MVA Post</a></li>
                                    <li><a className='hover:text-red-600' href="https://www.torhoermanlaw.com/toxic-baby-formula-nec-lawsuit/nec-lawsuit-payout-settlements/">Latest NEC Post</a></li>
                                    <li><a className='hover:text-red-600' href="https://www.theguardian.com/us-news/2023/feb/06/loreal-hair-relaxer-lawsuit-cancer">Latest Hair Relaxer post</a></li>
                                    <li><a className='hover:text-red-600' href="https://www.millerandzois.com/products-liability/tylenol-autism/">Latest Tylenol Post</a></li>
                                    <li><a className='hover:text-red-600' href="https://www.millerandzois.com/products-liability/medical-device-lawsuits/talcum-powder/">Latest Talcom Powder Post</a></li>
                                    <li><a className='hover:text-red-600' href="/">Latest Fire Fighter Foam Post</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default LegalNews