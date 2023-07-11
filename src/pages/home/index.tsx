import React from 'react';
import Hero from '@components/home/hero/Hero';

export async function getStaticProps() {
  return { props: {} };
}

const Home = ({}) => {
  return (
    <>
      <Hero />
      {/*<Skills />*/}
    </>
  );
};

export default Home;
