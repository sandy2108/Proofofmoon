import React from 'react'
import moo from '../Assests/moon.png';



const Team = () => {
  return (
    <div className='w-screen bg-black'>
      <div className='max-w-[1240px] mx-auto relative text-white'>
       <div className='grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-5 relative sm:justify-center  px-4 pt-5 sm:pt-20 text-black item'>
          <div className=' text-[#FFFFFF] flex w-full justify-start items-start cursor-pointer'>
            <img src={moo} alt='logo' className='w-8 mr-1'/>
            <p className='text-base'>Proof Of Moon</p>
          </div>
          <div >
            <h1 className='text-[#FFFFFF] text-base uppercase'>Community</h1>
            <ul className=''> 
             <li> <a href='https://twitter.com/home' alt='' className='text-xs text-[#FFFFFF] '>Twitter</a></li>
             <li> <a href='https://telegram.org/' alt='' className='text-xs text-[#FFFFFF] '>Telegram</a></li>
             <li> <a href='https://opensea.io/' alt='' className='text-xs text-[#FFFFFF] '>Opensea</a></li>
            </ul>
          </div>
          <div>
          <h1 className='text-[#FFFFFF] text-base uppercase'>Use POM</h1>
             <ul> 
              
              <li> <a href='https://twitter.com/home' alt='' className='text-xs text-[#FFFFFF]'>POA BRIDGE</a></li>
              <li> <a href='https://twitter.com/home' alt='' className='text-xs text-[#FFFFFF]'>POA DEX</a></li>
              <li> <a href='https://twitter.com/home' alt='' className='text-xs text-[#FFFFFF]'>BUY POM</a></li>
            </ul>
          </div>
          
          <div>
            <h1 className='text-[#FFFFFF] text-base uppercase'>Tools</h1>
            <ul> 
              
             <li> <a href='https://twitter.com/home' alt='' className='text-xs text-[#FFFFFF]'>Coingecko</a></li>
             <li> <a href='https://twitter.com/home' alt='' className='text-xs text-[#FFFFFF]'>Coinmarketcap</a></li>
             <li> <a href='https://twitter.com/home' alt='' className='text-xs text-[#FFFFFF]'>Dextools</a></li>
            </ul>
          </div>
          <div>
          <h1 className='text-[#FFFFFF] text-base uppercase'>Documentation</h1>
            <ul> 
              
             <li> <a href='https://twitter.com/home' alt='' className='text-xs text-[#FFFFFF]'>Documentation</a></li>
             <li> <a href='https://twitter.com/home' alt='' className='text-xs text-[#FFFFFF]'>Explorer</a></li>
             <li> <a href='https://twitter.com/home' alt='' className='text-xs text-[#FFFFFF]'>GitHub</a></li>
            </ul>
          </div>
          
          

      </div>

      </div>
    </div>
  )
}

export default Team