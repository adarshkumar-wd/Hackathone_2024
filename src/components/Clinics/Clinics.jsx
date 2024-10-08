import React from 'react'
import "./Clinics.css"
import maria from "../../assets/Clinic.avif"

function Clinics() {
    return (
        <div className='h-screen w-full flex flex-col justify-center pt-10' style={{ background: 'linear-gradient(to right, rgb(224,255,255),  rgb(185,242,255))'}}>

            <h2 className='text-[4rem] tracking-tight font-semibold'>Clinics Available</h2>
            <div class="container w-full h-screen">
                <div className="card w-[22%]  mt-10">
                    <img src={maria} alt="Mr. Rahul Verma" />
                    <div className="blockquote first-child text-[1.3rem]">
                        <h3>xyz clinic</h3>
                        <p>M.Sc., SLP</p>
                        <p>10 years of Experience</p>
                        <p>
                            <span>
                                Specialization in Adult neurogenic communication disorders.
                            </span>
                        </p>
                    </div>
                </div>

                <div className="card w-[22%] mt-10">
                    <img src={maria} alt="Dr. Ananya Mehta" />
                    <div className="blockquote  text-[1.3rem]">
                        <h3>xyz clinic</h3>
                        <p>PhD, CCC-SLP</p>
                        <p>15 years of Experience</p>
                        <p>
                            Specialization in <span> Pediatric speech</span> and
                            <span>language disorders.</span>
                        </p>
                    </div>
                </div>

                <div className="card w-[22%] mt-10">
                    <img src={maria} alt="Ms. Priya Sharma" />
                    <div className="blockquote  text-[1.3rem]">
                        <h3>xyz clinic</h3>
                        <p>M.A., CCC-SLP</p>
                        <p>8 years of Experience</p>
                        <p>
                            Specialization in <span> Voice therapy and fluency disorders.</span>
                        </p>
                    </div>
                </div>

                <button className="btn btn--left ml-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="btn-icon"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>

                <button className="btn btn--right mr-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="btn-icon"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>



        </div>
    )
}

export default Clinics