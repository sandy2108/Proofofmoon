import React ,{useState} from 'react';
import "../index";
import moon from '../Assests/moon.png';
import { AiOutlineClose  , AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

   const [nav,setNav] =useState(false);
   const handleClick=()=>setNav(!nav);
   const handleClose=()=>setNav(!nav);


  return (
    <div class='w-screen h-[80px] bg-gradient-to-r from-stone-900 to-neutral-900 fixed drop-shadow-lg md:flex justify-between items-center'>
    
            <div class='flex items-center sm:flex justify-between'>
               <div class='flex items-center py-2'>
                  <img src={moon} alt="logo" className='w-10 cursor-pointer ml-4'/>
                  <p class='p-4 text-2xl sm:text-4xl text-gray-500'>POM</p> 
                </div>
               
               <div class='flex items-center px-px'>
                <ul class=' hidden md:flex'>
                    <li>POM</li>
                    <li>products</li>
                    <li>Roadmap</li>
                    <li>News</li>
                    <li>Partners</li>
                    <li>FAQ</li>
                 </ul>
               </div>
                
                <div class='hidden md:flex '> <button class='py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]' >BUY $POM</button></div>
                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <AiOutlineMenu className='w-5 bg-white ' /> : <AiOutlineClose className='w-5 bg-white'/> }
              
                </div>
    
            </div>
            
            

            
    </div>
  )
}

export default Navbar;