import React from 'react';

const Write = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>WRITE</p>
          <h1 className='md:text-3xl sm:text-3xl leading-5 text-2xl font-bold py-2 whitespace-nowrap'>Build A Mind Muscle Connection</h1>
          <p className='leading-8 text-sm '>
            Dendritic features a <strong>Write</strong> feature giving users the option</p>
          <p className='leading-8 text-sm '>    
            to write out their responses, improving retention in subjects</p>
          <p className='leading-8 text-sm '>  
            and topics that may require more hands-on learning</p> 
        </div>
        <img className='w-[500px] mx-auto my-4' src='./WebSets.png' alt='/' />
      </div>
    </div>
  );
};

export default Write;
