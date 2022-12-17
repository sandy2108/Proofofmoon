import React from 'react'
import moo from '../Assests/moon.png';
import { FaFacebook,FaTwitter,FaTelegramPlane,FaDiscord } from "react-icons/fa";
import { BiExpandAlt } from "react-icons/bi";



const Team = () => {
  return (
    <div className='w-screen bg-black'>
      <div className='max-w-[1240px] mx-auto relative text-white'>
       <div className='grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-5 relative sm:justify-center  px-4 pt-5 sm:pt-20 text-black item  '>
          <div className=' text-[#FFFFFF] flex w-full justify-start items-start cursor-pointer'>
            <img src={moo} alt='logo' className='w-8 mr-1'/>
            <p className='text-base'>Proof Of Moon</p>
          </div>
          <div >
            <h1 className='text-[#FFFFFF] text-base uppercase'>Community</h1>
            <ul className=''> 
             <li> <a href='https://twitter.com/home' alt='' className='text-xs text-[#FFFFFF] flex items-center '>Twitter <FaTwitter className='w-5 ml-3'/></a></li>
             <li> <a href='https://telegram.org/' alt='' className='text-xs text-[#FFFFFF] flex items-center '>Telegram <FaTelegramPlane className='w-5 ml-3'/></a></li>
             <li> <a href='https://opensea.io/' alt='' className='text-xs text-[#FFFFFF] flex items-center '>Opensea <BiExpandAlt className='w-5 ml-3'/></a></li>
            </ul>
          </div>
          <div>
          <h1 className='text-[#FFFFFF] text-base uppercase'>Use POM</h1>
             <ul> 
              
              <li> <a href='https://twitter.com/home' alt='' className='text-xs text-[#FFFFFF] flex items-center'>POA BRIDGE<BiExpandAlt className='w-5'/></a></li>
              <li> <a href='https://twitter.com/home' alt='' className='text-xs text-[#FFFFFF] flex items-center'>POA DEX<BiExpandAlt className='w-5'/></a></li>
              <li> <a href='https://twitter.com/home' alt='' className='text-xs text-[#FFFFFF] flex items-center'>BUY POM<BiExpandAlt className='w-5'/></a></li>
            </ul>
          </div>
          
          <div>
            <h1 className='text-[#FFFFFF] text-base uppercase'>Tools</h1>
            <ul> 
              
             <li> <a href='https://twitter.com/home' alt='' className='text-xs text-[#FFFFFF] flex items-center'>Coingecko<BiExpandAlt className='w-5'/></a></li>
             <li> <a href='https://twitter.com/home' alt='' className='text-xs text-[#FFFFFF] flex items-center'>Coinmarketcap<BiExpandAlt className='w-5'/></a></li>
             <li> <a href='https://twitter.com/home' alt='' className='text-xs text-[#FFFFFF] flex items-center'>Dextools<BiExpandAlt className='w-5'/></a></li>
            </ul>
          </div>
          <div>
          <h1 className='text-[#FFFFFF] text-base uppercase'>Resources</h1>
            <ul > 
              
             <li> <a href='https://twitter.com/home' alt='' className='text-xs text-[#FFFFFF] flex items-center'>Explorer <BiExpandAlt className='w-5'/></a></li>
             <li> <a href='https://twitter.com/home' alt='' className='text-xs text-[#FFFFFF] flex items-center'>Documentation <BiExpandAlt className='w-5'/></a></li>
             <li> <a href='https://twitter.com/home' alt='' className='text-xs text-[#FFFFFF] flex items-center'>GitHub<BiExpandAlt className='w-5'/></a></li>
            </ul>
          </div>
      </div>
      <div class="bg-gradient-to-r from-cyan-500 to-blue-500 ...">
        <div className='border-t-2 mt-3'></div>
      </div>
      <div className='flex flex-col max-w-[1240px] mx-auto justify-between  sm:flex-row text-center text-[#FFFFFF]  px-2 py-4'>
            <p className='py-4 text-[#FFFFFF]'> 2022 PROOF OF MOON FOUNDATION </p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl '>
                <a href='https://www.facebook.com/' alt=''> <FaFacebook/></a>
                <a href='https://twitter.com/home'><FaTwitter/></a>
                <a href='https://telegram.org/' alt=''><FaTelegramPlane/></a>
                <a href='https://discord.com/'><FaDiscord/></a>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Team