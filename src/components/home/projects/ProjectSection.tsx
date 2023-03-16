import React from 'react';

type ProjectSectionProps = {
  children: React.ReactNode;
};
const ProjectSection = ({ children }: ProjectSectionProps) => {
  return (
    <div>
      <div className="w-full h-[1500px] flex justify-center items-center">
        <div className="flex justify-center ">
          <div className="text-white w-[500px] text-center text-5xl mr-48 border-2 border-white">Web development</div>
          <div className="text-white w-[500px] mt-[-200px] ml-48 h-[500px]  relative">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
