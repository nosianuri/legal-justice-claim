import React from 'react'

const RuAbout = () => {
  return (
    <div  style={{
        background: `url(https://i.ibb.co/tLqnQSD/about-bg.png)`
      }} class="bg-no-repeat !bg-cover">
      <div className='lg:px-36 lg:mx-16 mx-5 pt-10 pb-28'>
      <h1 className='text-center text-white lg:text-5xl text-3xl py-3'>More about ROUNDUP®</h1>
        <div className='lg:w-full w-full h-[1px] bg-gray-400'></div>
        <p className='text-white my-5'>Roundup® is one of the most widely used herbicides in the U.S. and is manufactured by Monsanto Corporation. Millions of consumers have used the weed killer in their home gardens and lawns since it was introduced in 1976 and, unfortunately, it has been found to contain harmful chemicals that may cause cancer to those exposed to it. Millions more acres of farmland have been doused in Roundup® to control weeds and other pests. The active chemical ingredient in Roundup® is glyphosate which has been deemed “probably cancerous” by the International Agency for Research on Cancer and numerous studies have been published linking the herbicide to a form of blood cancer called Non-Hodgkin Lymphoma (NHL). People who work with the herbicide on a regular basis are possibly most at risk for Roundup® exposure and could be at an increased risk for adverse side effects.</p>
        <div className='lg:w-full w-full h-[1px] bg-gray-400'></div>
      </div>
        
    </div>
  )
}

export default RuAbout