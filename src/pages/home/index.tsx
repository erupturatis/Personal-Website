import React from 'react';
import Top from '@components/home/top/Top';
import Middle from '@components/home/middle/Middle';
import Projects from '@components/home/projects/Projects';
import Bottom from '@components/home/Bottom/Bottom';

const Home = ({}) => {
  return (
    <>
      <Top />
      <Middle />
      <Projects />
      <Bottom />
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default Home;
