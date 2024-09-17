import React from 'react'
import Hero from './Hero'
import About from './About/About'
import Clinics from './Clinics/Clinics'
import Contact from './Contact'

function Front_page() {
  return (
    <div className=''>
      <Hero />
      <About />
      <Clinics />
      <Contact />
    </div>
  )
}

export default Front_page