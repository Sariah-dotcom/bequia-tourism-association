import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [getMenu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function showMenu() {
    setMenu(!getMenu);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between items-center fixed z-10 w-full p-3 lg:p-5 transition-all ease-in ${
        isScrolled ? 'bg-green' : 'bg-transparent'
      }`}
    >
      <Link to='/'>
        <img className='h-16 lg:h-auto' src="/logo.png" alt="logo" />
      </Link>

      <div
        className={`menu-items ${getMenu ? 'show' : ''} lg:static lg:px-5 lg:flex  lg:flex-row lg:justify-end lg:mt-5 lg:p-0 lg:h-10 lg:w-full lg:bg-transparent`}
      >
        <IoMdClose className='text-white text-2xl absolute right-10 lg:hidden' onClick={showMenu} />
        <div></div>
        <Link to='/' className='link' onClick={showMenu}>
          Home
        </Link>
        <Link to='/about-bequia' className='link' onClick={showMenu}>
          About Bequia
        </Link>
        <Link to='/travel' className='link' onClick={showMenu}>
          Travel
        </Link>
        <Link to='/accommodations' className='link' onClick={showMenu}>
          Accommodations
        </Link>
        <Link to='/activities' className='link' onClick={showMenu}>
          Activities
        </Link>
      </div>

      <RiMenu3Fill className='text-white text-2xl lg:hidden' onClick={showMenu} />
    </nav>
  );
}
