import React from 'react';
import Link from 'next/link';
import { Roboto } from 'next/font/google';

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

const NavButtonDesktop = ({ text, link, inverse }: navButtonProps) => {
  return (
    <div
      className={` px-6 py-2 mx-8 text-lg select-none ${inverse ? roboto500.className : roboto300.className} ${
        inverse ? ' bg-white rounded-xl text-black' : 'text-white'
      }`}
    >
      <div>{text}</div>
    </div>
  );
};

export default NavButtonDesktop;
