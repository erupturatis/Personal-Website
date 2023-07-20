import Image from 'next/image';
import styles from '@styles/hero.module.css';
import React from 'react';

const moonSrc = '/winter-theme/moon.png';
const firstSocialSrc = '/socials/linkdin.png';
const secondSocialSrc = '/socials/gmail.png';
const githubMoonSrc = '/socials/githubmoon.png';

const MoonLeft = () => {
  return (
    <>
      <div
        className={`absolute animate-fade-in top-[-145px] right-[0px] translate-x-[150px] z-20 group pointer-events-auto `}
      >
        <div className={'relative '}>
          <Image
            src={moonSrc}
            alt={'Moon with socials'}
            width={300}
            height={300}
          />
        </div>
        <div
          className={
            'absolute bottom-16 left-16 w-12 h-12 bg-black blur-lg opacity-60'
          }
        />
        <a
          href={'https://github.com/erupturatis'}
          className={'absolute bottom-12 left-12 z-50 pointer-events-auto '}
        >
          <Image
            src={githubMoonSrc}
            alt={'Moon with socials'}
            width={90}
            height={90}
          />
        </a>

        {/*minimoons*/}

        <div
          className={
            'absolute bottom-[-126px] left-[-108px]  w-64 h-64 pointer-events-auto '
          }
        >
          <a
            className={
              'absolute top-28 select-none right-8 w-[100px] h-[100px] opacity-30 transition-all duration-200 group-hover:opacity-100 group-hover:top-32 group-hover:right-10'
            }
            href={'https://www.linkedin.com/in/eugen-barbulescu-33605327b/'}
          >
            <Image
              src={moonSrc}
              alt={'Mini moon with first social'}
              width={75}
              height={75}
            />
            <div className={'absolute bottom-[45px] left-[20px] '}>
              <Image
                src={firstSocialSrc}
                alt={'Mini moon with first social'}
                width={35}
                height={35}
                style={{ borderRadius: '10%' }}
              />
            </div>
          </a>
          <a
            className={
              'absolute top-8 right-28 select-none w-[100px] h-[100px] opacity-30 transition-all duration-200 group-hover:opacity-100 group-hover:top-10 group-hover:right-32'
            }
            href={'mailto:barbulescu.eugeno@gmail.com'}
          >
            <Image
              src={moonSrc}
              alt={'Mini moon with first social'}
              width={75}
              height={75}
            />

            <div className={'absolute bottom-[45px] left-[20px] '}>
              <Image
                src={secondSocialSrc}
                alt={'Mini moon with first social'}
                width={35}
                height={35}
                style={{ borderRadius: '10%' }}
              />
            </div>
          </a>
        </div>
      </div>
      <div
        className={'absolute top-[-200px] right-[-600px]  ' + styles.light}
      />
    </>
  );
};

export default MoonLeft;
