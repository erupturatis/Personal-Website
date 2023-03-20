import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Husky from './Husky';
import Canvas from './Canvas';
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
      // setWindowWidth(window.innerWidth);
      if (!doc) return;
      setWindowWidth(doc.getBoundingClientRect().width);
    });
  }, []);

  return (
    <div>
      <div className={` w-full flex justify-center xl:mt-64  xl:pl-32 2xl:pl-64 xl:justify-start mb-10 mt-24 text-white text-xl`}>
        <div className="w-[350px] md:w-[500px] xl:w-[700px] ">
          <div className={`${'roboto'} text-center opacity-60  font-light text-sm md:text-base mb-2 `}>Hi my name is</div>
          <div className=" flex justify-center items-center mt-6 xl:mt-10 ">
            <div className={` text-center relative pb-2 text-3xl md:text-7xl font-bold`}>
              <div className="absolute top-5 w-full flex justify-center">
                <div
                  className={`h-5 w-full blur-[80px] bg-[#BFF2FF]  ${word ? `opacity-50` : `opacity-0`} ${styles.colorName} ${
                    word ? '' : styles.colorNameInactive
                  }  `}
                ></div>
              </div>
              <div
                className={`${montserrat.className}
              ${styles.colorName} ${word ? '' : styles.colorNameInactive}
              `}
              >
                Barbulescu
              </div>
            </div>
            <div
              className={`${montserrat.className} relative text-center ml-3 xl:ml-6 text-3xl md:text-7xl font-bold pb-2  ${styles.colorName} ${
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
            {windowWidth && windowWidth > 1280 ? <div id={'huskyScrollTop'} className="absolute top-0"></div> : <></>}
          </div>
        </div>
      </div>
      {windowWidth !== null ? (
        <>
          <div className={`  ${windowWidth > 1280 ? 'absolute 2x:right-40 xl:right-20  top-40' : ' flex  justify-center w-full   z-0 relative'} `}>
            {windowWidth > 1280 ? (
              <>{/* <Husky scale={windowWidth / 1920} scrollEyes={false} /> */}</>
            ) : (
              <div>
                {/* <Husky scale={windowWidth < 500 ? windowWidth / 800 : windowWidth / 1280} scrollEyes={true} /> */}
                <div className="relative">{/* <div id={'huskyScrollTop'} className="absolute top-0"></div> */}</div>
              </div>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="w-full h-[800px]">
        {windowWidth !== null && (
          <>
            {/* <Canvas
              x1={windowWidth > 1536 ? 600 : windowWidth > 1280 ? 475 : windowWidth / 2}
              y1={0}
              x2={windowWidth / 2}
              y2={800}
              widthP={windowWidth}
              heightP={800}
              accent={windowWidth > 1280 ? windowWidth / 10 : 0}
            /> */}
          </>
        )}
      </div>
    </div>
  );
};

export default Top;
