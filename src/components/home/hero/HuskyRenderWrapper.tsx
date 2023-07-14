import React from 'react';
import Husky from '@components/home/hero/Husky';
import Head from 'next/head';

type IHuskyRenderWrapperProps = {
  width: number;
};

const HuskyRenderWrapper = ({ width }: IHuskyRenderWrapperProps) => {
  if (width === 0) return null;

  return (
    <>
      <Head>
        <meta
          name='description'
          content='Hero section rendering the husky Head'
        />
        <title>Husky hero section</title>
      </Head>
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
    </>
  );
};

export default HuskyRenderWrapper;
