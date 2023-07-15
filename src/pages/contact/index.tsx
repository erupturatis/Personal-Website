import React from 'react';

import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Head from 'next/head';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

type IButtonProps = {
  src: string;
  alt: string;
};
const Button = ({ src, alt }: IButtonProps) => {
  return (
    <button
      className={'transition-all duration-200 hover:translate-y-[-10px] '}
    >
      <div className={'hidden md:block'}>
        <Image src={src} alt={alt} width={75} height={75} />
      </div>
      <div className={'block md:hidden'}>
        <Image src={src} alt={alt} width={50} height={50} />
      </div>
    </button>
  );
};

const Contact = () => {
  const src = '/winter-theme/blueice.jpg';
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='List of ways to contact me' />
      </Head>

      <div className={'w-full mt-40'}>
        <div
          className={
            'w-full text-center text-white  text-4xl ' + montserrat.className
          }
        >
          Contact me
        </div>
        <div className={'w-full flex justify-center mt-10'}>
          <div className={'rounded-full w-48 h-48 md:w-96 md:h-96 '}>
            <Image
              src={src}
              alt='picture of the skill'
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: '100%', borderRadius: '100%' }} // optional
            />
          </div>
        </div>

        <div className={'flex justify-center gap-5 md:gap-10 mt-20'}>
          <Button src='/socials/linkedin.png' alt='linkedin' />
          <Button src='/socials/linkedin.png' alt='linkedin' />
          <Button src='/socials/linkedin.png' alt='linkedin' />
          <Button src='/socials/linkedin.png' alt='linkedin' />
        </div>
      </div>
    </>
  );
};

export default Contact;
