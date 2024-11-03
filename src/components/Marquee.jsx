import { motion } from 'framer-motion';
import React from 'react';

export const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
        {/* Repeat the motion.h1 element for a continuous scroll effect */}
        {[...Array(3)].map((_, i) => (
          <motion.h1
            key={i}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
            className='text-[12vw] text-white leading-none font-["Founders_Grotesk_X-condensed"] uppercase pt-10 -mb20 pr-20 font-semibold'
          >
            we are ochi
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
