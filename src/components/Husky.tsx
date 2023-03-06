import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { huskyScript, paramsHuskyScript } from './husky_script';

type HuskyProps = {
    scale: number;
};

const Husky = ({ scale }: HuskyProps) => {
    // standard size is 800x800
    const baseSize = 800;
    const width = baseSize * scale;
    const height = baseSize * scale;
    let params: paramsHuskyScript = {
        leftEyeBaseX: width * 0.088,
        leftEyeBaseY: height * 0.355,
        rightEyeBaseX: width * 0.285,
        rightEyeBaseY: height * 0.358,
        leftEyeCenterOffsetX: height * 0.05,
        leftEyeCenterOffsetY: height * 0.045,
        rightEyeCenterOffsetX: height * 0.05,
        rightEyeCenterOffsetY: height * 0.035,
        scale: scale,
        scrollEyes: true,
        baseSize: baseSize,
    };
    // for desktop screens
    let adjuster = huskyScript.bind(huskyScript)(params);

    return (
        <>
            <svg width={width} height={height}>
                <image id="lefteye" height={height * 0.09} x={width * 0.088} y={height * 0.355} xlinkHref="/lefteye.png" />
                <image id="righteye" height={height * 0.08} x={width * 0.285} y={height * 0.358} xlinkHref="/righteye.png" />
                <image height={height} xlinkHref="/huskybody.png" />
            </svg>
        </>
    );
};

export default Husky;
