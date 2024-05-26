import React from 'react';

const WebSets = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src='./WebSets.png' alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>WEB SETS</p>
          <h1 className='md:text-3xl sm:text-3xl leading-5 text-2xl font-bold py-2 whitespace-nowrap'>Break Away From Linear Learning</h1>
          <p className='leading-8 text-sm '>
            Dendritic features its very own <strong>Web Sets</strong> allowing users to make
          </p>
          <p className='leading-8 text-sm '>    
            connections between various topics, breaking away from the traditional 
          </p>
          <p className='leading-8 text-sm '>  
            linear learning methods of term and definition flashcards.
          </p> 
        </div>
      </div>
    </div>
  );
};

export default WebSets;
