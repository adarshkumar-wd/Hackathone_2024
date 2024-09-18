import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar'
import firstImage from '../assets/First_Image.png';
import { IoLocationOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";

function Hero() {

  const [isLocationLlistOpen, setisLocationLlistOpen] = useState(false)
  const [isCliniclistOpen, setisCliniclistOpen] = useState(false)

  return (
    <div id='Home' className='w-full h-screen relative' style={{ background: 'linear-gradient(to right, rgb(224,255,255),  rgb(185,242,255))'}}>
      <Navbar />
      <section className='h-[85%] flex'>

        <div className='h-full w-[60%] flex items-center justify-center'>

          <div>
            <h1 className='text-5xl font-bold mb-6 text-blue-900'>FIND CLINICS</h1>

            <div onClick={() => setisLocationLlistOpen(!isLocationLlistOpen)} className='relative h-[3.3rem] w-[25rem] bg-gray-200 hover:cursor-pointer mt-10 mb-6 flex border-[1px] border-blue-800 items-center p-2 text-[1.4rem] font-semibold rounded-lg shadow-[5px_5px_10px_rgba(0,0,0,0.25)]'>
              <IoLocationOutline className='text-blue-800 font-extrabold ml-1' />
              <p className='ml-4 text-gray-500 opacity-50'><h1>Select Location</h1></p>

              <div className={`absolute ${ !isLocationLlistOpen ? "hidden" : "" } w-full h-[23rem] p-1 bg-white border-[2px] text-black border-blue-900 rounded-2xl overflow-hidden z-[1] top-[100%] left-0`}>
                <div className='h-full w-full '>
                  <div className='h-[15%] flex items-center'>
                    <IoArrowBack onClick={() => setisLocationLlistOpen(!isLocationLlistOpen)} className='bg-white w-[10%] h-[50%]'/>
                    <input type="text" className='h-[50%] w-[80%] ml-2 outline-none border-b-[2px] pl-2 font-light border-blue-900' placeholder='Ex - Delhi' />
                  </div>

                  <div className='w-full h-[85%] '>
                    <div onClick={() => setisCliniclistOpen(!isCliniclistOpen)} className='w-full h-[4rem] hover:bg-gray-200 rounded-lg pl-5 font-medium flex items-center  border-b-[2px] text-black border-cyan-900'>
                      <p><h1>Delhi</h1></p>
                    </div>
                  </div>

                </div>
              </div>

              <div className={`absolute ${ !isCliniclistOpen ? "hidden" : ""} w-full h-[23rem] p-1 bg-white border-[2px] text-black border-blue-900 rounded-2xl overflow-hidden z-[1] top-[100%] left-0`}>
                <div className='h-full w-full '>
                  <div className='h-[15%] flex items-center'>
                    <IoArrowBack onClick={() => setisCliniclistOpen(!isCliniclistOpen)} className='bg-white w-[10%] h-[50%]'/>
                    <input type="text" className='h-[50%] w-[80%] ml-2 outline-none border-b-[2px] pl-2 font-light border-blue-900' placeholder='Ex - abc clinic' />
                  </div>

                  <div className='w-full h-[85%] '>
                    <div onClick={() => alert("Not Completed")} className='w-full h-[4rem] hover:bg-gray-200 rounded-lg pl-5 font-medium flex items-center  border-b-[2px] text-black border-cyan-900'>
                      <p><h1>xyz Rehab Clinic</h1></p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            <div className=' h-[3rem] w-[40rem]  mt-10 mb-6 border-b-[2px] border-blue-800 flex items-center text-[2rem] font-semibold'>
              <IoSearchOutline className='w-[10%] font-extrabold text-blue-900' />
              <input className='h-full outline-none bg-transparent w-fit opacity-55' type="text" placeholder='Search Clinics...' />
            </div>

            <button className='bg-blue-800 p-5 text-white mt-4 mb-6 h-[3.5rem] w-[10rem] font-semibold text-3xl rounded-lg flex items-center justify-center hover:bg-blue-700'>Search</button>

          </div>

        </div>

        <div className='h-[100%] w-[40%] flex items-center justify-center'>
          <div className=''>
            <img className='w-[90%] h-[90%] object-cover' src={firstImage} alt="" />
          </div>
        </div>

      </section>
    </div>
  )
}

export default Hero
