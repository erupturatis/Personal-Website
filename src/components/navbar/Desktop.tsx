import React from 'react';
import ButtonDesktop from './ButtonDesktop';
import Icecycle from '@components/navbar/Icecycle';

const Desktop = () => {
  return (
    <div>
      <div className='flex justify-center items-center h-20 z-20 w-full gap-20 group '>
        <Icecycle inverse={false} />
        <ButtonDesktop inverse={false} text='Home' link='/home' />
        <ButtonDesktop inverse={true} text='Contact' link='/contact' />
        <ButtonDesktop inverse={false} text='Projects' link='/projects' />
        <Icecycle inverse={true} />
      </div>
    </div>
  );
};

export default Desktop;
