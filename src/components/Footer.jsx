import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <img src='./DendriticLearning.png' className='aspect-auto w-48'/>
        <p className='py-4'>Dendritic Learning is <strong>Made by Students for Students</strong> we aspire to achieve a study app that is effective, accessible, and engaging for students</p>
        <div className='flex justify-start md:w-[75%] my-6'>
            <FaGithubSquare size={30} style={{ marginRight: '10px' }} />
            <FaLinkedin size={30} style={{ marginLeft: '10px' }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
