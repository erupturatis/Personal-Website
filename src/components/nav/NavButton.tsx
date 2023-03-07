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
  mobile: boolean;
};

const NavButton = ({ inverse, text, link, mobile }: navButtonProps) => {
  return (
    <Link href={link}>
      <div className={`${mobile ? 'w-full ' : ''} flex justify-center items-center  my-8  md:mt-4 md:mb-4 md:mr-10 md:ml-10 `}>
        <div
          className={` ${!inverse ? roboto300.className : roboto400.className}  text-white font-light text-xl${
            mobile ? ` bg-transparent text-white pr-4 pl-4 pt-2 pb-2 rounded-lg` : ''
          } `}
        >
          {text}
        </div>
      </div>
    </Link>
  );
};

export default NavButton;
