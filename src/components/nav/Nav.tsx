import React, { useState, useEffect } from 'react';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';

const Nav = () => {
  let [open, setOpen] = useState(false);
  let [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);

  return <>{mobile ? <NavMobile /> : <NavDesktop />}</>;
};

export default Nav;
