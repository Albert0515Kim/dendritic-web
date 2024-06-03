import React, { useState, useEffect } from 'react';
import svgLogo from '../assets/DendriticLearning_icon_transparent.svg';
import fadedMockup from '../assets/faded-mockup.png';

const Landing = ({home}) => {
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
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize the correct multiplier

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const parallaxOffset = (multiplier) => {
    return `translateY(${scrollY * multiplier}px)`;
  };

  return (
    <div id="home" className='text-white min-h-screen bg-black px-4 sm:px-8 py-16 flex items-center justify-center'>
      <div className='w-full relative'>
        <div className='absolute inset-x-0 top-0 transform translate-y-[-20%] items-center' style={{ zIndex: 1 }}>
          <img src={fadedMockup} className='w-full mx-auto h-auto md:max-w-[1200px]' />
        </div>
        <div className='relative flex flex-col items-center sm:mt-[400px] mt-[200px]' style={{ zIndex: 2 }}>
          <div className='flex flex-col md:flex-row items-center md:space-x-16'>
            <div className='w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px]' style={{ transform: parallaxOffset(multiplier.logo) }}>
              <img src={svgLogo} className='w-24 h-24 sm:w-full sm:h-auto mx-auto' />
            </div>
            <div className='flex-1 text-center md:text-left mt-4 sm:mt-8 md:mt-0' style={{ transform: parallaxOffset(multiplier.text) }}>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold py-4 whitespace-nowrap'>
                Dendritic Learning
              </h1>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-500'>
                Revolutionize the way you learn
              </p>
              <button  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className='bg-[#00df9a] w-[140px] sm:w-[170px] rounded-md font-medium my-6 py-2 sm:py-3 text-black'>
                Start Learning More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
