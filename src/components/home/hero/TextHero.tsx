import React, { useEffect, useState } from 'react';
import Head from 'next/head';
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
    <>
      <Head>
        <meta
          name='description'
          content='Hi, this is my personal website description, I am a passionate developer from Europe'
        />
      </Head>
      <section
        className={`w-full flex justify-center xl:mt-72 xl:pl-32 2xl:pl-64 xl:justify-start mb-10 mt-24 text-white text-xl`}
      >
        <div className={`w-[350px] md:w-[500px] xl:w-[700px]`}>
          <h2
            className={`text-center opacity-60 text-sm md:text-xl mb-2 ${montserrat.className}`}
          >
            Hi my name is
          </h2>
          <div className={`flex justify-center items-center mt-6 xl:mt-4`}>
            <div
              className={`text-center relative pb-2 text-3xl md:text-7xl font-bold`}
            >
              <h1
                className={`${montserrat.className} ${styles.colorName} ${
                  word ? '' : styles.colorNameInactive
                }`}
              >
                Barbulescu
              </h1>
            </div>
            <h1
              className={`ml-3 xl:ml-6 ${
                montserrat.className
              } relative text-center text-3xl md:text-7xl font-bold pb-2 ${
                styles.colorName
              } ${!word ? '' : styles.colorNameInactive}`}
            >
              Eugen
            </h1>
          </div>
          <div className={`flex relative justify-center w-full`}>
            <p
              className={`${questrial.className} w-full text-center opacity-90 px-2 xl:px-0 mt-6 text-sm md:text-2xl`}
            >
              I am a passionate developer from Europe who is always exploring
              new technologies and pushing the limits of what's possible.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TextHero;
