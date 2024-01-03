import React from 'react'
import Image from 'next/image'
import lorry from '../app/images/lorry.jpg'


const Hero = () => {
  return (
    <div className='w-full max-h-screen relative'>
      <Image
      src={lorry}
      height={0}
      width={0}
      alt='lorry'
      className='w-full max-h-screen object-contain'/>
      <div className='absolute top-0 w-full h-full bg-black/30 text-gray-100 flex flex-col items-center justify-center'>
        <h2 className='text-7xl lg:text-[150px] font-bold'>Michal Zawadzki</h2>
        <p className='text-xl md:text-2xl lg:text-5xl font-semibold'>Lorry Driver turned into Web Developer</p>
      </div>
    </div>
  )
}

export default Hero