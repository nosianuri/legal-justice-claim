import React from 'react';

const Litigation = () => {
  const blogs = [
    {
      id: 1,
      url: 'https://i.ibb.co/2W415ds/Roundup-1.jpg',
      link: '/roundup',
      title: 'Roundup',
      subTitle: 'Monsanto has settled over 100,000 Roundup lawsuits of May 2022',
      desc: 'Monsanto has settled over 100,000 Roundup lawsuits, paying out about $11 billion as of May 2022',
    },
    {
      id: 2,
      url: 'https://i.ibb.co/rmqppBZ/camp.png',
      link: '/camplejeune',
      title: 'Camp Lejeune',
      subTitle: 'Camp Lejeune lawsuit payouts for contaminated water exposure',
      desc: 'Camp Lejeune lawsuit settlement payouts for contaminated water exposure is estimated',
    },
    {
      id: 3,
      url: 'https://i.ibb.co/hB2yH6n/car-mva.png',
      link: '/mva',
      title: 'MVA',
      subTitle: 'Car accidents are unfortunately all too common on our roads',
      desc: 'The Insurance Information Institute reports that the typical car accident settlement',
    },
    {
      id: 4,
      url: 'https://i.ibb.co/cDWBrW5/talcum.png',
      link: '/talcome',
      title: 'Talcum Powder',
      subTitle: 'Johnson & Johnson to settle a group of 1,000 talcum powder lawsuits',
      desc: 'Johnson & Johnson paid $100,000,000 to settle a group of 1,000 talcum powder lawsuits',
    },
    {
      id: 5,
      url: 'https://i.ibb.co/G5n0s1t/nec-baby.png',
      link: '/nec',
      title: 'NEC',
      subTitle: 'NEC lawsuits may vary depending on the severity of the injury',
      desc: 'The average verdict or settlement payout in a sampling of recent malpractice lawsuits',
    },
    {
      id: 6,
      url: 'https://i.ibb.co/3MywvNN/tylenol-service.png',
      link: '/tylenol',
      title: 'Tylenol',
      subTitle: 'A Tylenol autism class action lawsuit has been certified and estimated',
      desc: 'The lawsuit was filed on behalf of thousands of families across the United States who claim',
    },
    {
      id: 7,
      url: 'https://i.ibb.co/d5CBS1d/fire.png',
      link: '/fire-fighter-foam',
      title: 'Fire Fighter Foam',
      subTitle: 'Firefighting foam or (AFFF) has been used to extinguish fires',
      desc: 'AFFF firefighting foam, which contains toxic PFAS chemicals, has been linked to a range of',
    },
    {
      id: 8,
      url: 'https://i.ibb.co/Qn5182C/hair-relaxer.jpg',
      link: '/hair-relaxer',
      title: 'Hair Relaxer',
      subTitle: 'The first hair relaxer lawsuit was filed in 2011',
      desc: 'In a hair relaxer lawsuit, the compensation amount you receive will depend on various',
    },
  ];

  return (
    <div className='max-w-7xl mx-auto px-1'>
      <div className='grid lg:grid-cols-4 grid-cols-1 gap-10 my-10' >
        {blogs.map((blog) => (
          <div key={blog.id}>
            <div className='flex-wrap  mt-5'>
              <div className='image-box'>
              <a href={blog.link}>
              <img className='!w-96 h-48' src={blog.url} alt="" />
              </a>
              </div>
              <div>
                <h3 className='text-[#13100E]  text-lg'><a className='hover:text-[#800020]' href="/zantac">{blog.title}</a></h3>
                <h5 className='text-[#300303] text-md leading-none mb-1 overflow-y-hidden'>{blog.subTitle}</h5>
                <p className='text-xs '>{blog.desc}...<span className='text-[#800020] font-bold'><a className='hover:text-[#13100E]' href={blog.link}> MORE »</a></span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Litigation