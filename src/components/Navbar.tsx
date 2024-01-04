import React from 'react'
import Logo from './Logo';
import Link from 'next/link';
import {FiMenu} from 'react-icons/fi';

const Navbar = () => {
    // create a navigation array
    const nav = [
      { title: "Home", href: "/" },
      { title: "Features", href: "/features" },
      { title: "About", href: "/about" },
      { title: "Studio", href: "/studio" },
    ];
    
  return (
    <div className='w-full bg-[#111111]/95 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50'>
    <div className='max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full'>
      <Logo title="Coding Crossroads" className="text-gray-100" />
      <div className='hidden md:inline-flex items-center gap-7 text-gray-100 hover:text-gray-400 duration-200'>
        {nav.map((item)=> (
          <Link key={item?.title} href={item?.href} className='text-lg uppercase font-semibold relative group overflow-hidden'>
            {item?.title}
            <span className='w-full h-[2px] bg-gray-100 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200'></span>
          </Link>
        ))}
      </div>
      <div className='md:hidden'>
        <FiMenu className='text-3xl text-white'/>
        </div>
    </div>

    </div>
  )
}

export default Navbar