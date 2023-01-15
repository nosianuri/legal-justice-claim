import React from 'react';

const EAbout = () => {
  return (
    <div  style={{
        background: `url(https://i.ibb.co/tLqnQSD/about-bg.png)`
      }} class="bg-no-repeat !bg-cover">
      <div className='lg:px-36 lg:mx-16 mx-5 pt-10 pb-28'>
      <h1 className='text-center text-white lg:text-5xl text-3xl py-3'>ABOUT 3M Earplugs</h1>
        <div className='lg:w-full w-full h-[1px] bg-gray-400'></div>
        <p className='text-white my-5'>In 2000, Aearo Technologies, now owned by 3M, manufactured the Combat Arms Earplugs ™ (CAEv2). In making the earplugs, the company realized a design defect made them too short to properly seal the ear canal from damaging noise. Not even trained audiologists could tell the earplugs fit loosely, and thousands of military service members entered into combat with a false sense of hearing protection against deafening high-level noise. Instead of correcting their mistake, 3M allegedly knowingly sold the faulty earplugs to the US government, who issued them as standard for military personnel between 2003 and 2015. The 3M earplugs with their unique dual-ended design allowed soldiers to insert the olive side to protect against all sound. With the yellow side inserted, it protected against explosions but allowed soldiers to hear spoken commands or approaching enemies.</p>
        <p className='text-white mb-5'>Tinnitus and hearing loss are the top causes of service-related disability among military personnel, according to the U.S. Department of Veteran Affairs. Hundreds of military men and women who used these earplugs are filing lawsuits against 3M and Aearo after they suffered hearing damage. Many of these lawsuits have been combined in a mass litigation in a Florida federal court. As of July 2019, there were 1,220 combat earplug lawsuits pending against 3M in that litigation.</p>
        <div className='lg:w-full w-full h-[1px] bg-gray-400'></div>
      </div>
        
    </div>
  )
}

export default EAbout