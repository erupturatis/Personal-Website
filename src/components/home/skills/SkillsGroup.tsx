import React from 'react';
import SkillCard from '@components/home/skills/SkillCard';

type ISkillsGroupProps = {
  type: 'primary' | 'secondary' | 'tertiary';
  srcArray: string[];
};

const SkillsGroup = ({ type, srcArray }: ISkillsGroupProps) => {
  return (
    <div
      className={
        'w-full  border-2 border-white text-white flex justify-center '
      }
    >
      {srcArray.map((src, index) => {
        return <SkillCard src={src} type={type} />;
      })}
    </div>
  );
};

export default SkillsGroup;
