import React from 'react';

function About() {
  return (
    <div className="w-full py-20 px-20 bg-[#CDEA68] rounded-tl-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[3.5vw] leading-[3.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-6xl">Our approach:</h1>
          <button className="relative flex uppercase gap-4 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white group transition-colors duration-300 ease-in-out hover:bg-white hover:text-black">
            Read More
            <div className="relative w-2 h-2 bg-white rounded-full transition-all duration-200 ease-in-out group-hover:w-6 group-hover:bg-black group-hover:rounded-none">
              <span className="absolute block w-2 h-2 bg-black transform rotate-45 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 right-[-4px] top-0"></span>
            </div>
          </button>
        </div>
        
        {/* Container with hover effect */}
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859] overflow-hidden flex items-center justify-center transition-transform duration-500 ease-out hover:scale-105">
          <img 
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="Ochi Design"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
