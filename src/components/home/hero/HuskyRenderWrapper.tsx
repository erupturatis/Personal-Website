import React from 'react';
import Husky from '@components/home/hero/Husky';

type IHuskyRenderWrapperProps = {
  width: number;
};

const HuskyRenderWrapper = ({ width }: IHuskyRenderWrapperProps) => {
  if (width === 0) return null;

  return (
    <div>
      {width > 1280 ? (
        <>
          <Husky width={width} />
        </>
      ) : (
        <div>
          <Husky width={width} />
          <div className='relative'>
            <div id={'huskyScrollTop'} className='absolute top-0'></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HuskyRenderWrapper;
