import React from 'react';
import NavButtonDesktop from './NavButtonDesktop';

const NavDesktop = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-20 z-20 w-full ">
        <NavButtonDesktop inverse={false} text="Home" link="/home" />
        <NavButtonDesktop inverse={true} text="Contact" link="/contact" />
        <NavButtonDesktop inverse={false} text="Projects" link="/projects" />
      </div>
    </div>
  );
};

export default NavDesktop;
