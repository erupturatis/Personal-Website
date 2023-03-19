import React from 'react';
import { useState, useEffect } from 'react';
import Canvas from '../top/Canvas';
import WebDev from './WebDev';
import ProjectSection from './ProjectSection';
import MachineLearning from './MachineLearning';

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
              <div className="relative">
                <Canvas x1={windowWidth / 2} y1={0} x2={windowWidth / 2} y2={800} widthP={windowWidth} heightP={800} accent={0} offset={-200} />
              </div>

              <ProjectSection width={500} height={500} text={'Web Development'} children={<WebDev widthP={1000} heightP={1000} />} />

              <div className="relative">
                <Canvas x1={windowWidth / 2} y1={0} x2={windowWidth / 2} y2={800} widthP={windowWidth} heightP={800} accent={0} offset={-200} />
              </div>
              <ProjectSection width={800} height={500} text={'Deep Learning'} children={<MachineLearning />} />
              <div className="relative">
                <Canvas x1={windowWidth / 2} y1={0} x2={windowWidth / 2} y2={800} widthP={windowWidth} heightP={800} accent={0} offset={-200} />
              </div>
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
