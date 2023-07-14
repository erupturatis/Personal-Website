import React from 'react';

import { Montserrat } from 'next/font/google';
import Image from 'next/image';

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
      <Image src={src} alt={alt} width={75} height={75} />
    </button>
  );
};

const Contact = () => {
  const src = '/winter-theme/blueice.jpg';
  return (
    <div className={'w-full mt-40'}>
      <div
        className={
          'w-full text-center text-white  text-4xl ' + montserrat.className
        }
      >
        Contact me
      </div>
      <div className={'w-full flex justify-center mt-10'}>
        <div className={'rounded-full w-96 h-96 '}>
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

      <div className={'flex justify-center gap-10 mt-20'}>
        <Button src='/socials/linkedin.png' alt='linkedin' />
        <Button src='/socials/linkedin.png' alt='linkedin' />
        <Button src='/socials/linkedin.png' alt='linkedin' />
        <Button src='/socials/linkedin.png' alt='linkedin' />
      </div>
    </div>
  );
};

export default Contact;
