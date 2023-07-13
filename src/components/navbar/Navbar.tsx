import React from 'react';
import Mobile from './Mobile';
import Desktop from './Desktop';
import Moon from '@components/navbar/Moon';

const Navbar = () => {
  return (
    <>
      <div className='hidden xl:block'>
        <Desktop />
      </div>
      <div className='xl:hidden'>
        <Mobile />
      </div>
      <Moon positioning={'left'} />
    </>
  );
};

export default Navbar;
