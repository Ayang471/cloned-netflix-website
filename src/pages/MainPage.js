import React from 'react'
import ListofOptions from '../MultipleDevicesComponets/ListofOptions'
import PlanBanner from '../components/PlanBanner'
import Accordions from '../AccordionsComponents/Accordions'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'


function MainPage() {
  return (
    <div className='main-page'>
      <HeroSection />
      <PlanBanner />
     <ListofOptions />
      <Accordions />
      <Footer />
    </div>
  )
}

export default MainPage