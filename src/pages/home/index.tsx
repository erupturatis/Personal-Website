import React from 'react';
import Middle from '@components/home/middle/Middle';
import Bottom from '@components/home/Bottom/Bottom';
import dynamic from 'next/dynamic';
import Top from '@components/home/top/Top';

const Projects = dynamic(() => import('@components/home/projects/Projects'), {
  loading: () => <p>Loading...</p>,
});

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
