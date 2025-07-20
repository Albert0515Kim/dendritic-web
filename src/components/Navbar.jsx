import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const logoSrc = '/Logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };



  return (
    <div className='relative w-full flex justify-between items-center h-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-white bg-black'>
      <img src={logoSrc} alt='Dendritic Learning' className='aspect-auto w-48 z-10'/>
      <ul className='hidden md:flex z-10'>
        <li className='p-4 hover:text-gray-400'>
          <Link href="/">Home</Link>
        </li>
        <li className='p-4 hover:text-gray-400'>
          <a href="/dashboard">Login</a>
        </li>
        <li className='p-4 hover:text-gray-400'>
          <Link href="/subscribe">Subscribe</Link>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden z-20'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed top-0 left-0 w-full h-[40%] border-b border-b-gray-900 bg-black ease-in-out duration-500 z-30' : 'ease-in-out duration-500 fixed top-[-100%] left-0 z-30'}>
        <div className='flex justify-between items-center p-4'>
          <img src={logoSrc} alt='Dendritic Learning' className='aspect-auto w-48' />
          <AiOutlineClose size={20} onClick={handleNav} className='text-white cursor-pointer' />
        </div>
        <li className='p-4 border-b border-gray-600 hover:text-gray-400'>
          <Link href="/" onClick={() => setNav(false)}>Home</Link>
        </li>
        <li className='p-4 hover:text-gray-400'>
          <Link href="/dashboard" onClick={() => setNav(false)}>Login</Link>
        </li>
        <li className='p-4 hover:text-gray-400'>
          <Link href="/subscribe" onClick={() => setNav(false)}>Subscribe</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
