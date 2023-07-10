import React from 'react';
import ButtonDesktop from './ButtonDesktop';

const Desktop = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-20 z-20 w-full ">
        <ButtonDesktop inverse={false} text="Home" link="/home" />
        <ButtonDesktop inverse={true} text="Contact" link="/contact" />
        <ButtonDesktop inverse={false} text="Projects" link="/projects" />
      </div>
    </div>
  );
};

export default Desktop;
