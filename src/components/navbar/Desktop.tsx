import React from 'react';
import ButtonDesktop from './ButtonDesktop';
import Icecycle from '@components/navbar/Icecycle';

const Desktop = () => {
  return (
    <div>
      <div className='flex justify-center items-center mt-6 z-20 w-full  gap-20 group '>
        <div className={' flex justify-center gap-16 items-center'}>
          <Icecycle inverse={false} />
          <ButtonDesktop inverse={false} text='Home' link='/home' />
          <ButtonDesktop inverse={true} text='Contact' link='/contact' />
          <ButtonDesktop inverse={false} text='Projects' link='/projects' />
          <Icecycle inverse={true} />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
