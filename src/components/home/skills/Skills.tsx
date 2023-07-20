import React, { useState } from 'react';
import SkillsGroup from '@components/home/skills/SkillsGroup';
import Head from 'next/head';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const Skills = () => {
  const [skill, setSkill] = useState('');
  function setSkillToDisplay(skill: string) {
    // trims last 4 characters (the file extension)
    skill = skill.slice(0, -4);
    // cut the string up to the last slash
    skill = skill.slice(skill.lastIndexOf('/') + 1);
    setSkill(skill);
  }
  const primarySkillsSrc: string[] = [
    'javascript.png',
    'typescript.png',
    'react.png',
    'nextjs.png',
    'nodejs.png',
    'html.png',
    'css.png',
    'python.png',
    'astrojs.png',
    'express.png',
    'photoshop.png',
    'figma.png',
  ];
  const secondarySkillsSrc: string[] = [
    'bash.png',
    'Csharp.png',
    'C++.png',
    'd3js.png',
    'git.png',
    'linux.png',
    'mongodb.png',
    'pytorch.png',
    'sql.png',
    'svelte.png',
    'unity.png',
  ];
  const tertiarySkillsSrc: string[] = [
    'animejs.png',
    'framerMotion.png',
    'githubActions.png',
    'jest.png',
    'matplotlib.png',
    'mySql.png',
    'numpy.png',
    'openCv.png',
    'playwright.png',
    'tailwind.png',
    'threejs.png',
    'vhdl.png',
    'vim.png',
    'vite.png',
    'vitest.png',
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
        <div
          className={
            'mt-4 text-white h-10 text-sm md:text-lg text-center font-medium opacity-60'
          }
        >
          {skill}
        </div>
      </section>
      <div className={'flex flex-col gap-10 px-3'}>
        <SkillsGroup
          callback={setSkillToDisplay}
          srcPrefix={'/skills/primary'}
          type={'primary'}
          srcArray={primarySkillsSrc}
        />
        <SkillsGroup
          callback={setSkillToDisplay}
          srcPrefix={'/skills/secondary'}
          type={'secondary'}
          srcArray={secondarySkillsSrc}
        />
        <SkillsGroup
          callback={setSkillToDisplay}
          srcPrefix={'/skills/tertiary'}
          type={'tertiary'}
          srcArray={tertiarySkillsSrc}
        />
      </div>
    </>
  );
};

export default Skills;
