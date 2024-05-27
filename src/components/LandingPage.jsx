import React from 'react';

const Landing = () => {
  return (
    <div className='text-white h-screen bg-black px-8 py-16 flex items-center justify-center'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex flex-col md:flex-row items-center md:space-x-16'>
          <div className='flex-1 text-center md:text-left'>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
              Dendritic Learning
            </h1>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>
              Revolutionize the way you learn
            </p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black'>
              Learn More
            </button>
          </div>
          <div className='w-full md:w-auto mt-8 md:mt-0'>
            <img src='./LandingImg.png' alt='Landing' className='w-full h-auto max-w-[600px] mx-auto' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
