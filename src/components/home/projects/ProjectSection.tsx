import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

type ProjectSectionProps = {
  children: React.ReactNode;
  width: number;
  height: number;
  text: string;
  grad: string;
};

const ProjectSection = ({ children, width, height, text, grad }: ProjectSectionProps) => {
  const divHandle = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (divHandle.current) {
      divHandle.current.style.width = `${width}px`;
      divHandle.current.style.height = `${height}px`;
      divHandle.current.style.marginTop = '100px';
    }
  }, []);

  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <div>
          <div className="flex justify-center ">
            <div className={` text-white  text-center text-5xl font-medium  ${grad}`}>{text}</div>
          </div>
          <div className="flex justify-center">
            <div className={` text-white  mt-24  relative `} ref={divHandle}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
