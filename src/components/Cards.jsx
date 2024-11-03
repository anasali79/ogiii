import React from 'react';
import { motion } from 'framer-motion';

export default function Cards() {
  return (
    <div 
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className='w-full min-h-screen bg-zinc-900 flex items-center px-32 gap-5 relative z-[1]'
    >
        <div className='cardcontainer h-[50vh] w-1/2'>
            <motion.div
              className='card relative w-full h-full bg-[#004D43] flex items-center justify-center transition-transform duration-500 ease-in-out hover:scale-105' // Reduced duration here
            >
              <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' alt="Logo 1"/>
              <div className='absolute left-10 bottom-10'>
                <button className='px-5 py-1 rounded-full border-2 text-white relative group overflow-hidden'>
                  <div className="absolute top-0 left-0 w-0 h-full bg-white group-hover:w-full transition-all duration-300 ease-in-out"></div>
                  <span className="relative z-10 group-hover:text-zinc-900">HEY</span>
                </button>
              </div>
            </motion.div>
        </div>
        <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
          <motion.div
            className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826] transition-transform duration-500 ease-in-out hover:scale-105' // Reduced duration here
          >
            <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' alt="Logo 2"/>
            <div className='absolute left-10 bottom-10'>
              <button className='px-5 py-1 rounded-full border-2 text-white relative group overflow-hidden'>
                <div className="absolute top-0 left-0 w-0 h-full bg-white group-hover:w-full transition-all duration-300 ease-in-out"></div>
                <span className="relative z-10 group-hover:text-zinc-900">YOU</span>
              </button>
            </div>
          </motion.div>
          <motion.div
            className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826] transition-transform duration-500 ease-in-out hover:scale-105' // Reduced duration here
          >
            <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' alt="Logo 3"/>
            <div className='absolute left-10 bottom-10'>
              <button className='px-5 py-1 rounded-full border-2 text-white relative group overflow-hidden'>
                <div className="absolute top-0 left-0 w-0 h-full bg-white group-hover:w-full transition-all duration-300 ease-in-out"></div>
                <span className="relative z-10 group-hover:text-zinc-900">LIKE IT</span>
              </button>
            </div>
          </motion.div>
        </div>
    </div>
  );
}
