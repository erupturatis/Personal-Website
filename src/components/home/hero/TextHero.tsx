import React, { useEffect, useState } from 'react';
import styles from '@styles/hero.module.css';

import { Montserrat, Questrial } from 'next/font/google';

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

const TextHero = () => {
  const [word, setWord] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setWord((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={` w-full flex justify-center xl:mt-72  xl:pl-32 2xl:pl-64 xl:justify-start mb-10 mt-24 text-white text-xl`}
    >
      <div className='w-[350px] md:w-[500px] xl:w-[700px] '>
        <div
          className={
            ` text-center opacity-60  text-sm md:text-xl mb-2 ` +
            montserrat.className
          }
        >
          Hi my name is
        </div>
        <div className=' flex justify-center items-center mt-6 xl:mt-4 '>
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
            className={`${questrial.className}  w-full text-center opacity-90 mt-6 text-sm md:text-2xl`}
          >
            I am a passionate developer from europe who is always exploring new
            technologies and pushing the limits of what's possible
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextHero;
