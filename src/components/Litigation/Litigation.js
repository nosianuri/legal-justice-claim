import React from 'react';

const Litigation = () => {
  const blogs = [
    {
      id: 1,
      url: 'https://i.ibb.co/2W415ds/Roundup-1.jpg',
      link: '/roundup',
      title: 'Roundup',
      subTitle: 'FDA calls for Zantac to be pulled from market immediately',
      desc: 'Monsanto has settled over 100,000 Roundup lawsuits, paying out about $11 billion as of May 2022. The recent Roundup settlement will pay as much as $9.6 billion to resolve victims involved in current litigation and set aside $1.25 billion to pay future claims as part of separate class-action lawsuits. The average Roundup lawsuit payout for Round One settlements was in the $120,000 to $180,000 per person range.Monsanto, a well-known agricultural company, has been at the center of controversy over its Roundup weed killer for years. In recent times, the company has faced a flood of lawsuits from individuals claiming that the product caused them to develop cancer...',
    },
    {
      id: 2,
      url: 'https://i.ibb.co/rmqppBZ/camp.png',
      link: '/camplejeune',
      title: 'Camp Lejeune',
      subTitle: 'FDA calls for Zantac to be pulled from market immediately',
      desc: 'Camp Lejeune lawsuit settlement payouts for contaminated water exposure is estimated to be over $6.7 billion. Victims who pursue a Camp lejeune toxic water claim will receive lucrative settlements which could be well over $1 million in some cases. However, another renowned law firm stated that settlement payouts for Camp Lejeune toxic exposure victims are estimated at $6.7 billion, individuals who file a claim will receive between $25,000 and $1 million or more, depending on the severity of their illness.The United States Marine Corps Camp Lejeune has long been the subject of controversy over its contaminated water supply, which led to numerous health problems for those stationed there. ..',
    },
    {
      id: 3,
      url: 'https://i.ibb.co/hB2yH6n/car-mva.png',
      link: '/mva',
      title: 'MVA',
      subTitle: 'FDA calls for Zantac to be pulled from market immediately',
      desc: 'The Insurance Information Institute reports that the typical car accident settlement amount for bodily injury was $15,785 and the average compensation for property damage was $3,841 in 20181. Forbes also reports that the median amount awarded in auto accident cases was $16,000.Car accidents are unfortunately all too common on our roads, and the aftermath can be both physically and financially devastating. If you have been involved in a car accident, you may be wondering what kind of settlement you can expect to receive.However, its important to note that every case is unique, and settlement amounts can vary widely depending on the circumstances of the accident...',
    },
    {
      id: 4,
      url: 'https://i.ibb.co/cDWBrW5/talcum.png',
      link: '/talcome',
      title: 'Talcum Powder',
      subTitle: 'FDA calls for Zantac to be pulled from market immediately',
      desc: 'Johnson & Johnson paid $100,000,000 to settle a group of 1,000 talcum powder lawsuits.Johnson & Johnson announced that it will pay $8.9 billion to settle talcum powder lawsuits. The average compensation payout for talc powder victims is $4.4 million. Legal-Bay LLC reports that Johnson & Johnson will pay out $8.9 billion in damages to settle the talcum powder lawsuit.The use of talcum powder has been a common practice for many years, but recent lawsuits have shed light on the potential dangers of this product. Johnson & Johnson, one of the leading producers of talcum powder, has faced numerous lawsuits from individuals claiming that the product caused them to develop cancer... ',
    },
    {
      id: 5,
      url: 'https://i.ibb.co/G5n0s1t/nec-baby.png',
      link: '/nec',
      title: 'NEC',
      subTitle: 'FDA calls for Zantac to be pulled from market immediately',
      desc: 'The average verdict or settlement payout in a sampling of recent malpractice lawsuits for NEC in premature infants was around $3.5 million, but some cases may be worth more or less than that. The estimated settlement amounts for NEC lawsuits may range between $5,000 to over $500,000, but these are not guaranteed and depend on the outcome of each case. The compensation amount for NEC lawsuits may vary depending on the severity of the injury, the fault of the defendant, the future medical expenses, and other factors...',
    },
    {
      id: 6,
      url: 'https://i.ibb.co/3MywvNN/tylenol-service.png',
      link: '/tylenol',
      title: 'Tylenol',
      subTitle: 'FDA calls for Zantac to be pulled from market immediately',
      desc: 'The average verdict or settlement payout in a sampling of recent malpractice lawsuits for NEC in premature infants was around $3.5 million, but some cases may be worth more or less than that. The estimated settlement amounts for NEC lawsuits may range between $5,000 to over $500,000, but these are not guaranteed and depend on the outcome of each case. The compensation amount for NEC lawsuits may vary depending on the severity of the injury, the fault of the defendant, the future medical expenses, and other factors...',
    },
    {
      id: 7,
      url: 'https://i.ibb.co/d5CBS1d/fire.png',
      link: '/fire-fighter-foam',
      title: 'Fire Fighter Foam',
      subTitle: 'FDA calls for Zantac to be pulled from market immediately',
      desc: 'The average verdict or settlement payout in a sampling of recent malpractice lawsuits for NEC in premature infants was around $3.5 million, but some cases may be worth more or less than that. The estimated settlement amounts for NEC lawsuits may range between $5,000 to over $500,000, but these are not guaranteed and depend on the outcome of each case. The compensation amount for NEC lawsuits may vary depending on the severity of the injury, the fault of the defendant, the future medical expenses, and other factors...',
    },
    {
      id: 8,
      url: 'https://i.ibb.co/Qn5182C/hair-relaxer.jpg',
      link: '/hair-relaxer',
      title: 'Hair Relaxer',
      subTitle: 'FDA calls for Zantac to be pulled from market immediately',
      desc: 'The average verdict or settlement payout in a sampling of recent malpractice lawsuits for NEC in premature infants was around $3.5 million, but some cases may be worth more or less than that. The estimated settlement amounts for NEC lawsuits may range between $5,000 to over $500,000, but these are not guaranteed and depend on the outcome of each case. The compensation amount for NEC lawsuits may vary depending on the severity of the injury, the fault of the defendant, the future medical expenses, and other factors...',
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
                <p className='text-xs '>The FDA has warned that Zantac® may be contaminated with cancer-causing agent...<span className='text-[#800020] font-bold'><a className='hover:text-[#13100E]' href={blog.link}> MORE »</a></span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Litigation