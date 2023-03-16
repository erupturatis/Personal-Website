import React from 'react';
import { useState, useEffect } from 'react';
import Canvas from '../top/Canvas';
import WebDev from './WebDev';
import ProjectSection from './ProjectSection';

const Projects = () => {
  const [windowWidth, setWindowWidth] = useState<any>(null);
  const [word, setWord] = useState(true);

  let doc: HTMLElement | null = null;
  useEffect(() => {
    // starts timeout that changes the word
    setTimeout(() => {
      setWord((word) => !word);

      const timeout = setInterval(() => {
        setWord((word) => !word);
      }, 4000);
    }, 1000);
    doc = document.querySelector('html');
    if (doc) {
      setWindowWidth(doc.getBoundingClientRect().width);
    }
    window.addEventListener('resize', () => {
      // setWindowWidth(window.innerWidth);
      if (!doc) return;
      setWindowWidth(doc.getBoundingClientRect().width);
    });
  }, []);

  return (
    <div className="relative">
      <div className="w-full flex justify-center">
        <div className="border-2 border-white">
          <div className="text-center text-white text-xl opacity-75">And the </div>
          <div className="text-white  text-center text-5xl">Passions</div>
          <div className="text-center text-white text-lg mt-2 opacity-50">I use my skills for</div>
        </div>
      </div>
      {windowWidth && (
        <>
          {windowWidth > 1280 ? (
            <>
              <div className="absolute">
                <Canvas
                  x1={windowWidth / 2}
                  y1={0}
                  x2={windowWidth / 2}
                  y2={1600}
                  widthP={windowWidth}
                  heightP={1600}
                  accent={0}
                  idTop={'middleTop'}
                  idBottom={'middleBottom'}
                  offset={-200}
                />
              </div>

              <ProjectSection children={<WebDev />} />
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export default Projects;
