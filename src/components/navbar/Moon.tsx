import React from 'react';
import Image from 'next/image';
import styles from '@styles/hero.module.css';

type IMoonProps = {
  positioning: 'center' | 'left';
};

const src = '/winter-theme/moon.png';
const MoonLeft = () => {
  return (
    <>
      <div
        className={`absolute top-[-145px] right-[0px] translate-x-[150px]  `}
      >
        <Image src={src} alt={'Moon with socials'} width={300} height={300} />
      </div>
      {/*<div*/}
      {/*  className={'absolute top-[-200px] right-[-600px]  ' + styles.light}*/}
      {/*/>*/}
      <div className={'absolute top-0 right-0  w-64 h-64 group'}>
        <div
          className={
            'absolute top-28 right-8 w-[100px] h-[100px] opacity-30 transition-all duration-200 group-hover:opacity-100 group-hover:top-32 group-hover:right-10'
          }
        >
          <Image
            src={src}
            alt={'Mini moon with first social'}
            width={75}
            height={75}
          />
        </div>
        <div
          className={
            'absolute top-8 right-28 w-[100px] h-[100px] opacity-30 transition-all duration-200 group-hover:opacity-100 group-hover:top-10 group-hover:right-32'
          }
        >
          <Image
            src={src}
            alt={'Mini moon with first social'}
            width={75}
            height={75}
          />
        </div>
      </div>
    </>
  );
};

const MoonCenter = () => {
  return (
    <section className={` relative w-full flex justify-center `}>
      <div className={'w-[150px] h-[150px] relative'}>
        <div className={'absolute top-[-85px] left-[0px] '}>
          <Image src={src} alt={'Moon with socials'} width={150} height={150} />
        </div>
      </div>
      <div className={'absolute top-[-100px] ' + styles.minifiedLight} />
    </section>
  );
};

const Moon = ({ positioning }: IMoonProps) => {
  return (
    <div
      className={`w-full  h-10 absolute top-0 overflow-visible overflow-x-clip `}
    >
      {positioning === 'center' ? <MoonCenter /> : <MoonLeft />}
    </div>
  );
};

export default Moon;
