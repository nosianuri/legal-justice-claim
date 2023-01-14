import React from 'react'
import Heading from './Heading/Heading';
import '../MainBody/MainBody.css';

const Category = () => {
    const catgeory = ["Medical Malpractice", "Mesothelioma", "Talcum Powder", "Roundup", "Personal Injury", "NEC", "3M Earplugs", "Zantac"]
  return (
    <div>
        <section className='catgorys mt-16'>
        <Heading title='Categorys' />
        {catgeory.map((val) => {
          return (
            <div className='category category1'>
              <span>{val}</span>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Category