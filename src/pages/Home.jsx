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



export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <ScrollToTop />
      <Hero />

      <section className="px-5">
        <div className='lg:px-[15rem] mt-[5rem]'>
          <SectionHeading 
            subheading="The Island of your Dreams" 
            heading='Welcome to Bequia'
          />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti provident tempore itaque tempora accusamus, rerum ad obcaecati? Suscipit facere sed dignissimos, hic odit aliquam nam ad perferendis tenetur incidunt voluptatibus.
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
        className="w-full h-[90vh] max-w-screen-xl mx-auto"
      >
        <SwiperSlide className="relative rounded-lg"><img className='h-full w-full absolute top-0 object-cover' src="/island.jpg" alt="beach" /></SwiperSlide>
        <SwiperSlide className="relative rounded-lg"><img className='h-full w-full absolute top-0 object-cover' src="/villa.jpg" alt="villa on bay" /></SwiperSlide>
        <SwiperSlide className="relative rounded-lg"><img className='h-full w-full absolute top-0 object-cover' src="/hero-images/bay.jpg" alt="bequia island" /></SwiperSlide>
        <SwiperSlide className="relative rounded-lg"><img className='h-full w-full absolute top-0 object-cover' src="/lookout.png" alt="lookout point" /></SwiperSlide>
        <SwiperSlide className="relative rounded-lg"><img className='h-full w-full absolute top-0 object-cover' src="/moonhole.jpg" alt="moonhole" /></SwiperSlide>
      </Swiper>

      <section className='grid grid-cols-1 lg:grid-cols-2 px-8 lg:px-[15rem] lg:gap-5'>
        <Link to='/travel'>
          <InformationCard
            icon={<FaPlaneArrival />}
            heading='Getting to Bequia'
            text='All you need to know to get to the island'
          />
        </Link>
        
        <Link to='/travel'>
          <InformationCard
            icon={<IoMdBoat />}
            heading='Ferry Schedule'
            text='Get to Bequia from the mainland via the ferry'
          />
        </Link>
        
        <InformationCard
          icon={<FaCarAlt />}
          heading='Getting around Bequia'
          text='Rentals, taxis and more!'
        />

        <Link to='/accommodations'>
          <InformationCard
            icon={<FaHotel />}
            heading='Where to Stay'
            text='All you need to know to get to the island'
          />
        </Link>
        
      </section>

      <section className='h-[100vh] bg-green px-5 py-12 lg:px-[15rem]'>
        <SectionHeading 
          subheading='See and do'
          heading='Activities'
          headingColor="text-white"
        />

        <div className='flex flex-col'>
          <div className='h-52 w-full relative'>
            <img className='absolute top-0 left-0 w-full h-full object-cover' src="/activities/bequia-lightingup.jpg" alt="" />
          </div>
          <div className='h-32 w-40 absolute right-5 mt-40 lg:h-[12rem] lg:w-[20rem] lg:right-[10rem]'>
            <img className='absolute top-0 left-0 w-full h-full object-cover' src="/activities/regatta.jpg" alt="" />
          </div>
        </div>

        <div className='flex flex-col gap-2 text-white font-dm py-5 lg:w-52'>
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
