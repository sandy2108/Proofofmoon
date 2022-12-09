import React from 'react'
import '../index';

import moo from '../Assests/mis.jpg';




const Hero= () => {
  return (
    <div className='w-full h-screen'>
        <div class='w-screen h-screen absolute '>
          <img src={moo} alt='' className='w-full h-screen object-cover mix-blend-overlay'/>       
        </div>
        <div class='max-w-[1240px] mx-auto text-white relative '> 
          <div className='px-4 py-12'>
            <h2 className='pt-8 text-center uppercase text-slate-300 text-3xl font-bold '>POM </h2>
            <h3 className='text-5xl py-6 font-bold text-center '>Finding the Right team </h3>
         
          </div>
        
         
        </div>

     </div>
      
  )  
}

export default Hero;