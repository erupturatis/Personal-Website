import React from 'react';

type ISkillCardProps = {
  src: string;
  type: 'primary' | 'secondary' | 'tertiary';
};
const SkillCard = ({ src, type }: ISkillCardProps) => {
  const size =
    type === 'primary'
      ? 'w-32 h-32'
      : type === 'secondary'
      ? 'w-24 h-24'
      : 'w-16 h-16';

  const hoverSize =
    type === 'primary'
      ? 'w-40 h-40'
      : type === 'secondary'
      ? 'w-32 h-32'
      : 'w-24 h-24';

  return (
    <div className={'transition-all duration-200 ' + size + ' ' + hoverSize}>
      <img src={src} alt={type + ' skill'} />
    </div>
  );
};

export default SkillCard;
