import React from 'react';
import Skills from '@components/home/skills/Skills';
import Top from '@components/home/hero/Top';

export async function getStaticProps() {
  return { props: {} };
}

const Home = ({}) => {
  return (
    <>
      <Top />
      <Skills />
    </>
  );
};

export default Home;
