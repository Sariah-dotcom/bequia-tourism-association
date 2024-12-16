import React from 'react'

export default function Hero() {
  return (
    <section>
        <div className='relative h-[95vh] lg:h-[100vh] w-full overflow-hidden'>
            {/* Background video */}
            <video autoPlay loop muted src="/drone-footage.mp4" className='absolute top-0 left-0 w-full h-full object-cover'></video>
            
            {/* Transparent overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
            
            <div className='absolute bottom-5 left-3 text-white lg:left-5'>
                <h1 className='italic lg:text-3xl'>visit the</h1>
                <h1 className='uppercase text-6xl lg:text-8xl'>Big Little <br />Island</h1>
            </div>
        </div>
    </section>
  )
}
