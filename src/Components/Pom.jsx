import React from 'react'
import { BiExpandAlt } from "react-icons/bi";

const Pom = () => {
  return (
    <div name='products' class='w-screen flex lg:h-screen bg-black py-3 '> 
      <div class='max-w-[1240px] mx-auto text-white relative'>
        <div >
          <p className='text-blue-600 font-bold text-xl my-3 px-4'> Our Features</p>           
        </div>
        <div className='grid md:grid-cols-2 my-1 sm:flex-row mt-5 px-px'>
            <div className='px-4 '>
                 <p className='text-2xl text-green-500'> BULLET PROOF OF THE ECOSYTEM</p> 
            </div>
            <div className='px-4 text-2xl '>
              <a href='https://cryptonoobs.eth.limo/' className='flex items-center'>POM AUDITS <BiExpandAlt className='w-5 ml-2 hover:bg-neutral-700 transparent'/></a>
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative  px-4 pt-5 sm:pt-20 text-black item'>
          <div className='text-green-300   rounded-xl shadow-2xl ring-2 ring-pink-300 ring-inset shadow-blue-500/50  hover:bg-white'>
            <div className='p-8'>
                <h3 className='text-2xl font-bold my-6'>Feature 1</h3>
                <p className='text-gray-600 text-xl'>Asdfgff klnkdkldm</p>
            </div>
          </div>
          <div className='text-green-300  rounded-xl shadow-2xl ring-2 ring-pink-300 ring-inset shadow-blue-500/50  hover:bg-white'>
            <div className='p-8'>
                
                <h3 className='text-2xl font-bold my-6'>Feature 2</h3>
                <p className='text-gray-600 text-xl'>Asdfgff klnkdkldm</p>
            </div>
          </div>
          <div className='text-green-300  rounded-xl shadow-2xl ring-2 ring-pink-300 ring-inset  shadow-blue-500/50 hover:bg-white'>
            <div className='p-8'>
                
                <h3 className='text-2xl font-bold my-6'>Feature 3</h3>
                <p className='text-gray-600 text-xl'>asdfgf lkjhghh</p>
            </div>
          </div>
          <div className='text-green-300  rounded-xl shadow-2xl ring-2 ring-pink-300 ring-inset  shadow-blue-500/50 hover:bg-white'>
            <div className='p-8'>
                <h3 className='text-2xl font-bold my-6'>Feature 4</h3>
                <p className='text-gray-600 text-xl'>Asdfgf lkjhik </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pom;