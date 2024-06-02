import React from 'react';
import webset from '../assets/webset.png';

const WebSets = ({ about }) => {
  return (
    <div id="about" className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid gap-4 md:grid-cols-2'>
        <img className='w-full max-w-[500px] mx-auto my-4' src={webset} alt='WebSets' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>WEB SETS</p>
          <h1 className='md:text-3xl sm:text-xl leading-5 text-xl font-bold py-2 whitespace-nowrap'>Break Away From Linear Learning</h1>
          <div className='md:text-sm md:leading-8 leading-8 text-xs flex flex-col justify-between'>
            <p>
              Dendritic features its very own <strong>Web Sets</strong> allowing users to make
            </p>
            <p>
              connections between various topics, breaking away from the traditional
            </p>
            <p>
              linear learning methods of term and definition flashcards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebSets;
