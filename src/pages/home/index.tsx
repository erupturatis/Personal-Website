import React from 'react';
import Head from 'next/head';
import Hero from '@components/home/hero/Hero';
import Interests from '@components/home/interests/Interests';
import Skills from '@components/home/skills/Skills';
import ButtonsBottom from '@components/home/ButtonsBottom';

export async function getStaticProps() {
  return { props: {} };
}

const Home = () => {
  return (
    <>
      <Head>
        <title>Eugen Barbulescu</title>
        <meta
          name='description'
          content='Personal website showcasing projects and portfolio'
        />
      </Head>
      <Hero />
      <Interests />
      <Skills />
      <ButtonsBottom />
    </>
  );
};

export default Home;
