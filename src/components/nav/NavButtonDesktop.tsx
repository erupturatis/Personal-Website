import React from 'react';
import Link from 'next/link';
import { Roboto } from 'next/font/google';

const roboto300 = Roboto({
  weight: '300',
  subsets: ['latin'],
});

const roboto400 = Roboto({
  weight: '400',
  subsets: ['latin'],
});

type navButtonProps = {
  text: string;
  link: string;
  inverse: boolean;
};

const NavButtonDesktop = () => {
  return (
    <div>
      <div></div>
    </div>
  );
};

export default NavButtonDesktop;
