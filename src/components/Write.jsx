import React from 'react';
import write from '../assets/write.png';

const Write = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-x-4 md:gap-x-0 md:pr-8 md:pl-8'>
        <img  className='w-full max-w-[500px] my-4 mx-auto md:my-0 md:mx-0 md:order-last'src={write} alt='write'/>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>WRITE</p>
          <h1 className='md:text-3xl sm:text-xl leading-5 text-xl font-bold py-2 whitespace-nowrap'>Build A Mind Muscle Connection</h1>
          <div className='leading-8 text-xs md:text-sm md:leading-8 flex flex-col justify-between'>
            <p>
              Dendritic features a <strong>Write</strong> feature giving users the option
            </p>
            <p>
              to write out their responses, improving retention in subjects
            </p>
            <p>
              and topics that may require more hands-on learning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
