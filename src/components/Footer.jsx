import { motion } from 'framer-motion';
import React from 'react';
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <motion.div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed="0.5"
      className='w-full bg-zinc-900 p-20 font-["Founder_Grotesk_X-Condensed"] relative z-[999] mb-[-50px]' // Added negative margin
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className='flex w-full'>
        <div className='w-1/2'>
          <motion.h1 
            className='text-[8vw] font-semibold uppercase leading-none -mb-10 text-white'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Eye-
          </motion.h1>
          <motion.h1 
            className='text-[8vw] font-semibold uppercase leading-none -mb-10 text-white'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Opening
          </motion.h1>
        </div>
        <div className='w-1/2'>
          <motion.h1 
            className='text-[6vw] font-semibold uppercase leading-none -mb-10 text-white'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Presentation
          </motion.h1>
        </div>
      </div>

      <div className='mt-32 border-t-[1px] border-zinc-800 pt-10'>
        <div className='flex gap-10 mt-10'>
          {[
            { text: "Instagram", icon: <FaInstagram size="24" />, link: "#" },
            { text: "Facebook", icon: <FaFacebookF size="24" />, link: "#" },
            { text: "Twitter", icon: <FaXTwitter size="24" />, link: "#" }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <a 
                href={item.link} 
                className="flex items-center gap-2 text-white text-xl font-light"
              >
                {item.icon}
                <span className="group-hover:-translate-y-2 transition-transform duration-300">
                  {item.text}
                </span>
              </a>
              <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className='flex justify-between items-end mt-32'>
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h1 className="text-white text-[4vw] font-bold uppercase">
            OCHI
          </h1>
          <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></div>
        </motion.div>

        <motion.div 
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <p className="text-white text-xl font-light">
            Website by Anas
          </p>
          <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></div>
        </motion.div>
      </div>

      <motion.div 
        className='mt-10 text-white text-sm font-light opacity-50'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        © 2024. All rights reserved.
      </motion.div>
    </motion.div>
  );
}

export default Footer;
