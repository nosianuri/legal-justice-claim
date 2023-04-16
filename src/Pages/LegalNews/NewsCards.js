import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';

const NewsCards = () => {
    // const [blogs, setBlogs] = useState([]);
    // const [pageCount, setPageCount] = useState(0);
    const blogs = [
        {
            "_id": 1,
            "name": "Round Up",
            "link": "https://www.forbes.com/advisor/legal/product-liability/roundup-lawsuit-update/",
            "date": "Jan 18, 2023",
            "time": "4 min read",
            "desc": "Monsanto has settled over 100,000 Roundup lawsuits, paying out about $11 billion as of May 2022. The recent Roundup settlement will pay as much as $9.6 billion to resolve victims involved in current litigation and set aside $1.25 billion to pay future claims as part of separate class-action lawsuits. The average Roundup lawsuit payout for Round One settlements was in the $120,000 to $180,000 per person range.     …"
        },
        {
            "_id": 2,
            "name": "Camp Lejeune",
            "link": "https://www.elglaw.com/faq/expected-camp-lejeune-settlement-amount/",
            "date": "Jan 18, 2023",
            "time": "4 min read",
            "desc": "Camp Lejeune lawsuit settlement payouts for contaminated water exposure is estimated to be over $6.7 billion. Victims who pursue a Camp lejeune toxic water claim will receive lucrative settlements which could be well over $1 million in some cases. However, another renowned law firm stated that settlement payouts for Camp Lejeune toxic exposure victims are estimated at $6.7 billion, individuals who file a claim will receive between $25,000 and $1 million or more, depending on the severity of their illness.…"
        },
        {
            "_id": 3,
           "name": "Mva",
            "link": "https://www.forbes.com/advisor/legal/auto-accident/typical-car-settlement-amounts/",
            "date": "Jan 18, 2023",
            "time": "4 min read",
            "desc": "The Insurance Information Institute reports that the typical car accident settlement amount for bodily injury was $15,785 and the average compensation for property damage was $3,841 in 20181. Forbes also reports that the median amount awarded in auto accident cases was $16,000…"
        },
        {
            "_id": 4,
            "name": "Talcom Powder",
            "link": "https://www.millerandzois.com/products-liability/medical-device-lawsuits/talcum-powder/",
            "date": "Jan 18, 2023",
            "time": "4 min read",
            "desc": "Johnson & Johnson paid $100,000,000 to settle a group of 1,000 talcum powder lawsuits.Johnson & Johnson announced that it will pay $8.9 billion to settle talcum powder lawsuits. The average compensation payout for talc powder victims is $4.4 million. Legal-Bay LLC reports that Johnson & Johnson will pay out $8.9 billion in damages to settle the talcum powder lawsuit.…"
        },
        {
            "_id": 5,
            "name": "NEC",
            "link": "https://www.torhoermanlaw.com/toxic-baby-formula-nec-lawsuit/nec-lawsuit-payout-settlements/",
            "date": "Jan 18, 2023",
            "time": "4 min read",
            "desc": "The average verdict or settlement payout in a sampling of recent malpractice lawsuits for NEC in premature infants was around $3.5 million, but some cases may be worth more or less than that. The estimated settlement amounts for NEC lawsuits may range between $5,000 to over $500,000, but these are not guaranteed and depend on the outcome of each case. The compensation amount for NEC lawsuits may vary depending on the severity of the injury, the fault of the defendant, the future medical expenses, and other factors.…"
        },
        {
            "_id": 6,
            "name": "Tylenol Autism Lawsuit",
            "link": "https://www.millerandzois.com/products-liability/tylenol-autism/",
            "date": "Jan 18, 2023",
            "time": "4 min read",
            "desc": "A Tylenol autism class action lawsuit has been certified and it is estimated that over 100,000 victims will file a lawsuit. While it's too early to provide a solid dollar amount estimate for settlements, based on prior results in similar dangerous drug lawsuits, it is projected that Tylenol Autism ADHD Lawsuit Payouts could be between $50,000 and $500,000+ depending on the strength of the claim and direction of the litigation. The potential compensation amount is significant and could provide much-needed financial support to those who have been affected by the dangerous side effects of Tylenol. This lawsuit not only aims to provide justice for victims but also aims to protect unborn children through the addition of a new warning label. The settlement of these lawsuits is expected in 2023, and victims can take action now to hold the manufacturers accountable and receive the compensation they deserve.…"
        },
        {
            "_id": 7,
            "name": "Fire Fighting Foam",
            "link": "/",
            "date": "Jan 18, 2023",
            "time": "4 min read",
            "desc": "AFFF firefighting foam cases could result in significant compensation payouts for victims, with top tier settlements ranging from $300,000 to $600,000 on average. Second tier cases may receive an estimated value of $150,000 to $280,000. These payouts are based on previous mass tort cases involving cancer, and demonstrate the potential for victims to receive much-needed financial support. It's important for those affected by AFFF firefighting foam to take action now and hold manufacturers accountable for their negligence, to ensure they receive the compensation they deserve.…"
        },
        {
            "_id": 8,
            "name": "Hair Relaxer",
            "link": "https://www.theguardian.com/us-news/2023/feb/06/loreal-hair-relaxer-lawsuit-cancer",
            "date": "Jan 18, 2023",
            "time": "4 min read",
            "desc": "The potential value of hair relaxer lawsuits can range from $300,000 to $1,750,000. However, the amount of compensation you may be able to receive in a hair relaxer lawsuit depends on different factors of your case.…"
        }
    ];
    return (
        <div className='my-4 mr-8'>
            <div className='space-y-5'>
                {
                    blogs.map(blog => <NewsCard
                        key={blog._id}
                        blog={blog}
                    ></NewsCard>)
                }

            </div>
        </div>
    )
}

export default NewsCards