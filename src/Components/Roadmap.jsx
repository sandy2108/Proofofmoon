import React from 'react'
import { HiCheck } from "react-icons/hi";
import { BiCheckbox, BiCheckboxChecked} from "react-icons/bi";

const Roadmap = () => {
  return (
    <div className='w-screen bg-black py-6'>
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div >
                <p className='px-4 text-bold text-xl my-3 text-green-500'>Project RoadMap</p>
                <h1 className='uppercase text-2xl px-4 sm:text-5xl '>Our Journey</h1>
            </div>

         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative px-4 pt-5  sm:pt-20 text-black'>
            <div className='p-8'>
                
                <div >
                  <p className=' items-start justify-start rounded-full bg-transparent w-40  text-m  ring ring-inset shadow-lg shadow-cyan-500/50 text-white'>1.  Launch</p> 
                </div>
                
                <div className='my-3 text-xs mx-auto ring-inset shadow-lg shadow-cyan-500/50'>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckboxChecked className='w-8 mr-1 h-6'/> Launch on uniswap</p>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/> Pre-marketing</p>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/> 1000 Telegram Members</p>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/> Contests and Giveaways</p>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/> First Development update</p>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/> Cex listing #1</p>
                </div>
            </div>
            <div className='p-8'>
                
                <div>
                  <p className='items-start justify-start rounded-full bg-transparent w-40  text-m  ring ring-inset shadow-lg shadow-cyan-500/50 text-white'>2.Growth</p> 
                </div>
                
                <div className='my-3 ring-pink-300 ring-inset shadow-lg shadow-cyan-500/50 mx-auto '>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/> First AMA in space</p>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/> Meme competition</p>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/> Post Marketing</p>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/> Shill competition</p>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/> Partnership Announcements</p>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/> 4000 Telegram members</p>
                </div>
            </div>
            <div className='p-8'>
                
                <div>
                  <p className='items-start justify-start rounded-full bg-transparent w-40  text-m  ring ring-inset shadow-lg shadow-cyan-500/50 text-white'>3. Stable</p> 
                </div>
                
                <div className='my-3 ring-inset shadow-lg shadow-cyan-500/50 mx-auto'>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/> Stable coin launch </p>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/> Product development</p>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/> POM Launchpad launch</p>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/> First Presale</p>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/> Second Presale</p>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/> Third Presale</p>
                </div>
            </div>
            <div className='p-8'>
                
                <div>
                  <p className='items-start justify-start rounded-full bg-transparent w-40  text-m  ring ring-inset shadow-lg shadow-cyan-500/50 text-white'>4.Expansion</p> 
                </div>
                
                <div className='my-3 ring-inset shadow-lg shadow-cyan-500/50 mx-auto'>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/>BSC & ARB chain </p>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/>Cex listing #3 </p>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/>Partnership Announcements </p>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/>Twitter Giveaways</p>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/>Product Development</p>
                <p className='flex py-4 text-gray-400 text-xs items-center'><BiCheckbox className='w-8 mr-1 h-4'/>Aggressive Marketing</p>
                </div>
            </div>
      
      
           
          

          

        </div>

        </div>
        
    </div>
  )
}

export default Roadmap;