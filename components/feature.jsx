import React from 'react'
import Gallery from './gallary'


const Feature = () => {
  return (
    <section>
        <div className='text-center text-sm text-red-600  py-12 md:flex-left md:text-xl py-6 bg-slate-100'>
            WANT TO GET INVOLVED?
        </div>
        <div className='m-12 py-6'>
            
            <Gallery/>
            
            
        </div>

    </section>
  )
}

export default Feature