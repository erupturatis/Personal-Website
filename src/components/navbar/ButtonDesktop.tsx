import React from 'react';
import Link from 'next/link';
import { Roboto } from 'next/font/google';

import styles from '@styles/home-buttons.module.css';

const roboto300 = Roboto({
  weight: '300',
  subsets: ['latin'],
});

const roboto500 = Roboto({
  weight: '500',
  subsets: ['latin'],
});

type navButtonProps = {
  text: string;
  link: string;
  inverse: boolean;
};

const ButtonDesktop = ({ text, link, inverse }: navButtonProps) => {
  return (
    <Link href={link}>
      <div
        className={` px-6 py-2 mx-8 text-lg first-letter:select-none  cursor-pointer transition-all ${inverse ? roboto500.className : roboto300.className} ${
          inverse
            ? ` bg-white rounded-xl opacity-90 ${styles.inverseButton}  ease-in-500 hover:opacity-100`
            : 'text-white  opacity-80 hover:opacity-100 ease-in-200'
        }`}
      >
        <div>{text}</div>
      </div>
    </Link>
  );
};

export default ButtonDesktop;
