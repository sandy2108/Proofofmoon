import React from 'react'
import '../index';
import { HiArrowUpRight } from "react-icons/hi2";
import moo from '../Assests/mis.jpg';






const Hero= () => {
  return (
    <div className='w-full h-screen '>
        <div class='w-screen h-screen absolute '>
          <img src={moo} alt='' className='w-full h-screen object-cover mix-blend-overlay'/>       
        </div>
        <div class='max-w-[1240px] mx-auto text-white relative '> 
         
          <div class='flex items-center justify-center px-4 lg:py-20 py-10 '>
            <h4 className='text-5xl py-2 font-bold text-center sm:text-5xl sm:py-3 sm:mb-3'>BUILT IT FOR MOONERS IN THIS SPACES </h4>
          </div>
                
        </div>
        <div className='max-w-[1240px] mx-auto mt-20'>
          <div className=' grid md:grid-cols-3 my-3 sm:flex-row mx-8'>
             
             <button className='cursor-pointer flex px-4 py-2 rounded-none bg-transparent mx-2 my-2 justify-center ' >
               <HiArrowUpRight class='h-6 font-bold mr-4 mt-1'/>
 
                <div>
                 <p className='justify-start text-2xl text-left text-blue-600'>BUY $POM</p>
                 <h3 class='text-md text-right'>On Uniswap</h3>
                </div>
              </button>
           <button className='cursor-pointer flex px-4 py-2 rounded-none bg-transparent mx-2 my-2 justify-center' onClick={'https://www.dextools.io/app/en'}>
              <HiArrowUpRight class='h-6 font-bold mr-4'/>
              <div>
                <p className='justify-start text-2xl text-left text-blue-600'>POM CHART </p>
                <h3>Dextools</h3>
              </div>
            </button>
           <button className='cursor-pointer flex px-4 py-2 rounded-none bg-transparent mx-2 my-2 justify-center' >
             <HiArrowUpRight class='h-6 font-bold mr-4'/>
             <div>
              <a href='https://t.me/proofofapes' className='justify-start text-2xl text-left text-blue-600'>Community</a>
              <h6>Telegram</h6>
            </div>
          </button>
          </div>
        </div>
        
     </div>
  )  
}

export default Hero;