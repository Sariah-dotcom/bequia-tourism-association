import React from 'react'

export default function InformationCard(props) {
  return (
    <div className='shadow-md rounded-[1rem] flex flex-col items-center text-center gap-10 py-12 px-10'>
        <div className='text-green text-6xl'>
            {props.icon}
        </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-green text-2xl font-playfair'>{props.heading}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  )
}
