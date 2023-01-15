import React from 'react'

const FiAbout = () => {
  return (
    <div  style={{
        background: `url(https://i.ibb.co/tLqnQSD/about-bg.png)`
      }} class="bg-no-repeat !bg-cover">
      <div className='lg:px-36 lg:mx-16 mx-5 pt-10 pb-28'>
      <h1 className='text-center text-white lg:text-5xl text-3xl py-3'>ABOUT FIREFIGHTING FOAM (AFFF) & PFAS</h1>
        <div className='lg:w-full w-full h-[1px] bg-gray-400'></div>
        <p className='text-white my-5'>IKnown officially as aqueous film-forming foam (AFFF), firefighting foam creates a blanket that cuts off the fuel from the oxygen it needs to burn. To help smother the fire, chemicals known as perfluoroalkyl and polyfluoroalkyl substances (PFAS) were, and in some circumstances, still are used. PFAS are non-biodegradable, stay in the body for a very long time, and have been linked to an increased risk of cancer.</p>
        <p className='text-white mb-5'>Major health organizations like The Centers for Disease Control and Prevention (CDC), United States Environmental Protection Agency (EPA), and the American Cancer Society (ACS) have noted that certain PFAS may be linked to cancer in firefighters. In fact, the EPA has classified PFAS as “emerging contaminants” meaning they are likely dangerous to human health.</p>
        <p className='mb-5 text-white'>Manufacturers are alleged to have knowingly used PFAS since the 1950s to develop and sell firefighting foam, putting individuals that work directly with the chemicals at a higher risk of exposure to AFFF. Those who served as airport or military firefighters are at particularly high risk of PFAS exposure. Until 2018, the Federal Airport Administration (FAA) required airports to use PFA-containing foam following U.S. Navy guidelines. The U.S. Navy and other branches of the military are also at higher risk of exposure.</p>
        <div className='lg:w-full w-full h-[1px] bg-gray-400'></div>
      </div>
        
    </div>
  )
}

export default FiAbout