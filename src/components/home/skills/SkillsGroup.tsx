import React from 'react';
import SkillCard from '@components/home/skills/SkillCard';

type ISkillsGroupProps = {
  type: 'primary' | 'secondary' | 'tertiary';
  srcArray: string[];
  srcPrefix: string;
};

const SkillsGroup = ({ type, srcArray, srcPrefix }: ISkillsGroupProps) => {
  const gap = type === 'primary' ? 'gap-5 lg:gap-10' : 'gap-3 md:gap-5';
  return (
    <div className={'w-full  text-white flex flex-wrap justify-center ' + gap}>
      {srcArray.map((src, index) => {
        return <SkillCard key={src} src={`${srcPrefix}/${src}`} type={type} />;
      })}
    </div>
  );
};

export default SkillsGroup;
