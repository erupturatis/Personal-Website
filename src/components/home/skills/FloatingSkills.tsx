import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from '@styles/skills.module.css';
import anime from 'animejs';
import useWindowWidth from '@hooks/useWindowWidth';

const FloatingSkills = () => {
  const windowWidth = useWindowWidth();
  let width = 0;
  let height = 0;
  let baseSize = 0;

  useLayoutEffect(() => {
    width = windowWidth.current;
    height = 400;
    baseSize = windowWidth ? (windowWidth.current < 500 ? 50 : 100) : 100;
  }, []);

  function shuffle(array: any[]) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const urlRandomizing = () => {
    const skills = [
      'cpp',
      'csharp',
      'python',
      'js',
      'ts',
      'html',
      'css',
      'tailwind',
      'react',
      'nextjs',
      'photoshop',
      'pytorch',
    ];
    return shuffle(
      skills.map((skill) => {
        return `/floatingLogos/${skill}.png`;
      })
    );
  };

  useEffect(() => {
    // generating numDivs divs
    const holder: HTMLDivElement | null =
      document.querySelector('.FloatingHolder');
    if (holder) {
      holder.style.height = `${height}px`;
      holder.style.width = `${width}px`;
    }
    const sWidth = holder?.clientWidth;

    function generateDiv(baseSize: number, url: string) {
      const baseAnimationSpeed = 5000;

      const div = document.createElement('div');
      let distanceCoefficient = (Math.random() * 0.5 + 0.5) * baseSize;
      distanceCoefficient = Math.floor(distanceCoefficient);
      div.className = `${styles.morphism} absolute  md:w-[${distanceCoefficient}px] md:h-[${distanceCoefficient}px] toAnim`;
      div.style.width = `${distanceCoefficient}px`;
      div.style.height = `${distanceCoefficient}px`;
      div.style.borderRadius = `25%`;
      div.style.marginTop = `${
        Math.random() * (height - (baseSize * 4) / 3) + baseSize / 3
      }px`;
      let animationDuration =
        (1 / (distanceCoefficient / baseSize)) * baseAnimationSpeed;
      div.style.zIndex = `${distanceCoefficient}`;
      div.style.backgroundImage = `url('${url}')`;
      div.style.backgroundRepeat = 'no-repeat';
      div.style.backgroundSize = 'cover';
      let initialX;
      if (sWidth) {
        initialX = Math.random() * sWidth;
        div.style.transform = `translateX(${initialX}px)`;
        let animInitialDuration = (initialX / sWidth) * animationDuration;
        anime({
          targets: div,
          translateX: [initialX, -baseSize],
          duration: animInitialDuration,
          easing: 'linear',
          loop: false,
          complete: () => {
            // runs the main animation loop from 0 to Swidth
            anime({
              targets: div,
              translateX: [sWidth, -baseSize],
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

    urlRandomizing().forEach((url) => {
      generateDiv(baseSize, url);
    });

    return () => {};
  }, []);

  const [heightState, setHeight] = useState(height);

  return (
    <>
      <div className='flex w-full justify-center'>
        <div className={` FloatingHolder  relative mb-32 ${styles.mask}`}></div>
      </div>
    </>
  );
};

export default FloatingSkills;
