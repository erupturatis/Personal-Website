import React, { useEffect, useState } from 'react';
import Mobile from './Mobile';
import Desktop from './Desktop';
import useIsMobile from '@hooks/useIsMobile';
import dynamic from 'next/dynamic';

const MoonLeft = dynamic(() => import('@components/navbar/MoonLeft'), {
  ssr: false,
});

const MoonCenter = dynamic(() => import('@components/navbar/MoonCenter'), {
  ssr: false,
});

const Navbar = () => {
  const [detected, isMobile] = useIsMobile();

  const [loadMoon, setLoadMoon] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoadMoon(true);
    }, 250);
  }, []);

  return (
    <>
      <div className='hidden xl:block'>
        <Desktop />
        <div
          className={`w-full  h-10 absolute top-0 overflow-visible overflow-x-clip `}
        >
          {loadMoon && !isMobile && <MoonLeft />}
        </div>
      </div>
      <div className='xl:hidden'>
        <Mobile />
        <div
          className={`w-full  h-10 absolute top-0 overflow-visible overflow-x-clip `}
        >
          {loadMoon && isMobile && <MoonCenter />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
