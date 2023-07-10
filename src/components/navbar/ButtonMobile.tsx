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
  openNav: () => void;
};

const ButtonMobile = ({ text, link, openNav }: navButtonProps) => {
  return (
    <div>
      <Link
        href={link}
        onClick={() => {
          openNav();
        }}
      >
        <div className={`w-32 flex justify-center items-center  my-8  md:mt-4 md:mb-4 md:mr-10 md:ml-10 `}>
          <div className={`text-white  font-light text-xl bg-transparent pr-4 pl-4 pt-2 pb-2 rounded-lg `}>{text}</div>
        </div>
      </Link>
    </div>
  );
};

export default ButtonMobile;
