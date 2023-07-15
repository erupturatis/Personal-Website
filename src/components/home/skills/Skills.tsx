import React from 'react';
import SkillsGroup from '@components/home/skills/SkillsGroup';
import Head from 'next/head';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const Skills = () => {
  const primarySkillsSrc: string[] = [
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
  ];
  const secondarySkillsSrc: string[] = [
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
  ];
  const tertiarySkillsSrc: string[] = [
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
    '/socials/linkedin.png',
  ];

  return (
    <>
      <Head>
        <meta name='description' content='My skills section description' />
      </Head>
      <section className={'mt-36 md:mt-72 mb-6 md:mb-36'}>
        <h2
          className={`text-xl md:text-3xl text-white w-full text-center font-semibold ${montserrat.className}`}
        >
          Some of the skills I have include
        </h2>
        <div className={'mt-4 text-lg text-center font-medium opacity-60'}>
          but are not limited to
        </div>
      </section>
      <div className={'flex flex-col gap-10 px-3'}>
        <SkillsGroup type={'primary'} srcArray={primarySkillsSrc} />
        <SkillsGroup type={'secondary'} srcArray={secondarySkillsSrc} />
        <SkillsGroup type={'tertiary'} srcArray={tertiarySkillsSrc} />
      </div>
    </>
  );
};

export default Skills;
