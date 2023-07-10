import React, { useState, useEffect } from 'react';
import Mobile from './Mobile';
import Desktop from './Desktop';

const Navbar = () => {

  return (
      <>
        <div className='hidden xl:block'>
            <Desktop />
        </div>
        <div className='xl:hidden'>
            <Mobile />
        </div>
      </>
  )
};

export default Navbar;
