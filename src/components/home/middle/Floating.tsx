import React from 'react';
import styles from './floating.module.css';
import anime from 'animejs';
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
      const baseAnimationSpeed = 2500;

      const div = document.createElement('div');
      let distanceCoefficient = (Math.random() * 0.5 + 0.5) * baseSize;
      distanceCoefficient = Math.floor(distanceCoefficient);
      console.log(distanceCoefficient);
      div.className = `${styles.morphism} absolute  md:w-[${distanceCoefficient}px] md:h-[${distanceCoefficient}px] toAnim`;
      div.style.width = `${distanceCoefficient}px`;
      div.style.height = `${distanceCoefficient}px`;
      div.style.borderRadius = `25%`;
      div.style.marginTop = `${Math.random() * height}px`;
      let animationDuration = (1 / (distanceCoefficient / baseSize)) * baseAnimationSpeed; // we divide by 10 to run the animation faster
      div.style.zIndex = `${distanceCoefficient}`;
      let initialX;
      if (sWidth) {
        initialX = Math.random() * sWidth;
        div.style.transform = `translateX(${initialX}px)`;
        let animInitialDuration = (initialX / sWidth) * animationDuration;
        anime({
          targets: div,
          translateX: [initialX, 0],
          duration: animInitialDuration,
          easing: 'linear',
          loop: false,
          complete: () => {
            console.log('completed loop');
            // runs the main animation loop from 0 to Swidth
            anime({
              targets: div,
              translateX: [sWidth, 0],
              duration: animationDuration,
              easing: 'linear',
              loop: true,
            });
          },
        });
      }

      const holder = document.querySelector('.FloatingHolder');
      holder?.appendChild(div);
    }

    for (let i = 0; i < 10; i++) {
      generateDiv(100);
    }

    return () => {};
  }, []);

  useEffect(() => {
    return () => {};
  }, []);

  return <div className={` FloatingHolder h-[400px] relative w-full `}></div>;
};

export default Floating;
