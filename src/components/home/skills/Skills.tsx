import React from 'react';
import SkillsGroup from '@components/home/skills/SkillsGroup';

const Skills = () => {
  const primarySkillsSrc: string[] = ['', '', '', '', '', '', '', ''];
  const secondarySkillsSrc: string[] = [];
  const tertiarySkillsSrc: string[] = [];

  return (
    <div>
      <SkillsGroup type={'primary'} srcArray={primarySkillsSrc} />
    </div>
  );
};

export default Skills;
