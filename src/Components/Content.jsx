import React from 'react'

const Content = () => {
  return (
    <div className='w-screen h-screen bg-black py-3 '>
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='mt-20'>
                <p className='text-blue-600 font-bold text-2xl my-3 px-4 '>Proof of Moon </p>
                <h2 className='text-1xl tracking-wide px-4 py-5'>
                   A "blood moon" happens when Earth's moon is in a total lunar eclipse. While it has no special astronomical significance, the view in the sky is striking as the usually whitish moon becomes red or ruddy brown.
                </h2>
                <h3 className='px-4 py-5'>
                If Earth partially blocks the sun, and the darkest part of its shadow falls across the moon's surface, it is called a partial eclipse. You will see a black shadow taking a bite out of the moon. Sometimes, the moon passes through the lighter part of Earth's shadow, causing a penumbral eclipse. Only seasoned skywatchers will be able to tell the difference because the moon only darkens very slightly.
                </h3>
            </div>
        </div>
    </div>
  )
}

export default Content;