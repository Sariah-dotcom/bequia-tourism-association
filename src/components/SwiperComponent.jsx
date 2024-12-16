import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SwiperComponent({ children, slidesPerView = 1 }) { // Accept children props
  return (
    <Swiper
      modules={[Navigation, Pagination]} 
      spaceBetween={10}                  
      slidesPerView={slidesPerView}                  
      navigation                        
      pagination={{ clickable: true }}
      className='swiper-wrapper'
      breakpoints={{
        // Breakpoint at 640px (mobile)
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // Breakpoint at 768px (tablet)
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // Breakpoint at 1024px (desktop)
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
    >
      {children}
    </Swiper>
  );
}
