import { useEffect, useRef } from 'react';
import { useState } from 'react';
import React from 'react';

type CanvasProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  widthP: number;
  heightP: number;
  accent: number;
  offset?: number;
};

const Canvas = ({ x1, y1, x2, y2, widthP, heightP, accent, offset }: CanvasProps) => {
  const [width, setWidth] = useState(widthP);
  const stop = useRef(false);
  const wrapper = useRef<HTMLDivElement>(null);
  const currentWidth = useRef(widthP);

  const [animId, setAnimId] = useState<number>(0);
  const [listener, setListener] = useState<EventListener | null>(null);

  const refX1 = useRef(x1);
  const refY1 = useRef(y1);
  const refX2 = useRef(x2);
  const refY2 = useRef(y2);

  const refDivTop = useRef<HTMLDivElement>(null);
  const refDivBottom = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const refAccent = useRef(accent);

  const clipLine = useRef(0);

  function addEventListenerRef(event: string, cb: () => void) {
    window.addEventListener(event, cb);
    return cb;
  }

  function scrollCalculator() {
    const handleScroll = (topY: number, bottomY: number) => {
      const scroll = window.scrollY + (window.innerHeight * 1) / 2;
      // getting element with id huskyScrollTop absolute coordinates
      if (scroll > topY && scroll < bottomY) {
        clipLine.current = ((scroll - topY) / (bottomY - topY)) * 100;
      }
    };
    // gets coordinates of huskyScrollTop and huskyScrollBottom elements
    const huskyScrollTop = refDivTop.current;
    const huskyScrollBottom = refDivBottom.current;
    let topY = 0;
    let bottomY = 0;

    if (offset === undefined || offset === null) {
      offset = 0;
    }

    if (huskyScrollTop && huskyScrollBottom) {
      topY = huskyScrollTop.getBoundingClientRect().top + window.scrollY + offset;
      bottomY = huskyScrollBottom.getBoundingClientRect().top + window.scrollY + offset;
    }
    // adds event listener for scroll
    let cb = addEventListenerRef('scroll', () => {
      handleScroll(topY, bottomY);
    });
    setListener(cb);
  }

  function startAnimation() {
    // creates a line from the element with id huskyScrollTop to the element with id huskyScrollBottom
    const lineCanvas = canvasRef.current as HTMLCanvasElement;
    const ctx = lineCanvas.getContext('2d');
    if (!ctx) return 0;
    // function to draw line from x1, y1 to x2, y2
    const drawLine = (x1: number, y1: number, x2: number, y2: number, accent: number) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.quadraticCurveTo((x2 + x1) / 2 - accent, (y2 + y1) / 2 - accent, (x2 + x1) / 2, (y2 + y1) / 2);
      ctx.quadraticCurveTo((x2 + x1) / 2 + accent, (y2 + y1) / 2 + accent, x2, y2 - 20);
      ctx.strokeStyle = 'white';
      ctx.stroke();
      //make line white
    };

    const redraw = () => {
      ctx.clearRect(0, 0, width, heightP);
      drawLine(refX1.current, refY1.current, refX2.current, refY2.current, refAccent.current);
      ctx.fillStyle = '#0d0d0e';
      if (clipLine.current > 0) {
        //@ts-ignore
        ctx.fillRect(0, (heightP * clipLine.current) / 100, width, heightP);
      } else {
        ctx.fillRect(0, 0, width, heightP);
      }
      requestAnimationFrame(redraw);
    };

    let id = requestAnimationFrame(redraw);
    setAnimId(id);
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Run your async JavaScript code here
          scrollCalculator();
          startAnimation();
        } else {
          if (listener) window.removeEventListener('scroll', listener);
          // stops animation
          cancelAnimationFrame(animId);
        }
      });
    });
    if (wrapper.current) observer.observe(wrapper.current);
    else throw new Error('wrapper.current is null');

    return () => {
      if (listener) window.removeEventListener('scroll', listener);
      // stops animation
      cancelAnimationFrame(animId);
      console.log('unmounted component');
    };
  }, []);

  useEffect(() => {
    // when width changes updates coordinates refs
    refX1.current = x1;
    refY1.current = y1;
    refX2.current = x2;
    refY2.current = y2;
    refAccent.current = accent;
  }, [widthP]);

  return (
    <div ref={wrapper}>
      <div ref={refDivTop} />
      <canvas ref={canvasRef} width={widthP} height={heightP} className="relative z-[-40]" />
      <div ref={refDivBottom} />
    </div>
  );
};

export default Canvas;
