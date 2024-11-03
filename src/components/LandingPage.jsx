import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';

export const Landingpage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-center">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="mr-5 w-[7vw] rounded-md h-[5.7vw] top-[5vw] bg-black-500"
                ></motion.div>
              )}
              <h1 className="flex items-center uppercase text-[9vw] h-full leading-[7vw] font-['Foundrs_Grotesk_X-condensed'] font-bold text-white">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <div key={index} className="relative group">
            <motion.p
              initial={{ y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-md font-light tracking-tight leading-none relative inline-block text-white cursor-pointer"
            >
              {item}
            </motion.p>
            <motion.div
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute left-0 bottom-[-5px] h-[2px] bg-white"
            ></motion.div>
          </div>
        ))}
        
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full cursor-pointer relative group overflow-hidden text-white">
            <div className="absolute top-0 left-0 w-0 h-full bg-white group-hover:w-full transition-all duration-500 ease-in-out"></div>
            <span className="relative z-10 group-hover:text-zinc-900">Start the Project</span>
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full cursor-pointer relative group overflow-hidden text-white">
            <div className="absolute top-0 left-0 w-0 h-full bg-white group-hover:w-full transition-all duration-500 ease-in-out rounded-full"></div>
            <span className="rotate-[45deg] relative z-10 group-hover:text-zinc-900">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;