import React, { useState } from 'react';
import useWindowWidth from '@hooks/useWindowWidth';
import HuskyRenderWrapper from '@components/home/hero/HuskyRenderWrapper';
import TextHero from '@components/home/hero/TextHero';

const Hero = () => {
  const [word, setWord] = useState(true);
  const width = useWindowWidth();

  return (
    <div>
      <TextHero />
      <div
        className={`  ${
          width.current > 1280
            ? 'absolute 2xl:right-40 xl:right-20  top-40  '
            : ' flex  justify-center w-full z-0 relative pl-8'
        } `}
      >
        <HuskyRenderWrapper width={width.current} />
      </div>
    </div>
  );
};

export default Hero;
