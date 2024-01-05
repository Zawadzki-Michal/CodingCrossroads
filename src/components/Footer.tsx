import React from 'react'
import Container from './Container'
import Logo from './Logo'
import Link from 'next/link'
import {BsYoutube, BsFacebook, BsInstagram, BsGithub, BsLinkedin, BsWordpress} from 'react-icons/bs'

const Footer = () => {
  return (
  <Container className='lg:p-10 p-5 md:px-20 bg-[#111111]/95 text-gray-100 flex items-center justify-between'>
  <Link href={"/contact"}><p className='hidden md:inline  md:text-xl'>Contact Me</p></Link>
  <div className='text-gray-100 md:inline-flex flex items-center mx-auto lg:gap-7 gap-5'>
  <Link href="https://www.youtube.com/@CodingCrossroads" target='blank'>
    <BsYoutube className='text-2xl md:text-4xl hover:text-red-500 duration-200' />
  </Link>
  <Link href="https://www.facebook.com/Y0G1Z/" target='blank'>
    <BsFacebook className='text-2xl md:text-4xl hover:text-blue-500 duration-200'  />
  </Link>
  <Link href="https://www.instagram.com/yogiz88/" target='blank'>
    <BsInstagram className='text-2xl md:text-4xl hover:text-orange-500 duration-200' />
  </Link>
  <Link href="https://github.com/Zawadzki-Michal" target='blank'>
    <BsGithub className='text-2xl md:text-4xl hover:text-gray-500 duration-200' />
  </Link>
  <Link href="https://www.linkedin.com/in/michal-zawadzki-12329394" target='blank'>
    <BsLinkedin className='text-2xl md:text-4xl hover:text-blue-400 duration-200' />
  </Link>
  <Link href="https://portfolio-sage-two-22.vercel.app/" target='blank'>
    <BsWordpress className='text-2xl md:text-4xl hover:text-blue-400 duration-200' />
  </Link>
  </div>
  <p className='hidden md:inline text-xl text-gray-100'>©2024 All rights reserved</p>
  </Container>
  )
}

export default Footer