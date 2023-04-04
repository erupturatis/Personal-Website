import Floating from './Floating';
import React from 'react';
import { useEffect, useState } from 'react';
import styles from './middle.module.css';

const Middle = () => {
  const [windowWidth, setWindowWidth] = useState<any>(null);
  let doc: HTMLElement | null = null;
  useEffect(() => {
    doc = document.querySelector('html');
    if (doc) {
      setWindowWidth(doc.getBoundingClientRect().width);
    }
    function handleResize() {
      if (!doc) return;
      setWindowWidth(doc.getBoundingClientRect().width);
    }
    window.addEventListener('resize', handleResize);
    console.log('windowWidth', windowWidth);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='relative mb-20'>
      {/* <div id="huskyScrollBottom" className="relative " /> */}
      <div className='w-full mt-10 md:mt-20 mb-32'>
        <div className={` w-full text-center text-white text-xl md:text-3xl ${styles.nameGradient} `}>Some of the skills I have include</div>
        <div className='w-full text-center text-white text-md md:text-2xl opacity-20 font-light md:mt-4'>But are not limited to</div>
      </div>
      {windowWidth < 500 ? <Floating height={300} width={270} baseSize={50} /> : <Floating height={400} width={1000} baseSize={100} />}
    </div>
  );
};

export default Middle;
