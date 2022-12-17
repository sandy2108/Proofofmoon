import React from 'react';
import { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import {HiMenuAlt4} from 'react-icons/hi';
import moo from '../Assests/moon.png';
import { Link } from 'react-scroll'





const Navbar = () => {
   
  const [toggleMenu ,setToggleMenu] = useState(false);
  const handleClick =()=>setToggleMenu(!toggleMenu);


  return (
  <nav className='w-screen h-90px flex md:justify-center justify-between items-center p-4 bg-gradient-to-r from-stone-900 to-neutral-900 drop-shadow-l'>
    <div class='flex items-center sm:flex justify-between w-full h-full'>

      <div className=' flex items-center py-2'>
        <img src={moo} alt="logo" className='w-10 cursor-pointer ml-4'/>
        <h1 class='text-gray-100 ml-2 w-4 text-2xl'> POM</h1>
      </div>

      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        <li className='mx-2 cursor-pointer'><Link to='pom' smooth={true} duration={500}>POM</Link></li>
        <li className='mx-2 cursor-pointer'><Link to='products' smooth={true} offset={-200} duration={500}>PRODUCTS</Link></li>
        <li className='mx-2 cursor-pointer'><Link to='roadmap' smooth={true} offset={-50} duration={500}>ROADMAP</Link></li>
        <li className='mx-2 cursor-pointer'><Link to='partners' smooth={true} offset={-100} duration={500}>PARTNERS</Link></li>
        <li className='mx-2 cursor-pointer'><Link to='shops' smooth={true} offset={-50} duration={500}>SHOPS</Link></li> 
      </ul>
      <a href='https://app.uniswap.org/#/swap' alt='' className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] text-[#FFFFFF] md:flex hidden buttons ring-2 ring-pink-300 ring-inset shadow-lg shadow-cyan-500/50'>BUY $POM </a>
      <div className='flex relative'>
        {toggleMenu
         ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)}/>
         : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>
         }
         {toggleMenu && (
          <ul 
            className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
             flex flex-col justify-start rounded-md bg-gradient-to-r from-stone-900 to-neutral-900 animate-slide-in items-start' 
            >
            <li className='text-xl w-fully my-2'>
              <AiOutlineClose onClick={()=>setToggleMenu(false)}/>
            </li>
            <li className='mx-2 cursor-pointer my-2 text-lg '><Link onClick={handleClick} to='pom' smooth={true} duration={500}>POM</Link></li>
            <li className='mx-2 cursor-pointer my-2 text-lg '><Link onClick={handleClick} to='products' smooth={true} offset={-200} duration={500}>PRODUCTS</Link></li>
            <li className='mx-2 cursor-pointer my-2 text-lg '><Link onClick={handleClick} to='roadmap' smooth={true} offset={-50} duration={500}>ROADMAP</Link></li>
            <li className='mx-2 cursor-pointer my-2 text-lg '><Link onClick={handleClick} to='partners' smooth={true} offset={-100} duration={500}>PARTNERS</Link></li>
            <li className='mx-2 cursor-pointer my-2 text-lg '><Link onClick={handleClick} to='shops' smooth={true} offset={-50} duration={500}>SHOPS</Link></li> 
            
            <div > 
                <a href='https://app.uniswap.org/#/swap' alt='' class='py-2 px-7 mx-4 rounded-full cursor-pointer text-white hover:bg-[#879deb] ... ring-offset-2 buttons ring ring-pink-300 ring-inset shadow-lg shadow-cyan-500/50' >BUY $POM</a>
            </div>
          </ul>
         )}
      </div>

    </div>
    
  </nav>
  
  )
}
 
export default Navbar;