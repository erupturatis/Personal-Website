import React from 'react';
import Link from 'next/link';
import { Kanit } from 'next/font/google';

const kanit = Kanit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-kanit',
});

type navButtonProps = {
  text: string;
  link: string;
  inverse: boolean;
};

const ButtonDesktop = ({ text, link }: navButtonProps) => {
  return (
    <Link href={link}>
      <div
        className={` ${kanit.className} py-2 text-xl first-letter:select-none  cursor-pointer transition-all text-white  opacity-80 hover:opacity-100 ease-in-200`}
      >
        <div>{text}</div>
      </div>
    </Link>
  );
};

export default ButtonDesktop;
