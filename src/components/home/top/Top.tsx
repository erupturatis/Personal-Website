import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Husky from './Husky';
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
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <div>
      <div className={` w-full  flex  justify-center md:mt-64  md:ml-64  md:justify-start mb-10 mt-24 text-white text-xl`}>
        <div className="w-[350px] md:w-[700px] ">
          <div className={`${roboto.className} text-center opacity-60  font-light text-base `}>Hi my name is</div>
          <div className=" flex justify-center items-center mt-6 md:mt-10 ">
            <div className={`${montserrat.className} text-center text-3xl md:text-6xl font-bold`}>Barbulescu</div>
            <div className={`${montserrat.className} text-center ml-3 md:ml-6   text-3xl md:text-6xl font-bold`}>Eugen</div>
          </div>
          <div className={`${questrial.className} text-center opacity-90 mt-6 text-lg`}>
            I am a passionate developer from europe who is always exploring new technologies and pushing the limits of what's possible
          </div>
        </div>
      </div>
      {windowWidth !== null ? (
        <>
          <div className={`  ${windowWidth > 768 ? 'absolute right-40 top-40' : ' flex  justify-center w-full  pl-4  z-0 relative'} `}>
            {windowWidth > 768 ? <Husky scale={windowWidth / 1920} scrollEyes={false} /> : <Husky scale={0.65} scrollEyes={true} />}
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
