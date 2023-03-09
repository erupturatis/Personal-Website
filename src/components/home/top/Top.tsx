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
    // document.body.style.overflowX = 'hidden';

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
          <div className=" flex justify-center w-full ">
            <div className={`${questrial.className}  w-5/6  text-center opacity-90 mt-6 text-sm md:text-lg  `}>
              I am a passionate developer from europe who is always exploring new technologies and pushing the limits of what's possible
            </div>
          </div>
        </div>
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
      <div className="h-96"></div>
    </div>
  );
};

export default Top;
