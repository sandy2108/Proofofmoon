import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import dot from '../../node_modules/cryptocurrency-icons/128/icon/dot.png';
import atom from '../../node_modules/cryptocurrency-icons/128/icon/atom.png';
import bnb from '../../node_modules/cryptocurrency-icons/128/icon/bnb.png';
import doge from '../../node_modules/cryptocurrency-icons/128/icon/doge.png';
import ada from '../../node_modules/cryptocurrency-icons/128/icon/ada.png';
import eth from '../../node_modules/cryptocurrency-icons/128/icon/eth.png';
import avax from '../../node_modules/cryptocurrency-icons/128/icon/avax.png';
import algo from '../../node_modules/cryptocurrency-icons/128/icon/algo.png';
const Partners = () => {
  return (
    <div name='partners' className='w-screen bg-black py-3 '>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
         
      
         <div className='mt-20'>
           <p className='text-xl mb-3 text-purple-500 font-bold tracking-wide px-4'>PARTNERS  PROJECTS</p>
           <p className='text-[#FFFFFF] mx-4 text-3xl font-bold mb-5 sm:text-5xl flex lg:w-1/2 px-4'> Get to scale together</p>
         </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative  px-4 pt-5 sm:pt-20 text-black '>
            <a href='https://polkadot.network/' alt='' className="transform h-40 bg-[#1E2229] rounded-none border-2 border-slate-500 w-80 transition duration-500 hover:scale-75 flex justify-center items-center  shadow  hover:shadow-2xl hover:shadow-indigo-500">
              <div className='flex items-center'> <p className="text-lg text-[#ffffff] flex items-center"><img src={dot} alt='' className='w-7 mx-3'/>POLKADOT  <FiArrowUpRight className='w-5 ml-3 h-15'/> </p> </div>   
            </a>
            <a href='https://cosmos.network/' alt='' className="transform h-40 bg-[#1E2229] rounded-none border-2 border-slate-500   w-80 transition duration-500 hover:scale-75 hover:bg-black flex justify-center items-center shadow  hover:shadow-2xl hover:shadow-indigo-500">
               <div className='flex items-center'> <p className="text-lg text-[#ffffff] flex items-center"><img src={atom} alt='' className='w-7 mx-3'/>COSMOS  <FiArrowUpRight className='w-5 ml-3 h-15'/> </p> </div>
            </a>
            <a href='https://pancakeswap.finance/' alt='' className="transform h-40 bg-[#1E2229] rounded-none border-2 border-slate-500  w-80 transition duration-500 hover:scale-75 hover:bg-black  flex justify-center items-center shadow  hover:shadow-2xl hover:shadow-indigo-500">
               <div className='flex items-center'> <p className="text-lg text-[#ffffff] flex items-center"><img src={doge} alt='' className='w-7 mx-3'/>DOGE  <FiArrowUpRight className='w-5 ml-3 h-15'/> </p> </div>
            </a>
            <a href='https://cardano.org/' alt='' className="transform h-40 bg-[#1E2229] rounded-none border-2 border-slate-500  w-80 transition duration-500 hover:scale-75 hover:bg-black  flex justify-center items-center shadow  hover:shadow-2xl hover:shadow-indigo-500">
               <div className='flex items-center'> <p className="text-lg text-[#ffffff] flex items-center"><img src={ada} alt='' className='w-7 mx-3'/>CARDANO  <FiArrowUpRight className='w-5 ml-3 h-15'/> </p> </div>
            </a>
            <a  href='https://bnbchain.org/en' alt='' className="transform h-40 bg-[#1E2229] rounded-none border-2 border-slate-500  w-80 transition duration-500 hover:scale-75 hover:bg-black flex justify-center items-center shadow  hover:shadow-2xl hover:shadow-indigo-500">
               <div className='flex items-center'> <p className="text-lg text-[#ffffff] flex items-center"><img src={bnb} alt='' className='w-7 mx-3'/>BNBCHAIN  <FiArrowUpRight className='w-5 ml-3 h-15'/> </p> </div>
            </a>
            <a href='https://ethereum.org/en/' alt='' className="transform h-40 bg-[#1E2229] rounded-none border-2 border-slate-500  w-80 transition duration-500 hover:scale-75 hover:bg-black flex justify-center items-center shadow  hover:shadow-2xl hover:shadow-indigo-500">
               <div className='flex items-center'> <p className="text-lg text-[#ffffff] flex items-center "><img src={eth} alt='' className='w-7 mx-3'/>ETHEREUM  <FiArrowUpRight className='w-5 ml-3 h-15'/> </p> </div>
            </a>
            <a href='https://ethereum.org/en/' alt='' className="transform h-40 bg-[#1E2229] rounded-none border-2 border-slate-500  w-80 transition duration-500 hover:scale-75 hover:bg-black flex justify-center items-center shadow  hover:shadow-2xl hover:shadow-indigo-500">
               <div className='flex items-center'> <p className="text-lg text-[#ffffff] flex items-center "><img src={avax} alt='' className='w-7 mx-3'/>AVALANCHE  <FiArrowUpRight className='w-5 ml-3 h-15'/> </p> </div>
            </a>
            <a href='https://ethereum.org/en/' alt='' className="transform h-40 bg-[#1E2229] rounded-none border-2 border-slate-500  w-80 transition duration-500 hover:scale-75 hover:bg-black flex justify-center items-center shadow  hover:shadow-2xl hover:shadow-indigo-500">
               <div className='flex items-center'> <p className="text-lg text-[#ffffff] flex items-center "><img src={algo} alt='' className='w-7 mx-3'/>ALGORAND  <FiArrowUpRight className='w-5 ml-3 h-15'/> </p> </div>
            </a>
           </div>
      </div>
    
    </div>
  )
}

export default Partners