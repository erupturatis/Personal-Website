//@ts-nocheck
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import styles from './projects.module.css';

type Props = {
  widthP: number;
  heightP: number;
};
const WebDev = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    VanillaTilt.init(mainRef.current, {
      max: 25,
      speed: 400,
    });
  }, []);

  return (
    <div className=''>
      <div ref={mainRef} className={` w-96 bg-white h-48 ${styles.parralax} `}>
        <div ref={childRef} className={` w-48 h-24 bg-black ${styles.parralaxChild}`}>
          working?
        </div>
      </div>
    </div>
  );
};

export default WebDev;
