import FloatingSkills from './FloatingSkills';
import React from 'react';
import useWindowWidth from '@hooks/useWindowWidth';

const Skills = () => {
  const windowWidth = useWindowWidth();
  return (
    <div className='relative mb-20'>
      {/* <div id="huskyScrollBottom" className="relative " /> */}
      <div className='w-full mt-10 md:mt-20 mb-32'>
        <div className={` w-full text-center text-white text-xl md:text-3xl  `}>
          Some of the skills I have include
        </div>
        <div className='w-full text-center text-white text-md md:text-2xl opacity-20 font-light md:mt-4'>
          But are not limited to
        </div>
      </div>
      <FloatingSkills />
    </div>
  );
};

export default Skills;
