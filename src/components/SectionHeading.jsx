import React from 'react'

export default function SectionHeading({subheading, heading, headingColor}) {
  return (
    <div className='flex flex-col gap-5'>
      <h3 className='font-dm font-semibold text-grey'>{subheading}</h3>
      <h2 className={`text-4xl mb-10 ${headingColor ? headingColor : 'text-green'}`}>{heading}</h2>
    </div>
  )
}
