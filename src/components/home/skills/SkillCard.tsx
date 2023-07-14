import React from 'react';
import Image from 'next/image';

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

  const hoverSize = 'hover:scale-110';

  return (
    <div className={'transition-all duration-200   ' + size + ' ' + hoverSize}>
      <div className={''}>
        <Image
          src={src}
          alt='picture of the skill'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: '100%' }} // optional
        />
      </div>
    </div>
  );
};

export default SkillCard;
