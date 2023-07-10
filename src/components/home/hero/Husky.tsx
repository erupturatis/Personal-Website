import React, { useEffect, useReducer, useRef } from 'react';
import { huskyScript, paramsHuskyScript } from './husky-script';

type IHuskyProps = {
  width: number;
};

type IState = {
  eventListeners: any[];
  intervals: any[];
};

const initialState = {
  eventListeners: [],
  intervals: [],
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
      return { ...state, intervals: [...state.intervals, action.payload] };
    default:
      return state;
  }
};

const Husky = ({ width }: IHuskyProps) => {
  // standard size is 800x800
  const baseSize = useRef(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  // keeps track of event listeners and intervals sed in the husky
  const addInterval = (newInterval: any) => {
    dispatch({ type: 'ADD_ANIMATION', payload: newInterval });
  };
  const addEvent = (newEvent: any) => {
    dispatch({ type: 'ADD_LISTENER', payload: newEvent });
  };
  // for desktop screens
  useEffect(() => {
    const scale = // scale ratios for the husky
      width > 1280 ? width / 1920 : width > 500 ? width / 1280 : width / 800;
    const scrollEyes = width > 1280;
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
      addEvent,
      addInterval,
    };
    let adjuster = huskyScript.bind(() => {})(params);
  }, []);

  useEffect(() => {
    return () => {
      for (let event of state.eventListeners) {
        document.removeEventListener('mousemove', event);
      }
      if (!state.intervals.length) return;
      for (let intervals of state.intervals) {
        cancelAnimationFrame(intervals);
      }
    };
  }, []);

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
