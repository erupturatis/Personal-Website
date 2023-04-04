//@ts-nocheck
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
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
  const childRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    VanillaTilt.init(mainRef.current, {
      max: 5,
      speed: 400,
    });
  }, []);

  return (
    <WebDevProvider>
      <div className='w-full flex justify-center items-center'>
        <div
          ref={mainRef}
          className={` relative md:w-full h-[600px] ${styles.parralax} bg-[url("/bgscreen.jpg")] flex justify-center items-end  ${styles.imgprops} `}
        >
          <div className='w-full h-full shadow-standard'>
            <Screen />
          </div>

          <div className={` absolute top-full -mt-20 w-96 h-48 ${styles.parralaxChild75} rounded-2xl `}>
            <Console />
          </div>
        </div>
      </div>
    </WebDevProvider>
  );
};

export default WebDev;
