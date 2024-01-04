import React from 'react'
import Image from 'next/image'
import roads from '../images/roads.jpg'



const Hero = () => {
  return (
    <div className='w-full max-h-[screen] relative'>
      <Image
      src={roads}
      height={0}
      width={0}
      alt='lorry'
      className='lg:w-full lg:max-h-[calc(100vh-80px)] lg:object-fill h-[calc(100vh-80px)] object-cover'/>
      <div className='absolute top-0 w-full h-full bg-black/40 text-gray-100 flex flex-col items-center justify-center lg:px-44 lg:gap-20 gap-20 text-center px-4'>
        <h2 className='text-6xl lg:text-[100px] font-bold text-center'>Welcome to Coding Crossroads.</h2>
        <p className='text-xl md:text-2xl lg:text-5xl font-semibold'>Join me on the ultimate journey from trucker to web developer.</p>
        <p className='text-md md:text-2xl lg:text-xl font-semibold'>Explore my coding bootcamp adventures, self-taught insights, and the twists and turns of my tech evolution. Fasten your seatbelt – the road to web mastery starts here!</p>
      </div>
    </div>
  )
}

export default Hero