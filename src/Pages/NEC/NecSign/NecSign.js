import React from 'react'

const NecSign = () => {
  return (
    <div className='lg:px-36 lg:mt-10'>
    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-16'>
        <div className='p-5'>
            <h1 className='lg:my-8 my-4 lg:text-4xl text-2xl text-center'>SIGNS & SYMPTOMS</h1>
            <div className='lg:w-full w-full h-[1px] bg-gray-400'></div>
            <p className='mt-5'>NEC (Necrotizing enterocolitis) results in infection and inflammation that can destroy the intestinal tissue. This can leave permanent scars or narrow parts of the infant’s intestine, causing lifelong complications. In severe NEC cases, the complete destruction of intestine tissue can lead to severe infection and, in many cases, death. Other symptoms of NEC include, but are not limited to:</p>
            <ul className='terms-article'>
                <li>Intestinal perforation (a hole in the intestines)</li>
                <li>Scarring or strictures in the intestines</li>
                <li>Sepsis (severe infection affecting the entire body)</li>
                <li>Cerebral palsy</li>
                <li>Neurological damage</li>
                <li>Abdominal pain and swelling</li>
                <li>Changes in heart rate, breathing, blood pressure or body temperature</li>
                <li>Diarrhea with bloody stool</li>
                <li>Green or yellow vomit</li>
                <li>Lethargy</li>
                <li>Refusing to eat</li>
                <li>Lack of weight gain</li>
            </ul>
            
        </div>
        <div className='shadow-xl p-5'>
            <h1 className='lg:my-8 my-4 lg:text-4xl text-2xl text-center'>TAKE ACTION</h1>
            <div className='lg:w-full w-full h-[1px] bg-gray-400 '></div>
            <p className='my-5'>As early as 1990, a study found that babies may be 6 to 10 times more likely to develop NEC when fed cow’s milk products, compared to breast milk. Having disclosed these findings, manufacturers could have offered safer alternatives to parents and hospitals.</p>
            <p>Despite years of research linking cow-milk based formulas to NEC, manufacturers failed to warn parents, doctors and hospitals about the risks of their products. Instead, they promoted their product as safe and effective. With countless babies now stricken with NEC symptoms after using these formulas, many are turning to the courts and filing lawsuits to hold the manufacturers accountable.</p>
            <p>If your loved one has been diagnosed with any of these serious NEC symptoms after using one of these products, you need to speak up! You might be eligible for financial compensation for your pain and suffering. Don’t suffer in silence. Fill out a no-cost claim review to see if you are eligible to receive compensation. – <a className='text-blue-800 hover:underline' href="/">complete the free and easy claim review form today</a>.</p>
            <div className='text-center my-10'>
                <a href="/">
                    <button className='uppercase py-3 px-5 rounded-full bg-[#BD902D] text-white text-xl'>Get Help Now!</button>
                </a>
            </div>
        </div>
    </div>
</div>
  )
}

export default NecSign