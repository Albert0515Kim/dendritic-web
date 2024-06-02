import React from 'react';
// import App from '../assets/App.png';
import svgLogo from '../assets/DendriticLearning_icon_transparent.svg';
// import rotatedMockup from '../assets/dendritic-web-mockup.png';
import fadedMockup from '../assets/faded-mockup.png';

const Landing = () => {
  return (
    <div className='text-white h-screen bg-black px-8 py-16 flex items-center justify-center'>
      <div className='w-full relative'>
        <div className='absolute inset-x-0 top-0 transform translate-y-[-20%] items-center' style={{ zIndex: 1 }}>
          <img src={fadedMockup} className='w-full mx-auto h-auto md:max-w-[1200px]'/>
        </div>
        <div className='relative flex flex-col md:flex-col items-center mt-[500px]' style={{ zIndex: 2 }}>
          <div className='flex flex-col md:flex-row items-center md:space-x-16'>
            <div className='w-full max-w-[400px] md:max-w-[600px]'>
              <img src={svgLogo} className='w-full h-auto mx-auto' />
            </div>
            <div className='flex-1 text-center md:text-left'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold py-4 whitespace-nowrap'>
                Dendritic Learning
              </h1>
              <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-500'>
                Revolutionize the way you learn
              </p>
              <button className='bg-[#00df9a] w-[170px] rounded-md font-medium my-6 py-3 text-black'>
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
