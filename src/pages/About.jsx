import React from 'react'
import PageHero from '../components/PageHero'
import SubHeading from '../components/SubHeading'
import SectionHeading from '../components/SectionHeading';
import Accordion from '../components/Accordion';
import ScrollToTop from '../components/ScrollToTop';

export default function About() {
  return (
    <div>
      <ScrollToTop />

      <PageHero 
        heroImage='/hero-images/bay.jpg'
        pageTitle='About Bequia'
      />

      <div className='page-content p-5 mt-[5rem]'>
        <div>
          <SectionHeading subheading='Get To Know Bequia' heading='An Island Story'/>
          <p>
            The tiny island of Bequia has a unique, magical charm which is hard to find
            anywhere else in the Caribbean. With fewer than six thousand inhabitants, it 
            feels like home from the moment you arrive; friendliness is the watchword, 
            and the pace is relaxed and easy-going. 
          </p>
          <p className='mt-5'>
            Bequia fulfils many dreams of the perfect small Caribbean island: beautiful sandy 
            beaches where more than ten people may constitute a crowd, lush green hillsides, 
            attractive little villages, intimate, well run hotels and guest houses, hardly any traffic,
           places to get together and places in which to find that perfect solitude. Variety and choice 
           on so small an island may come as a surprise - but there are both wherever you look. 
          </p>

          <p className='mt-5'>A choice of nightlife too awaits you - gourmet international cuisine, or 
            delicious local cooking; elegant cocktails or sundowners in a local bar; a lively jump up to 
            steel band music or a wonderfully romantic candlelit dinner far away from it all. 
          </p>
        </div>

        <div>
          <SectionHeading subheading='Our Story' heading='About the Bequia Tourism Association'/>
          <p>The Bequia Tourism Association (BTA) was formed in December 1999 by a group of individuals from the Bequia 
            business community, with the dual aims of protecting and enhancing the island's resources for both visitors 
            and the community, and of attracting more visitors to the island through its own promotional and marketing 
            initiatives.
          </p>

          <p className='mt-5'>
            The BTA is a non-profit organization, supported by annual membership fees, fund-raising activities and donations 
            to the "Friends of Bequia" Club. A subvention from the government covers the running costs of the Tourism Office and
            its staff, while special projects are accomplished with volunteer labour and skills drawn from the membership.
          </p>

        </div>

        <div>
          <SubHeading title='Island Facts' />
          <div className='flex flex-col gap-5'>
            <Accordion 
                accordionTitle='Location & Size'  
                content='Bequia is situated at latitude 13 N and 60.15 West, in the southern part of the Caribbean 
                  chain known as the Windward Islands. After the capital island of St. Vincent (pop. 110,000) 
                  situated nine miles to the north, Bequia is the largest of the thirty-two islands and cays 
                  that make up the island state of St. Vincent & the Grenadines. '
            />

              <Accordion 
                  accordionTitle='Population'
                  content='An intriguing mix of native Bequians of African, Scottish, Irish, French, Indian and 
                  Carib descent - many of whom can trace their ancestry directly back the islands earliest inhabitants
                  of the 18th century - and more recent settlers from Europe, America and Canada who have chosen to make Bequia their home. '
              />

              <Accordion 
                  accordionTitle='Currency'
                  content='Local currency is the EC ("EE SEE") dollar which is tied to the US dollar at approximately 
                      US$1 to EC$2.67. Most businesses and taxis will accept US$ (normally at EC$2.60), and you may find
                      small denomination US$ notes useful. US$ rather than sterling travellers cheques are recommended. 
                      Credit cards are widely accepted at hotels, restaurants and boutiques, but smaller businesses may 
                      ask for EC or US cash. ATM machines are available at both banks on the island.'
            />

            <Accordion 
                  accordionTitle='Visas/Passports'
                  content='Entry Visas are not required for American or Commonwealth citizens, or for those nationals of 
                  a country which has a visa exemption agreement with St. Vincent & the Grenadines.'
              />

              <Accordion 
                  accordionTitle='Weather'
                  content='Daytime temperatures consistently average between 26C (79F) and 30C (86F) throughout the year. 
                  A "chilly" evening in the winter months (January to March) might see a low of around 21C (70F) and in the summer months the temperature will occasionally reach 32C (90F). '
              />
          </div>
        </div>
      </div>
    </div>
  )
}
