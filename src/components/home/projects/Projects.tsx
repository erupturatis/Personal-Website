import React from 'react';
import { useState, useEffect } from 'react';
import Canvas from '../top/Canvas';

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
    <div>
      <div className="w-64 h-64 bg-white"></div>
      {/* <Canvas /> */}
    </div>
  );
};

export default Projects;
