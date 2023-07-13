import { useEffect, useRef, useState } from 'react';

// gives the exact window width
const useWindowWidth = () => {
  const [_, setWindowWidth] = useState<number>(0);
  const windowWidthRef = useRef(0);
  let doc: HTMLElement | null = null;
  useEffect(() => {
    // using window width has some errors but the html element doesn't
    const setWidth = (width: number) => {
      setWindowWidth(width);
      windowWidthRef.current = width;
    };
    doc = document.querySelector('html');
    if (doc) {
      setWidth(doc.getBoundingClientRect().width);
    }
    window.addEventListener('resize', () => {
      if (!doc) return;
      setWidth(doc.getBoundingClientRect().width);
    });
  }, []);
  return windowWidthRef;
};

export default useWindowWidth;
