import { useState } from 'react';
import './App.css';
import Front_page from './components/Front_page';
import chatbot from "./assets/chatbot.jpeg";
import gsap from 'gsap';
import { MdClose } from "react-icons/md";

function App() {
  const [isCodeSpaceOpen, setIsCodeSpaceOpen] = useState(false);

  const openChatSpace = () => {
    if (!isCodeSpaceOpen) {
      let tl = gsap.timeline();

      tl.fromTo(".chatSpace", 
        { opacity: 0, height: 0 }, 
        { opacity: 1, height: '60%', duration: 0.5, onComplete: () => setIsCodeSpaceOpen(true) }
      );

      tl.fromTo(".text", 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.3 }, "-=0.3"
      );

      tl.fromTo(".close", 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.3 }, "-=0.3"
      );
    } 
  };

  const closeChatBot = () => {
    if (isCodeSpaceOpen) {
      let tl = gsap.timeline();

      tl.fromTo(".close", 
        { opacity: 1 }, 
        { opacity: 0, duration: 0.3 }
      );

      tl.fromTo(".text", 
        { opacity: 1 }, 
        { opacity: 0, duration: 0.3 }, "-=0.3"
      );

      tl.to(".chatSpace", {
        opacity: 0,
        height: 0,
        duration: 0.5,
        onComplete: () => setIsCodeSpaceOpen(false),
      });
    }
  };

  return (
    <div className='w-full h-full overflow-x-hidden'>
      <Front_page />
      <div onClick={openChatSpace} className='fixed w-[7rem] h-[7rem] bg-red-500 rounded-full bottom-[5rem] right-52 z-[100] overflow-hidden border-[2.5px] border-blue-900 hover:cursor-pointer'>
        <img className='w-full h-full object-cover' src={chatbot} alt="" />
      </div>
      <div className='chatSpace fixed w-[20%] h-0 opacity-0 bottom-[12rem] right-4 z-[100] flex items-center justify-center bg-white border-[2.5px] border-cyan-700 rounded-2xl'>
        <div className='w-full h-full flex items-center justify-center relative'>
          <p className='text text-4xl tracking-tight font-extrabold text-blue-900'>
            <h1>NOT COMPLETED</h1>
          </p>
          <MdClose onClick={closeChatBot} className='close absolute cursor-pointer top-7 right-8 text-5xl font-extrabold text-blue-900' />
        </div>
      </div>
    </div>
  );
}

export default App;