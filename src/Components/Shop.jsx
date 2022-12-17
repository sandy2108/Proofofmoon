import React from 'react'
import merch from '../Assests/merch.png';

const Shop = () => {
  return (
    <div name='shops' className='w-screen h-screen bg-black py-6'>
        <div className='max-w-[1240px] mx-auto '>
            <div className='justify-center grid md:grid-cols-2 items-center place-items-center mt-20'>
                <div className='sm:mx-2 my-4'>
                 <h1 className='mx-4 mb-7 text-md text-[#92A7ED] text-xl'>Shop</h1>
                 <p className='text-[#FFFFFF] mx-4 text-3xl font-bold mb-5 sm:text-5xl'> OUR MERCH STORE IS NOW LIVE</p>
                 <button className='mx-4 bg-[#3D69F7] hover:bg-sky-700 rounded-md mb-5' onClick='https://www.proofofmemes.org/store#!/'>SHOP NOW</button>
                </div>
                <div>
                    <img src={merch} alt='' className='rounded-lg '/>
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default Shop