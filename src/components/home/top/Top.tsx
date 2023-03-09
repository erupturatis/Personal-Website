import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Husky from './Husky';
import './top.module.css';

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
        <div className="w-[350px] xl:w-[700px] ">
          <div className={`${roboto.className} text-center opacity-60  font-light text-sm md:text-base mb-2 `}>Hi my name is</div>
          <div className=" flex justify-center items-center mt-6 xl:mt-10 ">
            <div className={`${montserrat.className} text-center text-2xl md:text-7xl font-bold transition-all ease-in-500 ${word ? '' : ''}`}>Barbulescu</div>
            <div className={`${montserrat.className} text-center ml-3 xl:ml-6   text-2xl md:text-7xl font-bold  transition-all ease-in-500`}>Eugen</div>
          </div>
          <div className=" flex justify-center ">
            <div className={`${questrial.className}  w-5/6  text-center opacity-90 mt-6 text-base md:text-lg   `}>
              I am a passionate developer from europe who is always exploring new technologies and pushing the limits of what's possible
            </div>
          </div>
        </div>
      </div>

      {windowWidth !== null ? (
        <>
          <div className={`  ${windowWidth > 1280 ? 'absolute 2x:right-40 xl:right-20  top-40' : ' flex  justify-center w-full  pl-4  z-0 relative'} `}>
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
