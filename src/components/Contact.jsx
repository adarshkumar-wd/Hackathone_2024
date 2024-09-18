import React from 'react'
import logo from "../assets/vani.png"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function Contact() {
  return (
    <div className='w-full h-[40vh] bg-blue-800 font-white'>
        <div className='w-full h-[50%] flex items-center justify-center'>
            <div className='h-[15rem] w-[15rem] overflow-hidden'>
                <img className='w-full h-full object-contain' src={logo} alt="" />
            </div>
        </div>
        <div className='w-full h-[25%]  flex items-center justify-around text-[1.1rem] text-white font-semibold'>
            <div><p><h1>CONNECT YOUR CLINIC :- 9999******</h1></p></div>
            <div><p><h1>HELPLINE NUMBER :- 9999******</h1></p></div>
            <div><p><h1>CLINIC HELPLINE NUMBER :- 9999******</h1></p></div>
            <div><p><h1>USER HELPLINE NUMBER :- 9999******</h1></p></div>
        </div>

        <div className='w-full h-[25%]  flex items-center justify-around text-3xl text-white font-semibold'>
            <div className='flex'><p className='flex items-center'><h1 className='flex items-center gap-2'>CONNECT WITH US - <div className='flex gap-4'><FaInstagram className='hover:cursor-pointer'/><FaLinkedin className='hover:cursor-pointer'/><FaFacebook className='hover:cursor-pointer'/></div></h1></p></div>
        </div>
    </div>
  )
}

export default Contact