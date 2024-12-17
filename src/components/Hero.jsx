import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  useGSAP(()=>
    {
      const heroTimeline = gsap.timeline();

      heroTimeline
      .fromTo('.video',
        {
          scale: 0.1,
          opacity: 0
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'power1.inOut'
        }
      )

      .fromTo('.hero-text',
        {
          opacity:0,
          y: 300
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.15,
          ease: 'power3.inOut'
        },
        "<30%"
      )
    }

  )
  return (
    <section>
        <div className='video relative h-[95vh] md:h-[100vh] w-full overflow-hidden'>
            {/* Background video */}
            <video id='video' autoPlay loop muted src="/drone-footage.mp4" className='absolute top-0 left-0 w-full h-full object-cover'></video>
            
            {/* Transparent overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
            
            <div className='absolute bottom-5 left-3 text-white lg:left-5'>
                <h1 className='hero-text italic lg:text-3xl'>visit the</h1>
                <h1 className='hero-text uppercase text-6xl lg:text-8xl'>Big Little <br />Island</h1>
            </div>
        </div>
    </section>
  )
}
