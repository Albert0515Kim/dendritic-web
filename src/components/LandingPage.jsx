import React from 'react';
import App from '../assets/App.png';

const Landing = () => {
  return (
    <div className='text-white h-screen bg-black px-8 py-16 flex items-center justify-center'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex flex-col md:flex-row items-center md:space-x-8'>
          <div className='flex-1 text-center md:text-left'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold py-4 whitespace-nowrap'>
              Dendritic Learning
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-500'>
              Revolutionize the way you learn
            </p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black'>
              Learn More
            </button>
          </div>
          <div className='w-full max-w-[400px] md:max-w-[600px]'>
            <img src={App} className='w-full h-auto mx-auto' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
