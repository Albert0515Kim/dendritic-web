import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const logoSrc = '/Logo.png';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <img src={logoSrc} className='w-48 h-auto' alt='Dendritic Learning' />
        <p className='py-4'>
          Dendritic Learning is <strong>Made by Students for Students</strong>. We aspire to achieve a study app that is effective, accessible, and engaging for students.
        </p>
        <div className='flex space-x-6 my-6'>
          <a href='https://github.com/Albert0515Kim/dendritic-web' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
            <FaGithubSquare size={30} />  
          </a>
          <a href='https://www.linkedin.com/company/dendriticlearning/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
