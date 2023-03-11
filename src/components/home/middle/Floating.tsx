import React from 'react';
import styles from './floating.module.css';
import { useState, useEffect } from 'react';

type FloatingProps = {
  numDivs: number;
  height: number;
};

const Floating = ({ numDivs, height }: FloatingProps) => {
  useEffect(() => {
    // generating numDivs divs
    const sWidth = document.querySelector('.FloatingHolder')?.clientWidth;
    function generateDiv(baseSize: number) {
      const div = document.createElement('div');
      let distanceCoefficient = (Math.random() * 0.5 + 0.5) * baseSize;
      distanceCoefficient = Math.floor(distanceCoefficient);
      console.log(distanceCoefficient);
      div.className = `${styles.morphism} absolute  md:w-[${distanceCoefficient}px] md:h-[${distanceCoefficient}px] `;
      div.style.width = `${distanceCoefficient}px`;
      div.style.height = `${distanceCoefficient}px`;
      div.style.borderRadius = `25%`;
      div.style.marginTop = `${Math.random() * height}px`;
      div.style.animationDuration = `${(1 / (distanceCoefficient / baseSize)) * 2.5}s`;
      div.style.zIndex = `${distanceCoefficient}`;
      if (sWidth) {
        div.style.transform = `translateX(${Math.random() * sWidth}px)`;
      }

      const holder = document.querySelector('.FloatingHolder');
      holder?.appendChild(div);
    }

    for (let i = 0; i < numDivs; i++) {
      generateDiv(100);
    }

    return () => {};
  }, []);

  return <div className={` FloatingHolder h-[400px] relative w-full `}></div>;
};

export default Floating;
