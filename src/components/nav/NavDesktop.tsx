import React from 'react';
import NavButton from './NavButton';
const NavDesktop = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <NavButton inverse={false} text="Home" link="/home" mobile={false} />
        <NavButton inverse={false} text="Contact" link="/contact" mobile={false} />
        <NavButton inverse={false} text="Projects" link="/projects" mobile={false} />
      </div>
    </div>
  );
};

export default NavDesktop;
