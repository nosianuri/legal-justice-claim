import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';

const NewsCards = () => {
    // const [blogs, setBlogs] = useState([]);
    // const [pageCount, setPageCount] = useState(0);
    const blogs = [
        {
            "_id": 1,
            "name": "Brazil virtual numbers",
            "link": "/",
            "date": "Jan 18, 2023",
            "time": "4 min read",
            "desc": "A person is directly related to technology. Previously, we used to leave the house for purchases, study and watching movies, but today everything is available online. There are thousands of apps on the network for ordering food at home, education, entertainment and more. To get access to this ecosystem, much is not …"
        },
        {
            "_id": 2,
            "name": "How to create a Classic Rummy account without a phone number",
            "link": "/",
            "date": "Jan 18, 2023",
            "time": "4 min read",
            "desc": "When it comes to card games in India, it is difficult to find a person who is not familiar with Rummy. This is a game with a rich history which allows not only to have fun, but also to earn money. Previously, people gathered at the same table to arrange Rummy competitions. Over time, websites and apps began to appear …"
        },
        {
            "_id": 3,
           "name": "How to create a Dahadaha account without a phone number",
            "link": "/",
            "date": "Jan 18, 2023",
            "time": "4 min read",
            "desc": "Dahadaha is a local app for residents of Turkey, which was developed by Coca-Cola Company. The purpose of the app is to motivate people to buy branded fizzy drink (Coca-Cola, Fanta, Sprite). For this, users receive various bonuses: chances to win big prizes, coupons for stores and much more. To use Dahadaha, it is …"
        },
        {
            "_id": 4,
            "name": "How to create a Mail.ru account without a phone number",
            "link": "/",
            "date": "Jan 18, 2023",
            "time": "4 min read",
            "desc": "E-mail remains one of the main means of communication for Internet users, even despite the emergence and development of social networks. In Russia, Mail.ru is the most popular because it provides all the necessary tools for communication by mail (cloud, filters, the ability to send files, and so forth). Also, …"
        },
        {
            "_id": 5,
            "name": "How to create an Eneba account without a phone number",
            "link": "/",
            "date": "Jan 18, 2023",
            "time": "4 min read",
            "desc": "Eneba online store is popular among gamers. License keys to games, gift cards, paid programs and much more are sold here. The project has been working since 2018 and officially cooperates with Steam, therefore it has established itself among users. There are about 15 thousand different games in the Eneba collection. To …"
        },
        {
            "_id": 6,
            "name": "Virtual numbers for Gmail",
            "link": "/",
            "date": "Jan 18, 2023",
            "time": "4 min read",
            "desc": "Gmail is a free web-service of email provided by Google Corporation. Gmail allows users to send and receive emails, filter messages and block spam. The advantage of the service is that it provides 15GB for storing email data. There is also an opportunity to use the voice and video chat function, provided that a …"
        },
        {
            "_id": 7,
            "name": "How to create a Chispa Dating Latino account without a phone number",
            "link": "/",
            "date": "Jan 18, 2023",
            "time": "4 min read",
            "desc": "It seems that dating applications Tinder or Badoo are known to everyone. It is sometimes difficult to find a couple in such services, because users are gathered from different parts of the world. In this case, local applications have been developed, for example, Chispa Dating Latino-a place where single Latinos gather. …"
        },
        {
            "_id": 8,
            "name": "Virtual numbers for Clubhouse",
            "link": "/",
            "date": "Jan 18, 2023",
            "time": "4 min read",
            "desc": "Clubhouse is a voice-based social network allowing people to talk, tell stories, share ideas, strengthen friendships and become acquainted. Log into different chats, on different topics, communicate in person or in groups. You have the opportunity to engage in frank conversations with famous and influential people. …"
        },
        {
            "_id": 9,
            "name": "How to create a Swagbucks account without a phone number",
            "link": "/",
            "date": "Jan 18, 2023",
            "time": "4 min read",
            "desc": "If you are a lover of saving money or earning on simple actions, Swagbucks will help you with this. The service is known for literally giving money to users. For registration, filling in the profile and installing the extension, you get about 50 SB (local currency), which is pegged to the dollar-50SB=0.5$. The project …"
        },
        {
            "_id": 10,
            "name": "How to create an Airbnb account without a phone number",
            "link": "/",
            "date": "Jan 18, 2023",
            "time": "4 min read",
            "desc": "Airbnb is an online market connecting people who want to rent out their apartments with people who are looking for accommodation in certain places. Here landlords earn on their property, and travelers save and find more comfortable accommodation than hotels at a low price. Today, the Airbnb database has a huge number …"
        },
        {
            "_id": 11,
            "name": "Brazil virtual numbers",
            "link": "/",
            "date": "Jan 18, 2023",
            "time": "4 min read",
            "desc": "A person is directly related to technology. Previously, we used to leave the house for purchases, study and watching movies, but today everything is available online. There are thousands of apps on the network for ordering food at home, education, entertainment and more. To get access to this ecosystem, much is not …"
        }
    ]

    // useEffect(() => {
    //     fetch('blog.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setBlogs(data);
    //         })
    // });

    // useEffect(() => {
    //     fetch('blog.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const count = data.count;
    //             const pages = Math.ceil(count / 10);
    //             setPageCount(pages);
    //         })
    // });
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