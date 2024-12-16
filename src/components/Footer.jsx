import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='mt-[10rem] flex flex-col px-2 lg:items-center lg:gap-[8rem]'>
      <img className='mb-[5rem]' src="/watermark.png" alt="footer watermark" />

      <div className='flex flex-col gap-10 p-5 lg:flex-row lg:justify-between lg:gap-[8rem]'>

        <div className='flex flex-col gap-3 font-dm text-grey lg:gap-5'>
          <h3 className='font-semibold text-xl'>Plan your Stay</h3>
          <div className='flex flex-col text-sm gap-1 lg:gap-2'>
            <Link to='/activities'>Getting here</Link>
            <Link to='/activities'>Getting around Bequia</Link>
            <Link to='/activities'>Accommodation</Link>
            <Link to='/activities'>Getting here</Link>
          </div>
        </div>

        <div className='flex flex-col gap-3 font-dm text-grey lg:gap-5'>
          <h3 className='font-semibold text-xl'>Activities</h3>
          <div className='flex flex-col text-sm gap-1 lg:gap-2'>
            <Link to='/activities'>Places of Interest</Link>
            <Link to='/activities'>Restaurants</Link>
            <Link to='/activities'>Tours & Hiking</Link>
            <Link to='/activities'>Festivals & Events</Link>
          </div>
        </div>

        <div className='flex flex-col gap-3 font-dm text-grey lg:gap-5'>
          <h3 className='font-semibold text-xl'>What's on Bequia</h3>
          <div className='flex flex-col text-sm gap-1 lg:gap-2'>
            <Link to='https://www.begos.com/'>Bequia Weekly - What's on Bequia</Link>
            <Link to='/activities'>Getting here</Link>
            <Link to='/activities'>Getting here</Link>
            <Link to='/activities'>Getting here</Link>
          </div>
        </div>
      </div>

      <div className='text-center text-gray-400 py-5'>
        <hr />
        <p className='mt-5'>Copyright @ {year}</p>
      </div>
      
    </footer>
  )
}
