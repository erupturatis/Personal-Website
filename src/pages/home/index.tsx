import React from 'react';
import Top from '@/components/home/top/Top';

const Home = ({}) => {
  return (
    <>
      <Top />
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default Home;
