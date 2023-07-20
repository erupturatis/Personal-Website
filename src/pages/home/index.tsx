import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

export async function getStaticProps() {
  return { props: {} };
}

const Hero = dynamic(() => import('@components/home/hero/Hero'), {
  ssr: false,
});
const Interests = dynamic(
  () => import('@components/home/interests/Interests'),
  {
    ssr: false,
  }
);
const Skills = dynamic(() => import('@components/home/skills/Skills'), {
  ssr: false,
});
const ButtonsBottom = dynamic(() => import('@components/home/ButtonsBottom'), {
  ssr: false,
});

const Home = () => {
  const [loadInterests, setLoadInterests] = useState(false);
  const [loadNotVisible, setLoadNotVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoadInterests(true);
    }, 400);
    setTimeout(() => {
      setLoadNotVisible(true);
    }, 600);
  }, []);

  return (
    <>
      <Head>
        <meta
          name='description'
          content='Personal website showcasing projects and portfolio'
        />
        <title>Home</title>
      </Head>
      <Hero />
      {loadInterests && <Interests />}
      {loadNotVisible && <Skills />}
      {loadNotVisible && <ButtonsBottom />}
    </>
  );
};

export default Home;
