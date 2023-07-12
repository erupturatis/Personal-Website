import React from 'react';
import Image from 'next/image';

type IcecycleProps = {
  inverse: boolean;
};
const Icecycle = ({ inverse }: IcecycleProps) => {
  const src = '/winter-theme/icecycle.png';
  return (
    <div className={'w-[100px] relative'}>
      <div
        className={`absolute top-[-5px] w-full transition-all duration-300 ${
          inverse ? 'rotate-180' : 'rotate-0'
        } ${
          inverse ? 'right-0 group-hover:right-8' : 'left-0 group-hover:left-8'
        }
        opacity-25 group-hover:opacity-100 
        `}
      >
        <Image
          src={src}
          alt={'winter Themed icecycle in navbar'}
          width={'100'}
          height={'100'}
        />
      </div>
    </div>
  );
};

export default Icecycle;
