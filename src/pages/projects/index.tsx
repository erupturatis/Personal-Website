import React from 'react';
import BigProjectsList from '@components/projects/BigProjectsList';
import SmallProjectsList from '@components/projects/SmallProjectsList';
import Head from 'next/head';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name='description'
          content='List of projects from my portfolio and my contribution to them'
        />
      </Head>

      <section>
        <BigProjectsList />
        <SmallProjectsList />
      </section>
    </>
  );
};

export default Projects;
