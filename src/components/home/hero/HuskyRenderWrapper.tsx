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
      </Head>
      <div>
        {width > 1280 ? (
          <>
            <Husky width={width} />
          </>
        ) : (
          <div>
            <Husky width={width} />
          </div>
        )}
      </div>
    </>
  );
};

export default HuskyRenderWrapper;
