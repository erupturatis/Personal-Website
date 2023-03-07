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
  }, []);
  return (
    <div>
      <div className={` absolute ${windowWidth > 768 ? ' right-40 top-40' : ''} `}>
        {windowWidth !== null ? <>{windowWidth > 768 ? <Husky scale={0.8} /> : <Husky scale={0.5} />}</> : <></>}
      </div>
      <div className=" h-96">ceva</div>
      <div className=" h-96">ceva</div>
      <div className=" h-96">ceva</div>
      <div className=" h-96">ceva</div>
      <div className=" h-96">ceva</div>
      <div className=" h-96">ceva</div>
      <div className=" h-96">ceva</div>
    </div>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default Home;
