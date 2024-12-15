import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";


export default function Header() {
  const [getMenu, setMenu] = useState(false);

  function showMenu(){
    setMenu(!getMenu);
  }

  return (
    <nav className='flex justify-between items-center fixed z-10 w-full p-3 lg:p-5'>
        <Link to='/'>
            <img className='h-16 lg:h-auto' src="/logo.png" alt="logo" />
        </Link>

        <div className={`menu-items ${getMenu ? 'show' : '' } lg:static lg:flex lg:flex-row lg:justify-end lg:p-0 lg:h-10 lg:w-full lg:bg-transparent` }>
            <IoMdClose className='text-white text-2xl absolute right-10 lg:hidden' onClick={showMenu}/>
            <div></div>
            <Link to='/' className='link' onClick={showMenu}>Home</Link>
            <Link to='/about-bequia'  className='link' onClick={showMenu}>About Bequia</Link>
            <Link to='/travel'  className='link' onClick={showMenu}>Travel</Link>
            <Link to='/accommodations'  className='link' onClick={showMenu}>Accommodation</Link>
            <Link to='/activities'  className='link' onClick={showMenu}>Activities</Link>
        </div>

        <RiMenu3Fill className='text-white text-2xl lg:hidden' onClick={showMenu} />

    </nav>
  )
}
