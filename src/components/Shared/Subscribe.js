import React from 'react'
import Heading from './Heading/Heading';
import '../MainBody/MainBody.css';
import sideimg from '../../assets/law.png';

const Subscribe = () => {
    return (
        <div className='my-16'>
            <Heading title='Subscribe' />

            <section className='subscribe'>
                <h1 className='title'>Subscribe to our New WebSites</h1>
                <form action=''>
                    <input className='focus:outline-none border-2 border-[#BD902D]' type='email' placeholder='Email Address...' />
                    <button>
                        <i className='fa fa-paper-plane'></i> SUBMIT
                    </button>
                </form>
            </section>

            <section className='banner'>
                <img src={sideimg} alt='' />
            </section>
        </div>
    )
}

export default Subscribe