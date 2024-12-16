import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import PageHero from '../components/PageHero'

export default function Activities() {
  return (
    <div>
      <ScrollToTop />

      <PageHero 
        heroImage='/hero-images/activities-hero.jpg'
        pageTitle='Activities'
      />

      Accommodations
    </div>
  )
}
