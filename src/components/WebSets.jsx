import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import webset from '../assets/webset.png';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const WebSets = ({ about }) => {
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
        transition: { delay: 0.2, duration: 0.5 },
        opacity: 1 
      });
    }
  }, [showTitle, titleControls]);

  useEffect(() => {
    if (showParagraphs) {
      paragraphControls.start({ 
        transition: { delay: 0.3, duration: 0.5 },
        opacity: 1 
      });
    }
  }, [showParagraphs, paragraphControls]);

  useEffect(() => {
    if (showImage) {
      imageControls.start({ 
        opacity: 1,
        x: 0,
        transition: { delay: 0.4, duration: 0.5, ease: 'easeInOut' }
      });
    }
  }, [showImage, imageControls]);

  return (
    <div id="about" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid gap-4 md:grid-cols-2">
        <motion.img
          className="w-full max-w-[500px] mx-auto my-4"
          src={webset}
          alt="WebSets"
          initial={{ opacity: 0, x: '-10%' }}
          animate={imageControls}
        />
        <div className="flex flex-col justify-center">
          <motion.p
            className="text-[#00df9a] font-bold"
            style={{ opacity: 0 }}
            animate={titleControls}
          >
            WEB SETS
          </motion.p>
          <motion.h1
            ref={titleRef}
            className="md:text-3xl sm:text-xl leading-5 text-xl font-bold py-2 whitespace-nowrap"
            style={{ opacity: 0 }}
            animate={titleControls}
          >
            Break Away From Linear Learning
          </motion.h1>
          <motion.div
            className="md:text-sm md:leading-8 leading-8 text-xs flex flex-col justify-between"
            style={{ opacity: 0 }}
            animate={paragraphControls}
          >
            <p>
              Dendritic features its very own <strong>Web Sets</strong> allowing users to make
            </p>
            <p>
              connections between various topics, breaking away from the traditional
            </p>
            <p>
              linear learning methods of term and definition flashcards.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WebSets;
