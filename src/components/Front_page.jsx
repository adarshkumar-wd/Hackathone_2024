import React from 'react'
import Hero from './Hero'
import About from './About/About'
import Clinics from './Clinics/Clinics'
import Contact from './Contact'
import Review from './Review/Review'

function Front_page() {
  return (
    <div className=''>
      <Hero />
      <About />
      <Clinics />
      <Review />
      <Contact />
    </div>
  )
}

export default Front_page