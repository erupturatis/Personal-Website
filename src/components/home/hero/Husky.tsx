import React, { useEffect, useLayoutEffect, useReducer, useRef } from 'react';
import { HuskyObject, IParamsHuskyScript } from './husky-script';

type IHuskyProps = {
  width: number;
};

type IState = {
  eventListeners: any[];
  animationFrames: any[];
};

const initialState = {
  eventListeners: [],
  animationFrames: [],
};

const reducer = (
  state: IState,
  action: { type: string; payload: any }
): IState => {
  switch (action.type) {
    case 'ADD_LISTENER':
      return {
        ...state,
        eventListeners: [...state.eventListeners, action.payload],
      };
    case 'ADD_ANIMATION':
      return {
        ...state,
        animationFrames: [...state.animationFrames, action.payload],
      };
    default:
      return state;
  }
};

const Husky = ({ width }: IHuskyProps) => {
  // standard size is 800x800
  const baseSize = useRef(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  // keeps track of event listeners and intervals sed in the husky
  const addAnimation = (newAnimation: any) => {
    dispatch({ type: 'ADD_ANIMATION', payload: newAnimation });
  };
  const addEvent = (newEvent: any) => {
    dispatch({ type: 'ADD_LISTENER', payload: newEvent });
  };

  useEffect(() => {}, [state]);
  // for desktop screens
  useEffect(() => {
    const scale = // scale ratios for the husky
      width > 1280 ? width / 1920 : width > 500 ? width / 1280 : width / 800;
    const scrollEyes = width < 1280;
    baseSize.current = 800 * scale;
    const { current: base } = baseSize;

    const params: IParamsHuskyScript = {
      // rations for the eye placement on the huskies face
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
      addEvent,
      addAnimation,
    };
    console.log('new use effect ran');
    const husky = new HuskyObject(params);
  }, []);

  useLayoutEffect(() => {
    // console.log(state, 'state update');
    return () => {
      // console.log(state, 'cleanup state');
      for (let event of state.eventListeners) {
        document.removeEventListener('mousemove', event);
      }
      if (!state.animationFrames.length) return;
      for (let animationInterrupt of state.animationFrames) {
        animationInterrupt();
      }
    };
  }, [state]);

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
