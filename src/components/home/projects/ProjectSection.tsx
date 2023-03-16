import React from 'react';

type ProjectSectionProps = {
  children: React.ReactNode;
};
const ProjectSection = ({ children }: ProjectSectionProps) => {
  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <div>
          <div className="flex justify-center ">
            <div className="text-white w-[500px] text-center text-5xl  border-2 border-white">Web development</div>
          </div>
          <div className="flex justify-center">
            <div className="text-white w-[500px] mt-24 h-[500px]  relative">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
