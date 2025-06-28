import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import write from '../assets/write.png';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Write = () => {
  const [isVisible, titleRef] = useIntersectionObserver({ threshold: 0.1 });
  const [showTitle, setShowTitle] = useState(false);
  const [showParagraphs, setShowParagraphs] = useState(false);
  const [showImage, setShowImage] = useState(false);
  
  const titleControls = useAnimation();
  const paragraphControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setShowTitle(true), 200);  
      setTimeout(() => setShowParagraphs(true), 400);  
      setTimeout(() => setShowImage(true), 600);  
    }
  }, [isVisible]);

  useEffect(() => {
    if (showTitle) {
      titleControls.start({ 
        transition: { delay: 0.2, duration: 0.4 },
        opacity: 1 
      });
    }
  }, [showTitle, titleControls]);

  useEffect(() => {
    if (showParagraphs) {
      paragraphControls.start({ 
        transition: { delay: 0.3, duration: 0.4 },
        opacity: 1 
      });
    }
  }, [showParagraphs, paragraphControls]);

  useEffect(() => {
    if (showImage) {
      imageControls.start({ 
        opacity: 1,
        x: 0,
        transition: { delay: 0.4, duration: 0.4, ease: 'easeInOut' }
      });
    }
  }, [showImage, imageControls]);

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-x-4 md:gap-x-0 md:pr-12 md:pl-12">
        <motion.img
          className="w-full max-w-[500px] my-4 mx-auto md:my-0 md:mx-0 md:order-last"
          src={write}
          alt="write"
          style={{ opacity: 0, x: '10%' }}
          animate={imageControls}
        />
        <div className="flex flex-col justify-center">
          <motion.p
            className="text-[#00df9a] font-bold"
            style={{ opacity: 0 }}
            animate={titleControls}
          >
            WRITE
          </motion.p>
          <motion.h1
            ref={titleRef}
            className="md:text-3xl sm:text-xl leading-5 text-xl font-bold py-2 whitespace-nowrap"
            style={{ opacity: 0 }}
            animate={titleControls}
          >
            Build A Mind Muscle Connection
          </motion.h1>
          <motion.div
            className="leading-8 text-xs md:text-sm md:leading-8 flex flex-col justify-between"
            style={{ opacity: 0 }}
            animate={paragraphControls}
          >
            <p>
              Dendritic features a <strong>Write</strong> feature giving users the option
            </p>
            <p>
              to write out their responses, improving retention in subjects
            </p>
            <p>
              and topics that may require more hands-on learning
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Write;
