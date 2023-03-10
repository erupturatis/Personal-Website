import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Husky from './Husky';
import styles from './top.module.css';

type windowWidth = null | number;

import { Montserrat, Questrial, Roboto } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const questrial = Questrial({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-questrial',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const Top = () => {
  const [windowWidth, setWindowWidth] = useState<windowWidth>(null);
  const [word, setWord] = useState(true);

  useEffect(() => {
    // starts timeout that changes the word
    setTimeout(() => {
      setWord((word) => !word);

      const timeout = setInterval(() => {
        setWord((word) => !word);
      }, 4000);
    }, 1000);

    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    // adds event listener for scroll

    // keeping values of elements with ids huskyScrollTop and huskyScrollBottom
    const huskyScrollTop = document.getElementById('huskyScrollTop');
    const huskyScrollBottom = document.getElementById('huskyScrollBottom');
    let huskyScrollTopY: number;
    let huskyScrollBottomY: number;

    if (huskyScrollTop && huskyScrollBottom) {
      console.log('got gere');
      const huskyScrollTopRect = huskyScrollTop.getBoundingClientRect();
      huskyScrollTopY = huskyScrollTopRect?.y + window.scrollY;
      const huskyScrollBottomRect = huskyScrollBottom.getBoundingClientRect();
      huskyScrollBottomY = huskyScrollBottomRect?.y + window.scrollY;
    }

    const handleScroll = (topY: number, bottomY: number, lineID: string) => {
      const scroll = window.scrollY + (window.innerHeight * 1) / 2;
      // getting element with id huskyScrollTop absolute coordinates
      const line = document.getElementById(lineID);
      console.log(line, lineID);
      if (line && scroll > topY && scroll < bottomY) {
        line.style.strokeDashoffset = `${(100 - ((scroll - topY) / (bottomY - topY)) * 100) * 2}%`;
        console.log(line.style.strokeDashoffset);
      }
    };
    window.addEventListener('scroll', () => {
      handleScroll(huskyScrollTopY, huskyScrollBottomY, 'huskyLine');
    });

    return () => {};
  }, []);

  return (
    <div>
      <div className={` w-full flex justify-center xl:mt-64  xl:pl-32 2xl:pl-64 xl:justify-start mb-10 mt-24 text-white text-xl`}>
        <div className="w-[350px] md:w-[500px] xl:w-[700px] ">
          <div className={`${roboto.className} text-center opacity-60  font-light text-sm md:text-base mb-2 `}>Hi my name is</div>
          <div className=" flex justify-center items-center mt-6 xl:mt-10 ">
            <div
              className={`${montserrat.className} text-center relative pb-2 text-2xl md:text-7xl font-bold  ${styles.colorName} ${
                word ? '' : styles.colorNameInactive
              }`}
            >
              <div className="absolute top-5 w-full flex justify-center">
                <div
                  className={`h-5 w-full blur-[80px] bg-[#BFF2FF]  ${word ? `opacity-50` : `opacity-0`} ${styles.colorName} ${
                    word ? '' : styles.colorNameInactive
                  }  `}
                ></div>
              </div>
              Barbulescu
            </div>
            <div
              className={`${montserrat.className} relative text-center ml-3 xl:ml-6 text-2xl md:text-7xl font-bold pb-2  ${styles.colorName} ${
                !word ? '' : styles.colorNameInactive
              }`}
            >
              Eugen
            </div>
          </div>
          <div className=" flex relative justify-center w-full ">
            <div className={`${questrial.className}  w-5/6  text-center opacity-90 mt-6 text-sm md:text-lg  `}>
              I am a passionate developer from europe who is always exploring new technologies and pushing the limits of what's possible
            </div>
            <div id={'huskyScrollTop'} className="absolute top-0"></div>
          </div>
        </div>
      </div>

      <div className=" pl-50% h-[1000px] border-2 border-white">
        <svg width="500" height="1100" viewBox="0 0 600 1098" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="huskyLine"
            d="M1 0C1 196 122.35 452.332 226.214 545.5C441.147 738.3 496.293 993.5 497 1097"
            strokeDasharray={'200%'}
            strokeDashoffset={'0%'}
            stroke="url(#paint0_linear_96_9)"
          />
          <defs>
            <linearGradient id="paint0_linear_96_9" x1="249" y1="0" x2="249" y2="1097" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0" />
              <stop offset="0.546875" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {windowWidth !== null ? (
        <>
          <div className={`  ${windowWidth > 1280 ? 'absolute 2x:right-40 xl:right-20  top-40' : ' flex  justify-center w-full   z-0 relative'} `}>
            {windowWidth > 1280 ? (
              <Husky scale={windowWidth / 1920} scrollEyes={false} />
            ) : (
              <Husky scale={windowWidth < 500 ? windowWidth / 800 : windowWidth / 1280} scrollEyes={true} />
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Top;
