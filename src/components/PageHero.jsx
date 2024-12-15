import React from 'react'

export default function PageHero(props) {
  return (
    <div className='relative h-[80vh] rounded-br-[5rem] w-full overflow-hidden'>
        <img className='absolute top-0 left-0 w-full h-full object-cover' src={props.heroImage} alt="bequia arial shot" />

        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        <div className='absolute bottom-5 left-3 text-3xl text-white lg:left-5'>
            <h1>{props.pageTitle}</h1>
        </div>
    </div>
  )
}
