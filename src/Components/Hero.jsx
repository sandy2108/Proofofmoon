import React from 'react'
import '../index';

import moo from '../Assests/mis.jpg';

const Hero= () => {
  return (
    <div className='w-full h-screen '>
        <div class='w-screen h-screen absolute '>
          <img src={moo} alt='' className='w-full h-screen object-cover mix-blend-overlay'/>       
        </div>
        <div class='max-w-[1240px] mx-auto text-white relative '> 
          <div class='flex items-center justify-center px-4 lg:py-20 py-10 '>
            <h4 className='text-4xl lg:text-5xl py-2 font-bold text-center sm:text-4xl sm:py-3 sm:mb-3'>DEGEN CHAIN FOR THE DEGENS </h4>
          </div>
          <div class='flex items-center justify-center px-4 lg:py-20 py-10 '>
            <h4 className='text-5xl py-2 font-bold text-center sm:text-5xl sm:py-3 sm:mb-3'>BUILT IT FOR MOONERS IN THIS SPACES </h4>
          </div>
          
        </div>
        
        
     </div>
  )  
}

export default Hero;