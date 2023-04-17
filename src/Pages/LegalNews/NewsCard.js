import React from 'react';

const NewsCard = (props) => {
    const { name, date, time, link, desc } = props.blog;
    return (
        <div className='bg-white p-5 shadow-md'>
            <h2 className='text-2xl'>{name}</h2>
            <div className='flex gap-5 mt-2'>
                <div><i class="fa fa-calendar pr-2" aria-hidden="true"></i>{date}</div>
                <div><i class="fa-solid fa-mug-saucer pr-2"></i>{time}</div>
            </div>
            <p className='mt-3 text-md sm:text-[16px] text-justify'>{desc}</p>
            <p className='text-red-600 hover:underline mt-2'>Read More</p>
        </div>
    )
}

export default NewsCard