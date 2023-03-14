import React from 'react';
import Top from '@/components/home/top/Top';
import Middle from '@/components/home/middle/Middle';
import Projects from '@/components/home/projects/Projects';

const Home = ({}) => {
  return (
    <>
      <Top />
      <Middle />
      {/* <Projects /> */}
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default Home;
