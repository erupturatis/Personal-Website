import React from 'react';
import SkillCard from '@components/home/skills/SkillCard';

type ISkillsGroupProps = {
  type: 'primary' | 'secondary' | 'tertiary';
  srcArray: string[];
};

const SkillsGroup = ({ type, srcArray }: ISkillsGroupProps) => {
  const gap = type === 'primary' ? 'gap-10' : 'gap-5';
  return (
    <div className={'w-full   text-white flex justify-center ' + gap}>
      {srcArray.map((src, index) => {
        return <SkillCard src={src} type={type} />;
      })}
    </div>
  );
};

export default SkillsGroup;
