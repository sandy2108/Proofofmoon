import React from 'react'
import { HiArrowUpRight } from "react-icons/hi2";
import { BiExpandAlt } from "react-icons/bi";


const Info = () => {
  return (
    <div name='pom' className='w-screen py-3 bg-black '>
        <div className='max-w-[1240px] mx-auto mt-20 mb-10'>
            <div className='mb-25'>
                <p className='text-[#FFFFFF] my-3 text-4xl flex items-center justify-center'>GET POM. </p>
                <p className='text-[#FFFFFF] my-3 text-4xl flex items-center justify-center'>GET STARTED!</p>
            </div>
            
           <div className=' grid md:grid-cols-3 my-10 sm:flex-row mx-8'>               
 
              <a href='https://uniswap.org/' alt='' className='flex px-4 py-2 rounded-lg mx-2 my-2 justify-center text-white hover:bg-indigo-900/80 shadow shadow-blue-500/40 hover:shadow-2xl hover:shadow-indigo-500'>
                 <div>
                   <p  className='flex justify-center items-center text-2xl text-left text-blue-600'>BUY $POM </p> 
                   <p className='text-purple-300 text-xs flex items-center'> On Uniswap  <HiArrowUpRight className='ml-3'/></p>
                 </div>
                               
              </a>
              
              <a href='https://www.dextools.io/app/en' className='cursor-pointer flex px-4 py-2 rounded-lg bg-transparent mx-2 my-2 justify-center hover:bg-indigo-900/80 shadow shadow-blue-500/40 hover:shadow-2xl hover:shadow-indigo-500/60'>     
                 <div>
                   <p  className='flex justify-center items-center text-2xl text-left text-blue-600'>POM CHART </p> 
                   <p className='text-purple-300 text-xs flex items-center'> DEXTOOLS  <HiArrowUpRight className='ml-3'/></p>
                 </div>
              </a>
              <a href='https://t.me/proofofapes' alt='' className='cursor-pointer flex px-4 py-2 rounded-lg bg-transparent mx-2 my-2 justify-center hover:bg-indigo-900/80 shadow shadow-blue-500/40 hover:shadow-2xl hover:shadow-indigo-500/60' >
                 <div>
                   <p  className='flex justify-center items-center text-2xl text-left text-blue-600'>COMMUNITIY </p> 
                   <p className='text-purple-300 text-xs flex items-center'> On Telegram  <HiArrowUpRight className='ml-3'/></p>
                 </div>
              </a>
          </div>
          <div className='flex justify-around items-center text-[#FFFFFF] max-w-[1240px] mx-8 mt-5'>
                <a href='https://www.coingecko.com/' alt='' className='hover:text-gray-500 flex items-center '>Coingecko <BiExpandAlt/></a>
                <a href='https://coinmarketcap.com/' alt='' className='hover:text-gray-500 flex items-center '>Coinmarketcap<BiExpandAlt className='w-5'/></a>
          </div>
        </div>

    </div>
  )
}

export default Info