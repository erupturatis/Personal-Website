import React from 'react';
import Image from 'next/image';
import styles from '@styles/hero.module.css';

type IMoonProps = {
  positioning: 'center' | 'left';
};

const src = '/winter-theme/moon.png';
const MoonCenter = () => {
  return (
    <>
      <div className={`absolute top-[-145px] right-[-145px] `}>
        <Image src={src} alt={'Moon with socials'} width={300} height={300} />
      </div>
      <div
        className={'absolute top-[-200px] right-[-600px]  ' + styles.light}
      ></div>
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

const MoonLeft = () => {
  return (
    <div className={`w-full flex justify-center `}>
      <div className={'w-[300px] h-[300px] relative'}>
        <div className={'absolute top-[-150px] left-[0px] '}>
          <Image src={src} alt={'Moon with socials'} width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

const Moon = ({ positioning }: IMoonProps) => {
  return (
    <div className={`w-full  h-10 absolute top-0 `}>
      <div className={`${positioning === 'center' ? 'block' : 'hidden'}`}>
        <MoonLeft />
      </div>
      <div className={`${positioning === 'center' ? 'hidden' : 'block'}`}>
        <MoonCenter />
      </div>
    </div>
  );
};

export default Moon;
