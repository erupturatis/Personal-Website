import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import Husky from './Husky';
type windowWidth = null | number;

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
      <div className="mt-32"></div>
      {windowWidth !== null ? (
        <>
          <div className={`  ${windowWidth > 768 ? 'absolute right-40 top-40' : ' flex justify-center w-full  pl-4  z-0 relative'} `}>
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
