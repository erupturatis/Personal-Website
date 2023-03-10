import React from 'react';
import Top from '@/components/home/top/Top';
import Middle from '@/components/home/middle/Middle';

const Home = ({}) => {
  return (
    <>
      <Top />
      <Middle />
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default Home;
