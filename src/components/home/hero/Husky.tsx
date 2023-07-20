import React, { useEffect, useReducer, useRef, useState } from 'react';

type IParamsHuskyScript = {
  leftEyeBaseX: number;
  leftEyeBaseY: number;
  rightEyeBaseX: number;
  rightEyeBaseY: number;
  leftEyeCenterOffsetX: number;
  leftEyeCenterOffsetY: number;
  rightEyeCenterOffsetX: number;
  rightEyeCenterOffsetY: number;
  scale: number;
  addAnimation: (newAnimation: any) => void; // used to clear all intervals on exiting the page
  addEvent: (newEvent: any) => void; // used to clear all event listeners on exiting the page
  scrollEyes: boolean;
  baseSize: number;
  count?: number;
};

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
  const [triggerRender, setTriggerRender] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  // keeps track of event listeners and intervals sed in the husky
  const addAnimation = (newAnimation: any) => {
    dispatch({ type: 'ADD_ANIMATION', payload: newAnimation });
  };
  const addEvent = (newEvent: any) => {
    dispatch({ type: 'ADD_LISTENER', payload: newEvent });
  };

  function addEyeFollowingBehavior(boundedWidth: number, scale: number) {
    // dynamic imports, don't overload initial page load
    import('@typescript/husky/husky-script').then(({ HuskyObject }) => {
      const scrollEyes = boundedWidth < 1280;
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
      new HuskyObject(params);
    });
  }
  // for desktop screens
  useEffect(() => {
    const boundedWidth = width > 1920 ? 1920 : width;
    const scale = // scale ratios for the husky
      boundedWidth > 1280
        ? boundedWidth / 1920
        : boundedWidth > 500
        ? boundedWidth / 1280
        : boundedWidth / 800;
    const scrollEyes = boundedWidth < 1280;
    baseSize.current = 800 * scale;
    setTriggerRender((prev) => !prev);

    console.log('base size is 800');

    setTimeout(() => {
      addEyeFollowingBehavior(boundedWidth, scale);
    }, 200);
  }, []);

  useEffect(() => {
    return () => {
      for (let event of state.eventListeners) {
        document.removeEventListener('mousemove', event);
      }
      if (!state.animationFrames.length) return;
      for (let animationInterrupt of state.animationFrames) {
        animationInterrupt();
      }
    };
  }, [state]);

  const leftEyePath = '/husky/lefteye.webp';
  const rightEyePath = '/husky/righteye.webp';
  const huskyPath = '/husky/minihusky.webp';

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
          xlinkHref={leftEyePath}
        />
        <image
          id='righteye'
          height={baseSize.current * 0.08}
          x={baseSize.current * 0.285}
          y={baseSize.current * 0.358}
          xlinkHref={rightEyePath}
        />
        <image height={baseSize.current} xlinkHref={huskyPath} />
      </svg>
    </>
  );
};

export default Husky;
