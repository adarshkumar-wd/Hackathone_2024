import React from 'react'
import "../Review/Review.css"
import maria from "../../assets/maria.jpg"
import { IoStarSharp } from "react-icons/io5";

function Review() {

    const reviewData = [
        {
            name: "Dr. Rajesh Sharma",
            role: "[Speech Therapist]",
            feedback: "VaaniSutra has completely transformed the way I managemy therapy sessions. The realtime progress tracking and seamless communication withsupervisors help me deliver better care to my patients. It's user-friendly and saves me hours of paperwork!"
        },

        {
            name: "Priya Verma",
            role: "[Parent of a Patient]",
            feedback: "This platform has made it so easy to book therapy sessions for my son and track his progress.I love how I can stay updated on his milestones, and the reminders ensure we never miss an appointment."
        },

        {
            name: "Dr. Anjali Mehta ",
            role: "[Clinical Supervisor]",
            feedback: "As a supervisor, VaaniSutra has streamlined my workflow. I can easily review therapy plans, provide feedback, and monitor therapists' performance all in one place. It's a game-changer for managing multiple cases efficiently."
        },
    ]

    return (
        <div className='w-ful h-screen flex flex-col items-center justify-center'style={{ background: 'linear-gradient(to right, rgb(224,255,255),  rgb(185,242,255))'}}>
            <h1 className='text-5xl font-extrabold'><p>WHAT CLIENTS SAY</p></h1>
            <div className='w-[15rem] h-[.5rem] rounded-full bg-orange-400 mt-5'></div>
            <div className='w-full gap-[5rem] h-[65%] mt-8 flex items-center justify-center'>
                {
                    reviewData.map((item, index) => (
                        <div key={index} className='w-[20%] h-[80%] bg-white rounded-xl shadow-lg flex flex-col items-center relative'>
                            <div className='w-[6rem] h-[6rem] overflow-hidden border-gray-300 border-[4px]  rounded-full absolute top-[-10%]'>
                                <img className='w-full h-full object-contain' src={maria} alt="" />
                            </div>
                            <div className='mt-20 font-bold text-2xl tracking-tight'>
                                <h1 className='text-center'>{item.name}</h1>
                                <h1>{item.role}</h1>
                            </div>

                            <div className='mt-10'>
                                <p className='text-center px-6'>{item.feedback}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Review
