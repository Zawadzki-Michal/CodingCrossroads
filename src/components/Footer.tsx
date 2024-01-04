import React from 'react'
import Container from './Container'
import Logo from './Logo'
import Link from 'next/link'
import {BsYoutube, BsFacebook, BsInstagram, BsGithub, BsLinkedin, BsWordpress} from 'react-icons/bs'

const Footer = () => {
  return (
  <Container className='p-10 lg:px-20 bg-[#111111]/95 text-gray-100 flex items-center justify-between'>
  <Logo title="Coding Crossroads" className="text-gray-100" />
  <div className='text-gray-100 hidden md:inline-flex items-center gap-7'>
  <Link href="https://www.youtube.com/@CodingCrossroads" target='blank'>
    <BsYoutube className='text-4xl hover:text-red-500 duration-200' />
  </Link>
  <Link href="https://www.facebook.com/Y0G1Z/" target='blank'>
    <BsFacebook className='text-4xl hover:text-blue-500 duration-200'  />
  </Link>
  <Link href="https://www.instagram.com/yogiz88/" target='blank'>
    <BsInstagram className='text-4xl hover:text-orange-500 duration-200' />
  </Link>
  <Link href="https://github.com/Zawadzki-Michal" target='blank'>
    <BsGithub className='text-4xl hover:text-gray-500 duration-200' />
  </Link>
  <Link href="www.linkedin.com/in/michal-zawadzki-12329394" target='blank'>
    <BsLinkedin className='text-4xl hover:text-blue-400 duration-200' />
  </Link>
  <Link href="https://portfolio-llmv86xho-michals-projects-925a6fef.vercel.app/" target='blank'>
    <BsWordpress className='text-4xl hover:text-blue-400 duration-200' />
  </Link>
  </div>
  <p className='text-xl text-gray-100'>©2024 All rights reserved</p>
  </Container>
  )
}

export default Footer