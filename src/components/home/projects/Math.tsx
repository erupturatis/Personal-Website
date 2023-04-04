import React, { useEffect } from 'react';
import { PhysicsNetwork, centerIdleMovement } from '@typescript/neural';

const Math = () => {
  useEffect(() => {
    // ball physics network
    // @ts-ignore
    let paint = new PhysicsNetwork(document.querySelector('#root-svg-ball'));
    paint.arrangeInCircle({
      neurons: 10,
      radius: 150,
    });
    paint.addFullConnections();
    paint.startRendering({
      infinite: true,
      FPS: 60,
      forceLoss: 0.01,
      forceMultiplier: 0.003,
      addForces: centerIdleMovement,
    });

    return () => {
      paint.stopRendering();
    };
  }, []);

  return (
    <div className=' w-full h-full relative'>
      <div className='w-full flex justify-center'>
        <div className='absolute top-0 w-3/4 flex justify-center text-center  text-opacity-70 font-roboto font-light select-none '>
          I have always been fascinated by math and deeplearning is for me a way to express my passion for math in a more practical way through ai's and neural
          networks!
        </div>
      </div>
      <svg id='root-svg-ball' className='w-full h-full' />
    </div>
  );
};

export default Math;
