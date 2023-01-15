import React from 'react'
import Heading from './Heading/Heading';
import '../MainBody/MainBody.css';

const Category = () => {
  const catgeory = ["Medical Malpractice", "Mesothelioma", "Talcum Powder", "Roundup", "Personal Injury", "NEC", "3M Earplugs", "Zantac"]
  return (
    <div>
      <section className='catgorys mt-16'>
        <Heading title='Categorys' />
        <div>
          <a href="/medical-malpractice">
            <div className='category category1'>
              <span>Medical Malpractice</span>
            </div>
          </a>
          <a href="/mesothelioma">
            <div className='category category1'>
              <span>Mesothelioma</span>
            </div>
          </a>
          <a href="/talcom-powder">
            <div className='category category1'>
              <span>Talcum Powder</span>
            </div>
          </a>
          <a href="/roundup">
            <div className='category category1'>
              <span>Roundup</span>
            </div>
          </a>
          <a href="/injury">
            <div className='category category1'>
              <span>Personal Injury</span>
            </div>
          </a>
          <a href="/nec">
            <div className='category category1'>
              <span>NEC</span>
            </div>
          </a>
          <a href="/earplug">
            <div className='category category1'>
              <span>3M Earplugs</span>
            </div>
          </a>
          <a href="/zantac">
            <div className='category category1'>
              <span>Zantac</span>
            </div>
          </a>
        </div>
        {/* {catgeory.map((val) => {
          return (
            <div className='category category1'>
              <span>{val}</span>
            </div>
          )
        })} */}
      </section>
    </div>
  )
}

export default Category