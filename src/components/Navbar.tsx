'use client';
import React, { useState } from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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

        {/* Desktop Navigation */}
        <div className='hidden md:inline-flex items-center gap-7 text-gray-100 hover:text-gray-400 duration-200'>
          {nav.map((item) => (
            <Link key={item?.title} href={item?.href}>
              <div className='text-lg uppercase font-semibold relative group overflow-hidden cursor-pointer'>
                {item?.title}
                <span className='w-full h-[2px] bg-gray-100 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200'></span>
              </div>
            </Link>
          ))}
        </div>

        <div className='md:hidden relative'>
  <FiMenu
    className='text-3xl text-white cursor-pointer'
    onClick={toggleMenu}
  />
  
</div>

      </div>
      {isMenuOpen && (
    <div className="flex items-start justify-end h-screen w-screen pr-4 pt-2 ">
      <div className="w-4/5 h-2/5 bg-[#111111]/95 rounded-xl flex flex-col gap-4 justify-center">
        {nav.map((item) => (
          <Link key={item?.title} href={item?.href}>
            <div onClick={closeMenu} className=' flex justify-center items-center text-center text-2xl  text-gray-100 hover:text-gray-600 py-2 cursor-pointer'>
              {item?.title}
             
            </div>
          </Link>
        ))}
       
      </div>
    </div>
  )}
    </div>
    
  );
};

export default Navbar;
