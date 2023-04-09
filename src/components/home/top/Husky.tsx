import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { huskyScript, paramsHuskyScript } from './husky_script';

type HuskyProps = {
  width: any;
};

const Husky = ({ width }: HuskyProps) => {
  // standard size is 800x800
  const [anims, setAnims] = useState<any>([]);
  const [eListener, setEListener] = useState<any>([]);
  const baseSize = useRef(0);

  // for desktop screens
  useLayoutEffect(() => {
    // matches media for 1920 and 1280
    let scale = 1;
    let scrollEyes = true;
    if (width.current > 1280) {
      scrollEyes = false;
      const scale = width.current / 1920;
    } else if (width.current > 500 && width.current < 1280) {
      scale = width.current / 1280;
    } else {
      scale = width.current / 800;
    }
    baseSize.current = 800 * scale;
    const { current: base } = baseSize;

    let params: paramsHuskyScript = {
      leftEyeBaseX: base * 0.088,
      leftEyeBaseY: base * 0.355,
      rightEyeBaseX: base * 0.285,
      rightEyeBaseY: base * 0.358,
      leftEyeCenterOffsetX: base * 0.05,
      leftEyeCenterOffsetY: base * 0.045,
      rightEyeCenterOffsetX: base * 0.05,
      rightEyeCenterOffsetY: base * 0.035,
      scale: scale,
      scrollEyes: scrollEyes,
      baseSize: 800 * scale,
      addInterval: (newInterval: any) => {
        setAnims((interval: any) => {
          let newVec = [...interval];
          newVec.push(newInterval);
          return newVec;
        });
      },
      addEvent: (newEvent: any) => {
        setEListener((eListener: any) => {
          let newVec = [...eListener];
          newVec.push(newEvent);
          return newVec;
        });
      },
    };
    let adjuster = huskyScript.bind(() => {})(params);
  }, []);

  useLayoutEffect(() => {
    return () => {
      for (let e of eListener) {
        document.removeEventListener('mousemove', e);
      }
    };
  }, [eListener]);

  useEffect(() => {
    return () => {
      if (anims.length > 0) {
        for (let int of anims) {
          cancelAnimationFrame(int);
        }
      }
    };
  }, [anims]);
  return (
    <>
      <svg
        id='huskySvg'
        width={(baseSize.current * 2) / 3}
        height={baseSize.current}
      >
        <image
          id='lefteye'
          height={baseSize.current * 0.09}
          x={baseSize.current * 0.088}
          y={baseSize.current * 0.355}
          xlinkHref='/lefteye.webp'
        />
        <image
          id='righteye'
          height={baseSize.current * 0.08}
          x={baseSize.current * 0.285}
          y={baseSize.current * 0.358}
          xlinkHref='/righteye.webp'
        />
        <image height={baseSize.current} xlinkHref='/minihusky.webp' />
      </svg>
    </>
  );
};

export default Husky;
