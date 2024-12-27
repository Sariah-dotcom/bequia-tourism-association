import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import { Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { FaPlaneArrival } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { IoMdBoat } from "react-icons/io";
import InformationCard from '../components/InformationCard';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


export default function Home() {
  useGSAP(()=>
    {
      gsap.fromTo('.text',
        {
          opacity: 0,
          x: -100
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: ".text", 
            start: "top 80%", 
          },
        }
      )

      gsap.fromTo('.card',
        {
          opacity: 0,
          scale: 0.3
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.5,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: ".cards", 
            start: "top 80%", 
          },
        }
      )

      gsap.fromTo('.activity-imgs',
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.5,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: ".activity-imgs", 
            start: "top 80%", 
          },
        }
      )
    }
  )

  return (
    <div className="flex flex-col gap-20">
      <ScrollToTop />
      <Hero />

      <section className="text px-5">
        <div className='lg:px-[2rem] mt-[5rem]'>
          <SectionHeading 
            subheading="The Island of Your Dreams" 
            heading='Welcome to Bequia'
          />
          <p>
            The tiny island of Bequia has a unique, magical charm which is hard to find 
            anywhere else in the Caribbean. With fewer than six thousand inhabitants, it 
            feels like home from the moment you arrive; friendliness is the watchword, and the pace is relaxed and easy-going.
          </p>
        </div>
      </section>

      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
        spaceBetween={20}
        slidesPerView="auto"
        centeredSlides={false}
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="w-full h-[40vh] lg:h-[50vh] max-w-screen-xl mx-auto"
      >
        <SwiperSlide className="relative rounded-lg"><img className='h-full w-full absolute top-0 object-cover' src="/island.jpg" alt="island" /></SwiperSlide>
        <SwiperSlide className="relative rounded-lg"><img className='h-full w-full absolute top-0 object-cover' src="/belmont-walkway.jpg" alt="belmont walkway" /></SwiperSlide>
        <SwiperSlide className="relative rounded-lg"><img className='h-full w-full absolute top-0 object-cover' src="/ferry-docking.jpg" alt="ferry docking" /></SwiperSlide>
        <SwiperSlide className="relative rounded-lg"><img className='h-full w-full absolute top-0 object-cover' src="/villa.jpg" alt="villa on bay" /></SwiperSlide>
        <SwiperSlide className="relative rounded-lg"><img className='h-full w-full absolute top-0 object-cover' src="/friendship.jpg" alt="friendship bay" /></SwiperSlide>
        <SwiperSlide className="relative rounded-lg"><img className='h-full w-full absolute top-0 object-cover' src="/sunset.jpg" alt="sunset" /></SwiperSlide>
      </Swiper>

      <section className='cards grid grid-cols-1 lg:grid-cols-2 px-8 lg:px-[15rem] lg:gap-5'>
        <Link to='/travel' className='card'>
          <InformationCard
            icon={<FaPlaneArrival />}
            heading='Getting to Bequia'
            text='All you need to know to get to the island'
          />
        </Link>
        
        <Link to='/travel' className='card'>
          <InformationCard
            icon={<IoMdBoat />}
            heading='Ferry Schedule'
            text='Get to Bequia from the mainland via the ferry'
          />
        </Link>
        
        <Link className='card'>
          <InformationCard
            icon={<FaCarAlt />}
            heading='Getting around Bequia'
            text='Rentals, taxis and more!'
          />
        </Link>
        

        <Link to='/accommodations' className='card'>
          <InformationCard
            icon={<FaHotel />}
            heading='Where to Stay'
            text='All you need to know to get to the island'
          />
        </Link>
      </section>

      <section className='bg-green px-5 py-12 lg:px-[15rem]'>
        <SectionHeading 
          subheading='See and Do'
          heading='Activities'
          headingColor="text-white"
        />

        <div className='flex flex-col'>
          <div className='activity-imgs h-52 w-full relative'>
            <img className='absolute top-0 left-0 w-full h-full object-cover' src="/activities/bequia-lightingup.jpg" alt="" />
          </div>
          <div className='activity-imgs h-32 w-40 absolute right-5 mt-40 lg:h-[15rem] lg:w-[25rem] lg:right-[10rem]'>
            <img className='absolute top-0 left-0 w-full h-full object-cover' src="/activities/regatta.jpg" alt="" />
          </div>
        </div>

        <div className='activity-imgs flex flex-col gap-2 text-white font-dm py-5 lg:w-52'>
          <Link to='/activities'>Places to Visit</Link>
          <Link to='/activities'>Festivals & Events</Link>
          <Link to='/activities'>Tours & Hiking</Link>
          <Link to='/activities'>Restaurants & Dining</Link>
          <Link to='/activities'>Diving & Watersports</Link>
          <Link to='/activities'>Shops & Services</Link>
        </div>
      </section>
    </div>
  );
}
