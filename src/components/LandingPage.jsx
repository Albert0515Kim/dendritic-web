import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const svgLogo = '/DendriticLearning_icon_transparent.svg';
const fadedMockup = '/faded-mockup.png';
const medalIcon = '/medal.svg';

const Landing = ({ home }) => {
  const [scrollY, setScrollY] = useState(0);
  const [multiplier, setMultiplier] = useState({ logo: 0.1, text: 0.1 });

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setMultiplier({ logo: 0.05, text: 0.05 });
    } else {
      setMultiplier({ logo: 0.1, text: 0.1 });
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const parallaxOffset = (multiplier) => {
    return `translateY(${scrollY * multiplier}px)`;
  };

  return (
    <div id="home" className="text-white min-h-screen bg-black py-16 flex flex-col items-center justify-center">
      <div className="w-full relative">
        <div className="absolute inset-x-0 top-0 transform translate-y-[-20%] items-center" style={{ zIndex: 1 }}>
          <img src={fadedMockup} className="w-full mx-auto h-auto md:max-w-[1200px]" alt="" />
        </div>
        <div className="relative flex flex-col items-center lg:mt-[25rem] md:mt-[15rem] mt-[12rem]" style={{ zIndex: 2 }}>
          <div className="flex flex-col md:flex-row items-center md:space-x-16" style={{ transform: parallaxOffset(multiplier.logo) }}>
            <motion.div
              className="w-full max-w-[10rem] sm:max-w-[10rem] lg:max-w-[15rem]"
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <img src={svgLogo} className="w-40 h-auto sm:w-48 lg:w-64 mx-auto" alt="logo" />
            </motion.div>
            <div className="flex-1 text-center md:text-left mt-4 sm:mt-8 md:mt-0">
              <motion.h1
                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold py-4 whitespace-nowrap">
                Dendritic Learning
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-500">
                Revolutionize the way you learn
              </motion.p>
              <motion.button
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#00df9a] w-[140px] sm:w-[170px] rounded-md font-medium my-6 py-2 sm:py-3 text-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.6 }}
              >
                Start Learning More
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4 mt-10 py-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light text-white"
        >
          {/* Winner of the 2024 Congressional App Challenge */}
        </motion.h2>
        <motion.img
          src={medalIcon}
          alt="medal icon"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
        />
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light text-white"
        >
          Winner of 2024 D214 App Showcase
        </motion.h2>
      </div>
    </div>
  );
};

export default Landing;
