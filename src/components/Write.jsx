import React from 'react';
import write from '../assets/write.png  ';

const Write = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-x-0 md:pr-8 md:pl-8'>
        <img src={write} alt='write' className='w-[500px] my-4 mx-auto md:order-last'/>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>WRITE</p>
          <h1 className='md:text-3xl sm:text-3xl leading-5 text-2xl font-bold py-2 whitespace-nowrap'>Build A Mind Muscle Connection</h1>
          <div className='leading-8 text-sm flex flex-col justify-between h-[120px]'>
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
