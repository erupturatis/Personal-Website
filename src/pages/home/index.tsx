// @ts-nocheck
import React from 'react';
import Husky from '@/components/Husky';
import { useState } from 'react';
import { useEffect } from 'react';

const determineScale = () => {
  if (window.innerWidth > 768) {
    return true;
  }
  return false;
};
const Home = ({}) => {
  const [windowWidth, setWindowWidth] = useState(null);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  return (
    <div className="relative w-screen ml-0">
      <div className={`  ${windowWidth > 768 ? 'absolute right-40 top-40' : ' flex justify-center w-full mt-40  z-0 relative'} `}>
        {windowWidth !== null ? <>{windowWidth > 768 ? <Husky scale={1} scrollEyes={false} /> : <Husky scale={0.65} scrollEyes={true} />}</> : <></>}
      </div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
    </div>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default Home;
