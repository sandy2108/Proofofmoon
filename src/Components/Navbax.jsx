import React from 'react';
import { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import {HiMenuAlt4} from 'react-icons/hi';
import moo from '../Assests/moon.png';


const NavbarItem =({title,classProps})=>{
  return(
    <li className='mx-4 cursor-pointer ${classProps}'>
      {title}
    </li>
  )
}


const Navbar = () => {
   
  const [toggleMenu ,setToggleMenu] = useState(false);


  return (
  <nav className='w-screen h-90px flex md:justify-center justify-between items-center p-4 bg-gradient-to-r from-stone-900 to-neutral-900 drop-shadow-l'>
    <div class='flex items-center sm:flex justify-between w-full h-full'>

      <div className=' flex items-center py-2'>
        <img src={moo} alt="logo" className='w-10 cursor-pointer ml-4'/>
        <h1 class='text-gray-100 ml-2 w-4 text-2xl'> POM</h1>
      </div>

      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        {["POM" ,"PRODUCTS","ROADMAP" , "TEAM","PARTNERS","FAQ"].map((item,index)=>(
           <NavbarItem key={item +index} title={item}/>
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">BUY $POM</li>
      </ul>

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
            {["POM" ,"PRODUCTS","ROADMAP" , "TEAM","PARTNERS","FAQ"].map((item,index)=>(
              <NavbarItem key={item +index} title={item} classProps="my-2 text-lg" />
              
            ))}
            <div > 
                <button class='py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#879deb] ... ring-offset-2 ring' >BUY $POM</button>
            </div>
          </ul>
         )}
      </div>

    </div>
    
  </nav>
  
  )
}
 
export default Navbar;