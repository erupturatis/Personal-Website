import React from 'react';
import Mobile from './Mobile';
import Desktop from './Desktop';
import { MoonCenter, MoonLeft } from '@components/navbar/Moon';
import useIsMobile from '@hooks/useIsMobile';

const Navbar = () => {
  const [detected, isMobile] = useIsMobile();

  return (
    <>
      <div className='hidden xl:block'>
        <Desktop />
        <div
          className={`w-full  h-10 absolute top-0 overflow-visible overflow-x-clip `}
        >
          <MoonLeft />
        </div>
      </div>
      <div className='xl:hidden'>
        <Mobile />
        <div
          className={`w-full  h-10 absolute top-0 overflow-visible overflow-x-clip `}
        >
          <MoonCenter />
        </div>
      </div>
    </>
  );
};

export default Navbar;
