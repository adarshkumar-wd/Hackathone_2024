import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import logo from "../assets/Logo2.jpg"


function Navbar() {

  const [isLoggin, setIsLoggin] = useState(false)

  return (
    <>
      <nav className='w-full h-[11%] bg-blue-900 flex items-center pl-10 pr-10 justify-between'>

        <div className=' h-[8.5rem] w-[8.5rem] bg-red-950 overflow-hidden rounded-full border-[1px] border-black'>
          <img className='w-full h-full object-contain ' src={logo} alt="" />
        </div>

        <div className='h-[80%] w-[50%] text-white'>
          <ul className='w-[100%] h-[100%] flex items-center justify-between text-[3rem] font-semibold'>
            <li><a className='hover:cursor-pointer' to="#Home">Home</a></li>
            <li><a className='hover:cursor-pointer' to="#About">About</a></li>
            <li><a className='hover:cursor-pointer' to="#Clinics">Clinics</a></li>
            <li><a className='hover:cursor-pointer' to="#Contact">Contact</a></li>
          </ul>
        </div>

        <div className='h-[70%] w-[14%] flex items-center text-2xl text-white font-semibold'>
          <div className='w-full h-[70%] rounded-full text-3xl border-[3px] border-white flex items-center justify-center p-3'>
            <span className='hover:cursor-pointer'>Login</span>
            <span className='ml-2 mr-2'>/</span>
            <span className='hover:cursor-pointer'>Signup</span>
          </div>
        </div>
      </nav>

      <section className='w-full h-[4%] bg-cyan-500 text-center text-3xl text-black font-extrabold flex items-center justify-center'>
        <span className='text-red-500'>NOTE :- </span> <span>  </span> <p> Please Open The Prototype in Our Laptop . Because the Prototype is not RESPONSIVE till now...</p>
      </section>

    </>

  )
}

export default Navbar
