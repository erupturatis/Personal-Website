import React from 'react';
import Canvas from '../top/Canvas';
import WebDev from './webdev/WebDev';
import ProjectSection from './ProjectSection';
import { Montserrat } from 'next/font/google';
import styles from './projects.module.css';
import Math from './Math';
import useWindowWidth from '@hooks/useWindowWidth';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const Projects = () => {
  let doc: HTMLElement | null = null;
  const windowWidth = useWindowWidth();

  const stadardCanvas = (
    <Canvas
      x1={windowWidth.current / 2}
      y1={0}
      x2={windowWidth.current / 2}
      y2={800}
      widthP={windowWidth.current}
      heightP={800}
      accent={0}
      offset={-200}
    />
  );

  return (
    <div className='relative '>
      <div className='w-full flex justify-center'>
        <div className=''>
          <div className='text-center text-white text-lg opacity-50 '>
            And the
          </div>
          <div
            className={` text-white  text-center text-5xl ${montserrat.className} font-semibold my-4`}
          >
            Passions
          </div>
          <div className='text-center text-white text-sm mt-2 opacity-25 mb-4'>
            I use my skills for
          </div>
        </div>
      </div>

      <div className='hidden lg:block'>
        <div className='relative'>{stadardCanvas}</div>

        <ProjectSection
          width={1000}
          height={800}
          text={'Programming'}
          children={<WebDev />}
          grad={styles.webdevGrad}
        />

        <div className='relative'>{stadardCanvas}</div>
        <ProjectSection
          width={800}
          height={500}
          text={'Deep Learning and Mathematics'}
          children={<Math />}
          grad={styles.math}
        />
        <div className='relative'>{stadardCanvas}</div>
      </div>

      <div className='block lg:hidden'>
        <div className='relative'>{stadardCanvas}</div>

        <div className='hidden xl:block'>
          <ProjectSection
            width={1000}
            height={800}
            text={'Programming'}
            children={<WebDev />}
            grad={styles.webdevGrad}
          />
        </div>
        <div className='hidden md:block xl:hidden'>
          <ProjectSection
            width={700}
            height={500}
            text={'Programming'}
            children={<WebDev />}
            grad={styles.webdevGrad}
          />
        </div>
        <div className='block md:hidden'>
          <ProjectSection
            width={500}
            height={500}
            text={'Programming'}
            children={<WebDev />}
            grad={styles.webdevGrad}
          />
        </div>
        <div className='relative'>{stadardCanvas}</div>

        {/*<ProjectSection*/}
        {/*  width={800}*/}
        {/*  height={500}*/}
        {/*  text={'Deep Learning and Mathematics'}*/}
        {/*  children={<Math />}*/}
        {/*  grad={styles.math}*/}
        {/*/>*/}
        <div className='relative'>{stadardCanvas}</div>
      </div>
    </div>
  );
};

export default Projects;
