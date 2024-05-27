import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <img src='./dendritic-web/DendriticLearning.png' className='w-48 h-auto' alt='Dendritic Learning' />
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
      <div className='lg:col-span-2 flex justify-center lg:justify-end'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <h6 className='font-bold uppercase pt-2'>Company</h6>
            <ul>
              <li className='py-1'>About</li>
              <li className='py-1'>Careers</li>
              <li className='py-1'>Contact</li>
            </ul>
          </div>
          <div>
            <h6 className='font-bold uppercase pt-2'>Resources</h6>
            <ul>
              <li className='py-1'>Blog</li>
              <li className='py-1'>Help Center</li>
              <li className='py-1'>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
