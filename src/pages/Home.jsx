import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaPlaneArrival } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { IoMdBoat } from "react-icons/io";
import InformationCard from '../components/InformationCard';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />

      <section className="px-5">
        <div>
          <SectionHeading 
            subheading="About Bequia" 
            heading='Lorem Ipsum Dolor Est'
          />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti provident tempore itaque tempora accusamus, rerum ad obcaecati? Suscipit facere sed dignissimos, hic odit aliquam nam ad perferendis tenetur incidunt voluptatibus.
          </p>
        </div>
      </section>

      <Swiper
        // Install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView="auto"
        centeredSlides={false}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="w-full h-[80vh] max-w-screen-xl mx-auto"
      >
        <SwiperSlide className="bg-gray-200 text-white w-72 rounded-lg p-4">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-gray-200 w-72 rounded-lg p-4">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-gray-300 w-72 rounded-lg p-4">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-gray-400 w-72 rounded-lg p-4">Slide 4</SwiperSlide>
      </Swiper>

      <section className='grid grid-cols-1 lg:grid-cols-2 px-8'>
        <InformationCard
          icon={<FaPlaneArrival />}
          heading='Getting to Bequia'
          text='All you need to know to get to the island'
        />

        <InformationCard
          icon={<IoMdBoat />}
          heading='Ferry Schedule'
          text='All you need to know to get to the island'
        />

        <InformationCard
          icon={<FaCarAlt />}
          heading='Getting around Bequia'
          text='All you need to know to get to the island'
        />

        <InformationCard
          icon={<FaHotel />}
          heading='Where to Stay'
          text='All you need to know to get to the island'
        />
      </section>

      <section className='h-[100vh] bg-green px-5 py-12'>
        <SectionHeading 
          subheading='See and do'
          heading='Activities'
          headingColor="text-white"
        />

        <div className='flex flex-col'>
          <div className='bg-gray-400 h-52 w-full'></div>
          <div className='bg-gray-400 h-32 w-40 absolute right-5 mt-56'></div>
        </div>

        <div className='flex flex-col gap-2 text-white font-dm py-5'>
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
