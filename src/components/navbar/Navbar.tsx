import React from 'react';
import Mobile from './Mobile';
import Desktop from './Desktop';
import Moon from '@components/navbar/Moon';

const Navbar = () => {
  return (
    <>
      <div className='hidden xl:block'>
        <Desktop />
        <Moon positioning={'left'} />
      </div>
      <div className='xl:hidden'>
        <Mobile />
        <Moon positioning={'center'} />
      </div>
    </>
  );
};

export default Navbar;
