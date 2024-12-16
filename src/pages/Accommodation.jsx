import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import PageHero from '../components/PageHero'
import SubHeading from '../components/SubHeading'
import SwiperComponent from '../components/SwiperComponent'
import { SwiperSlide } from 'swiper/react'
import AccommodationCard from '../components/AccommodationCard'

export default function Accomodation() {
  return (
    <div>
      <ScrollToTop />

      <PageHero 
        heroImage='/accommodation-images/sea-shells.jpg'
        pageTitle='Accommodations'
      />

      <div className="page-content px-5">
        <div className='h-[65vh] lg:h-[90vh]'>
          <SubHeading title='Apartments'/>
          <SwiperComponent slidesPerView={2}>
            <SwiperSlide>
              <AccommodationCard 
                accommodationImg='/accommodation-images/aqua-on-bequia.jpg'
                accommodationName='Aqua on Bequia'
                location='Spring'
                description='Beautifully appointed one bedroom apartments in a colorful tropical garden setting, perched on the Belmont hillside overlooking Admiralty Bay.'
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccommodationCard 
                location="Spring"
                accommodationImg="/accommodation-images/bequia-white-cactus.jpg"
                accommodationName="Bequia White Cactus"
                description=" Newly renovated duplex with an ocean view. Walking distance from Adams Bay and The Liming; short drive to Friendship and Lower Bay."
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccommodationCard 
                location="Lower Bay"
                accommodationImg="/accommodation-images/the-lookout.jpg"
                accommodationName="Lookout Apartments"
                description="Two newly refurbished, 2-bedroom, 2 ensuite bath boutique apartments with stunning panoramic views over Lower Bay beach."
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccommodationCard 
                location='Belmont'
                accommodationImg='/accommodation-images/pink-house.jpg'
                accommodationName='Pink House Apartment'
                description='Charming house, reasonably priced and conveniently situated within walking distance of the harbour and Princess Margaret beach.'
              />
            </SwiperSlide>

          </SwiperComponent>
        </div>

        <div className='h-[65vh] lg:h-[90vh]'>
          <SubHeading title='Villas'/>
          <SwiperComponent slidesPerView={2}>
            <SwiperSlide>
              <AccommodationCard 
                accommodationImg='/accommodation-images/tamarind.jpg'
                accommodationName='A Tamarind Villa'
                location='Spring'
                description='A brand new modern Caribbean villa built and furnished to the highest standards. Completed Feb 2010. Located on picturesque Spring Bay.'
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccommodationCard 
                location="Spring"
                accommodationImg="/accommodation-images/bay-tree-villa.gif"
                accommodationName="Bay Tree Villa"
                description="Fabulous view, cool breezes, large private pool, BBQ patio, gourmet kitchen, Two master suites, one is a super king 4 poster bed the other has the option of either a super king or twin beds at Bay Tree Villa."
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccommodationCard 
                location="Admiralty Bay"
                accommodationImg="/accommodation-images/bellwood-falls.jpg"
                accommodationName="Bellwood Falls Villa"
                description="Quiet and secluded in a West facing elevated position above Admiralty Bay and beaches.
              Good breezes and a stunning panoramic view make this villa a popular and affordable stay."
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccommodationCard 
                location='Princess Margaret Beach'
                accommodationImg='/accommodation-images/flamingo.jpg'
                accommodationName='Flamingo Villa'
                description='Flamingo Villa offers you complete privacy and breathtaking views of the Caribbean Sea. It is situated on one of the best beaches in Bequia, Princess Margaret Beach.'
              />
            </SwiperSlide>

          </SwiperComponent>
        </div>

        <div className='h-[65vh] lg:h-[90vh]'>
          <SubHeading title='Hotels'/>
          <SwiperComponent slidesPerView={2}>
            <SwiperSlide>
              <AccommodationCard 
                accommodationImg='/accommodation-images/bbh.gif'
                accommodationName='Bequia Beach Hotel'
                location='Friendship'
                description='For that little something extra in your holiday - we offer it all! The newly built "contemporary colonial" Bequia Beach Hotel, located on one of the islands best beaches in Friendship Bay.'
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccommodationCard 
                location="Belmont"
                accommodationImg="/accommodation-images/plantation-hotel.jpg"
                accommodationName="Bequia Plantation Hotel"
                description="The wonderful beachfront Bequia Plantation Hotel embodies luxury and quality at its finest in one of the island top premier locations."
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccommodationCard 
                location="Spring"
                accommodationImg="/accommodation-images/springhouse-bequia.gif"
                accommodationName="Bequia Spring Hotel"
                description="Spring House is an exclusive architect-designed luxury villa with 6+ spacious suites in private grounds. Furnished to the highest standards, the fully-staffed villa caters for 12+ guests."
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccommodationCard 
                location='Belmont'
                accommodationImg='/accommodation-images/frangipani-hotel.jpg'
                accommodationName='Frangipani Hotel'
                description='Traditional West Indian inn converted from a family home. Choose from old-style rooms in the original building, or separate,elegant, stone garden units, with balconies and ensuite bathrooms.'
              />
            </SwiperSlide>

          </SwiperComponent>
        </div>
        
      </div>
    </div>
  )
}
