import React from 'react';
import { useState, useEffect } from 'react';
import Canvas from '../top/Canvas';
import WebDev from './webdev/WebDev';
import ProjectSection from './ProjectSection';
import { Montserrat } from 'next/font/google';
import styles from './projects.module.css';
import Math from './Math';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const Projects = () => {
  const [windowWidth, setWindowWidth] = useState<any>(null);
  const [word, setWord] = useState(true);

  let doc: HTMLElement | null = null;
  useEffect(() => {
    // starts timeout that changes the word
    setTimeout(() => {
      setWord((word) => !word);

      const timeout = setInterval(() => {
        setWord((word) => !word);
      }, 4000);
    }, 1000);
    doc = document.querySelector('html');
    if (doc) {
      setWindowWidth(doc.getBoundingClientRect().width);
    }
    window.addEventListener('resize', () => {
      if (!doc) return;
      setWindowWidth(doc.getBoundingClientRect().width);
    });
  }, []);

  return (
    <div className='relative '>
      <div className='w-full flex justify-center'>
        <div className=''>
          <div className='text-center text-white text-lg opacity-50 '>And the </div>
          <div className={` text-white  text-center text-5xl ${montserrat.className} font-semibold my-4`}>Passions</div>
          <div className='text-center text-white text-sm mt-2 opacity-25 mb-4'>I use my skills for</div>
        </div>
      </div>
      {windowWidth && (
        <>
          {windowWidth > 1280 ? (
            <>
              <div className='relative'>
                <Canvas x1={windowWidth / 2} y1={0} x2={windowWidth / 2} y2={800} widthP={windowWidth} heightP={800} accent={0} offset={-200} />
              </div>

              <ProjectSection width={1000} height={800} text={'Programming'} children={<WebDev />} grad={styles.webdevGrad} />

              <div className='relative'>
                <Canvas x1={windowWidth / 2} y1={0} x2={windowWidth / 2} y2={800} widthP={windowWidth} heightP={800} accent={0} offset={-200} />
              </div>
              <ProjectSection width={800} height={500} text={'Deep Learning and Mathematics'} children={<Math />} grad={styles.math} />
              <div className='relative'>
                <Canvas x1={windowWidth / 2} y1={0} x2={windowWidth / 2} y2={800} widthP={windowWidth} heightP={800} accent={0} offset={-200} />
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export default Projects;
