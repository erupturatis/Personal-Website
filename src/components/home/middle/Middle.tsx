import Floating from './Floating';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './middle.module.css';

const Middle = () => {
  return (
    <div className="relative">
      <div id="huskyScrollBottom" className="relative " />
      <div className="w-full mt-10 md:mt-20">
        <div className={` w-full text-center text-white text-xl md:text-3xl ${styles.nameGradient} `}>Some of the skills I have include</div>
        <div className="w-full text-center text-white text-md md:text-2xl opacity-20 font-light md:mt-4">But are not limited to</div>
      </div>
      <Floating numDivs={10} height={400} />
      <div className="h-96"></div>
    </div>
  );
};

export default Middle;
