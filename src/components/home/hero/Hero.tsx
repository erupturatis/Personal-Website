import React, { useEffect, useState } from 'react';
import useWindowWidth from '@hooks/useWindowWidth';
import HuskyRenderWrapper from '@components/home/hero/HuskyRenderWrapper';
import TextHero from '@components/home/hero/TextHero';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const HuskyRendererWrapper = dynamic(
  () => import('@components/home/hero/HuskyRenderWrapper')
);

const Hero = () => {
  const [word, setWord] = useState(true);
  const width = useWindowWidth();
  const [renderHusky, setRenderHusky] = useState(false);
  const [textHero, setTextHero] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRenderHusky(false);
    }, 100);
  }, []);

  return (
    <>
      <Head>
        <meta
          name='description'
          content='Personal website showcasing projects and portfolio'
        />
      </Head>
      <div>
        <TextHero />
        <div
          className={`  ${
            width.current > 1280
              ? 'absolute 2xl:right-40 xl:right-20  top-40  '
              : ' flex  justify-center w-full z-0 relative pl-8'
          } `}
        >
          {renderHusky ? (
            <HuskyRenderWrapper width={width.current} />
          ) : (
            <div className={'w-64 h-[500px]'}></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
