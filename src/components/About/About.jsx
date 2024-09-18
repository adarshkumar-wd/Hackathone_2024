import React from 'react'
import ap1 from "../../assets/ap-1.png"
import ap2 from "../../assets/ap-2.png"
import ap3 from "../../assets/ap-3.png"
import ap4 from "../../assets/ap-4.png"
import ap5 from "../../assets/ap-5.png"
import ap6 from "../../assets/ap-6.png"

function About() {

  const cardData = [
    {
      image: ap1,
      text: "All in One Therapy Management"
    },

    {
      image: ap2,
      text: "Real Time Progress Tracking"
    },

    {
      image: ap3,
      text: "Secure Role-Based Access"
    },

    {
      image: ap4,
      text: "Seamless Communication"
    },

    {
      image: ap5,
      text: "Easy Appointment Booking"
    },

    {
      image: ap6,
      text: " AI Powered Assistance"
    }
  ]

  return (
    <div className='w-full h-screen flex flex-col items-center' style={{ background: 'linear-gradient(to right, rgb(224,255,255),  rgb(185,242,255))'}}>
      <h2 className='text-5xl font-bold mb-5'><p>Why <span className='text-cyan-600'>Choose Us</span></p></h2>
      <div className='w-[80%] h-[60%] flex gap-[.5rem] flex-wrap   items-center justify-around'>
        {
          cardData.map((item, index) => (

            <div key={index} className='w-[30%] h-[40%] border-[1px] border-gray-500 rounded-xl'>
              <div className='w-full h-[55%] flex items-center justify-center'>
                <img className='h-[90%] ' src={item.image} alt="" />
              </div>
              <div className='w-full h-[45%] flex justify-center items-center text-blue-900 text-2xl font-bold px-3'>
                <h1>{item.text}</h1>
              </div>
            </div>

          ))
        }
      </div>
      <button>Get Started Now</button>
    </div>
  )
}

export default About