import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import PageHero from '../components/PageHero'

export default function Accomodation() {
  return (
    <div>
      <ScrollToTop />

      <PageHero 
        heroImage='/accommodation-images/sea-shells.jpg'
        pageTitle='Accommodation'
      />

      Accommodations
    </div>
  )
}
