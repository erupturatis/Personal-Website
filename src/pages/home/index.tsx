import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

export async function getStaticProps() {
  return { props: {} };
}

const Hero = dynamic(() => import('@components/home/hero/Hero'));
const Interests = dynamic(() => import('@components/home/interests/Interests'));
const Skills = dynamic(() => import('@components/home/skills/Skills'));
const ButtonsBottom = dynamic(() => import('@components/home/ButtonsBottom'));

const Home = () => {
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
      <Interests />
      <Skills />
      <ButtonsBottom />
    </>
  );
};

export default Home;
