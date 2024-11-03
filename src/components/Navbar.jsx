import React, { useState, useEffect } from 'react';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Hide navbar on scroll down
        setShowNavbar(false);
      } else {
        // Show navbar on scroll up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed z-[999] w-full px-20 py-8 font-['Neue_Montreal'] flex justify-between items-center transition-transform duration-500 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="logo" aria-label="Logo">
        <svg
          width="72"
          height="30"
          viewBox="0 0 72 30"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
        >
          <path d="M10 10 L20 20 L30 10 Z" fill="white" /> {/* Sample path */}
        </svg>
      </div>
      <div className="links flex gap-10 text-white">
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
          <a
            key={index}
            className={`text-lg capitalize font-light relative group transition-transform duration-500 ease-in-out pb-2 ${index === 4 && "ml-32"}`}
          >
            <span className="relative inline-block group-hover:translate-y-2 transition-transform duration-500 ease-in-out">
              {item}
            </span>
            <span
              className="absolute left-0 -bottom-1 h-[2px] w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"
            ></span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
