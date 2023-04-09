//@ts-nocheck
import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import styles from '../projects.module.css';
import Screen from './Screen';
import Console from './Console';
import { WebDevProvider } from './WebContext';

type Props = {
  widthP: number;
  heightP: number;
};
const WebDev = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    VanillaTilt.init(mainRef.current, {
      max: 5,
      speed: 400,
    });
  }, []);

  return (
    <WebDevProvider>
      <div className='md:w-full md:h-full flex justify-center items-center'>
        <div
          ref={mainRef}
          className={` relative w-full h-full  ${styles.parralax} bg-[url("/bgscreen.jpg")] flex justify-center items-end  ${styles.imgprops} `}
        >
          <div className='w-full h-full shadow-standard'>{<Screen />}</div>

          <div
            className={` absolute top-full -mt-20 w-72 h-36 md:w-96 md:h-48 ${styles.parralaxChild75} rounded-2xl `}
          >
            {<Console />}
          </div>
        </div>
      </div>
    </WebDevProvider>
  );
};

export default WebDev;
