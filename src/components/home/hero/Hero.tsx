import React, { useEffect, useState } from 'react';
import useWindowWidth from '@hooks/useWindowWidth';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import TextHero from '@components/home/hero/TextHero';

const HuskyRenderWrapper = dynamic(
  () => import('@components/home/hero/HuskyRenderWrapper'),
  {
    ssr: false,
  }
);

const Hero = () => {
  const [word, setWord] = useState(true);
  const width = useWindowWidth();
  const [renderHusky, setRenderHusky] = useState(false);
  const [textHero, setTextHero] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTextHero(true);
    }, 100);
    setTimeout(() => {
      setRenderHusky(true);
    }, 200);
  }, []);

  return (
    <>
      <Head>
        <meta
          name='description'
          content='Personal website showcasing projects and portfolio'
        />
      </Head>
      <div className={' absolute w-full h-[600px] top-20'}>
        {textHero && <TextHero />}
        <div
          className={`  ${
            width.current > 1280
              ? 'absolute 2xl:right-40 xl:right-20  top-40  '
              : ' h-[400px] flex justify-center w-full z-0 relative pl-8'
          } `}
        >
          {renderHusky && <HuskyRenderWrapper width={width.current} />}
        </div>
      </div>
    </>
  );
};

export default Hero;
