import React from 'react'
import "./About.css"
import aboutImage from "../../assets/About_image.png"

function About() {
    return (
        <div className=''>
            <section class="why-choose-us body bg-[#e9e3e3] h-screen">
                <div class="about-container">
                    <h2 class="main-header">Why Choose Us ?</h2>
                    <p class="header-text">
                        With 500+ successful cases, 100% client satisfaction, and 50+ expert
                        therapists, we provide trusted, comprehensive speech therapy care.
                    </p>
                    <div class="stats--box">
                        <div class="stats">
                            <div class="stat-item">
                                <div class="icon-container">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        fill="#000000"
                                        viewBox="0 0 256 256"
                                    >
                                        <path
                                            d="M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z"
                                        ></path>
                                    </svg>
                                </div>
                                <div class="stat-text">
                                    <h3>1000+</h3>
                                    <p>Expert Therapists</p>
                                </div>
                            </div>
                            <div class="stat-item">
                                <div class="icon-container">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        fill="#000000"
                                        viewBox="0 0 256 256"
                                        class="icon"
                                    >
                                        <path
                                            d="M248,208h-8V128a16,16,0,0,0-16-16H168V48a16,16,0,0,0-16-16H56A16,16,0,0,0,40,48V208H32a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16Zm-24-80v80H168V128ZM56,48h96V208H136V160a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v48H56Zm64,160H88V168h32ZM72,96a8,8,0,0,1,8-8H96V72a8,8,0,0,1,16,0V88h16a8,8,0,0,1,0,16H112v16a8,8,0,0,1-16,0V104H80A8,8,0,0,1,72,96Z"
                                        ></path>
                                    </svg>
                                </div>
                                <div class="stat-text">
                                    <h3>50+</h3>
                                    <p>Largest private therapist network of centers</p>
                                </div>
                            </div>
                            <div class="stat-item">
                                <div class="icon-container">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        fill="#000000"
                                        viewBox="0 0 256 256"
                                    >
                                        <path
                                            d="M240,80v72a8,8,0,0,1-16,0V99.31l-98.34,98.35a8,8,0,0,1-11.32,0l-96-96A8,8,0,0,1,29.66,90.34L120,180.69,212.69,88H160a8,8,0,0,1,0-16h72A8,8,0,0,1,240,80Z"
                                        ></path>
                                    </svg>
                                </div>
                                <div class="stat-text">
                                    <h3>500+</h3>
                                    <p>Successful Cases</p>
                                </div>
                            </div>
                            <div class="stat-item">
                                <div class="icon-container">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        fill="#000000"
                                        viewBox="0 0 256 256"
                                    >
                                        <path
                                            d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"
                                        ></path>
                                    </svg>
                                </div>
                                <div class="stat-text">
                                    <h3>100%</h3>
                                    <p>Client Satisfaction</p>
                                </div>
                            </div>
                        </div>
                        <div class="image-container">
                            <img
                                src={aboutImage}
                                alt="Therapist with child"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About