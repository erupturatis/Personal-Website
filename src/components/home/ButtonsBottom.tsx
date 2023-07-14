import React from 'react';
import Link from 'next/link';

const ButtonsBottom = () => {
  return (
    <div className={'mt-20 flex gap-10 justify-center '}>
      <Link href={'/projects'}>
        <button
          className={
            'w-40 h-14 text-black bg-white text-xl font-semibold rounded-xl transition-all duration-200 hover:text-white hover:bg-transparent border-2 hover:border-white'
          }
        >
          Projects
        </button>
      </Link>
      <Link href={'/contact'}>
        <button
          className={
            'w-40 h-14 text-white bg-transparent text-xl font-semibold rounded-xl transition-all duration-200 hover:text-black hover:bg-white border-2 hover:border-white'
          }
        >
          Contact
        </button>
      </Link>
    </div>
  );
};

export default ButtonsBottom;
