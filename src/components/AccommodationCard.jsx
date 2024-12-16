import React from 'react'

export default function AccommodationCard(props) {
  return (
    <div className='flex flex-col gap-5 py-5 px-3 h-[10rem] lg:h-[20rem]'>
      <img className='h-24 md:h-[12rem]' src={props.accommodationImg} alt="accommodation" />
      <div className='flex flex-col gap-3 lg:gap-5'>
        <h3 className='text-green font-semibold font-dm text-xl lg:text-2xl'>{props.accommodationName}</h3>
        <p className='text-grey italic text-xs lg:text-sm'>{props.location}</p>
        <p className='text-xs'>{props.description}</p>
        <button className='text-green font-dm uppercase rounded-full border border-green py-2 px-4'>Learn More</button>
      </div>
    </div>
  )
}
