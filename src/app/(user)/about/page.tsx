import React from 'react'
import Image from 'next/image'
import lorry from '../../../images/lorry.jpg'



const Hero = () => {
  return (
    <div className='w-full max-h-[screen] relative'>
      <Image
      src={lorry}
      height={0}
      width={0}
      alt='lorry'
      className='lg:w-full lg:max-h-[calc(100vh-80px)] lg:object-fill h-[calc(100vh-80px)] object-cover'/>
      <div className='absolute top-0 w-full h-full bg-black/40 text-gray-100 flex flex-col items-center justify-center lg:px-44 lg:gap-20 gap-10 text-center px-4'>
        <h2 className='lg:text-6xl lg:text-[100px] font-bold text-center'>I am Michal Zawadzki</h2>
        <p className='text-md md:text-2xl lg:text-xl font-semibold'>Hello, Iam Michal Zawadzki, a dynamic full-stack web developer fresh out of a 16-week bootcamp. While I have been immersed in coding for a while, this recent experience has honed my skills and instilled a proactive learning approach. I firmly believe in the power of commitment and habits to turn goals into reality. In my recent role as a Junior Full Stack Developer at the School of Code in Birmingham, I have excelled in breaking down complex challenges and contributing to product development using technologies like Node.js, Express, React, and PostgreSQL. Understanding that hiring a junior is an investment for any company, I am confident that I will be a great choice. With a blend of experience and fresh enthusiasm, I am ready to contribute to your teams success. If you are looking for a dedicated developer with a passion for growth, lets connect and explore how I can bring value to your projects.</p>
      </div>
    </div>
  )
}

export default Hero