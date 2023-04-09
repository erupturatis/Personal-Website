import React, { useEffect, useLayoutEffect, useState } from 'react';
import useWindowWidth from '@hooks/useWindowWidth';
import Husky from './Husky';
import Canvas from './Canvas';
import styles from './top.module.css';

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
  const [word, setWord] = useState(true);
  const width = useWindowWidth();

  useEffect(() => {
    const interval = setInterval(() => {
      setWord((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    console.log('useLayoutEffect', width.current);
  }, []);

  return (
    <div>
      <div
        className={` w-full flex justify-center xl:mt-64  xl:pl-32 2xl:pl-64 xl:justify-start mb-10 mt-24 text-white text-xl`}
      >
        <div className='w-[350px] md:w-[500px] xl:w-[700px] '>
          <div
            className={`${'roboto'} text-center opacity-60  font-light text-sm md:text-base mb-2 `}
          >
            Hi my name is
          </div>
          <div className=' flex justify-center items-center mt-6 xl:mt-10 '>
            <div
              className={` text-center relative pb-2 text-3xl md:text-7xl font-bold`}
            >
              <div className='absolute top-5 w-full flex justify-center'>
                <div
                  className={`h-5 w-full blur-[80px] bg-[#BFF2FF]  ${
                    word ? `opacity-50` : `opacity-0`
                  } ${styles.colorName} ${
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
              className={`${
                montserrat.className
              } relative text-center ml-3 xl:ml-6 text-3xl md:text-7xl font-bold pb-2  ${
                styles.colorName
              } ${!word ? '' : styles.colorNameInactive}`}
            >
              Eugen
            </div>
          </div>
          <div className=' flex relative justify-center w-full '>
            <div
              className={`${questrial.className}  w-5/6  text-center opacity-90 mt-6 text-sm md:text-lg  `}
            >
              I am a passionate developer from europe who is always exploring
              new technologies and pushing the limits of what's possible
            </div>
            {width.current > 1280 ? (
              <div id={'huskyScrollTop'} className='absolute top-0'></div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <>
        <div
          className={`  ${
            width.current > 1280
              ? 'absolute 2xl:right-40 xl:right-20  top-40'
              : ' flex  justify-center w-full z-0 relative pl-8'
          } `}
        >
          {width.current > 0 && (
            <>
              {width.current > 1280 ? (
                <>
                  <Husky width={width} />
                </>
              ) : (
                <div>
                  <Husky width={width} />
                  <div className='relative'>
                    <div id={'huskyScrollTop'} className='absolute top-0'></div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </>
      <div className='w-full h-[800px]'>
        {width.current > 0 && (
          <Canvas
            x1={
              width.current > 1536
                ? 600
                : width.current > 1280
                ? 475
                : width.current / 2
            }
            y1={0}
            x2={width.current / 2}
            y2={800}
            widthP={width.current}
            heightP={800}
            accent={width.current > 1280 ? width.current / 10 : 0}
          />
        )}
      </div>
    </div>
  );
};

export default Top;
