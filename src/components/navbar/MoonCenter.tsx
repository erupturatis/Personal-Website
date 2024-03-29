import Image from 'next/image';
import styles from '@styles/hero.module.css';
import React, { useRef } from 'react';
import { startFadeIn } from '@typescript/misc';

const moonSrc = '/winter-theme/moon.png';
const MoonCenter = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section
      className={` relative animate-fade-in w-full flex justify-center `}
    >
      <div className={'w-[150px] h-[150px] relative'}>
        <div className={'absolute top-[-85px] left-[0px] '}>
          <Image
            src={moonSrc}
            alt={'Moon with socials'}
            width={150}
            height={150}
            onLoad={() => {
              startFadeIn(ref);
            }}
          />
        </div>
      </div>
      <div className={'absolute top-[-100px] ' + styles.minifiedLight} />
    </section>
  );
};

export default MoonCenter;
