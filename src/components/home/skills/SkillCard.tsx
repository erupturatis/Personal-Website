import React from 'react';
import Image from 'next/image';

type ISkillCardProps = {
  src: string;
  type: 'primary' | 'secondary' | 'tertiary';
  callback: (src: string) => void;
};
const SkillCard = ({ src, type, callback }: ISkillCardProps) => {
  const size =
    type === 'primary'
      ? 'w-12 h-12 lg:w-32 lg:h-32'
      : type === 'secondary'
      ? 'w-8 h-8 lg:w-24 lg:h-24'
      : 'w-6 h-6 lg:w-16 lg:h-16';

  const hoverSize = 'hover:scale-110';

  return (
    <div className={'transition-all duration-200 ' + size + ' ' + hoverSize}>
      <button
        onClick={() => {
          callback(src);
        }}
        onMouseEnter={() => {
          callback(src);
        }}
      >
        <Image
          src={src}
          alt='picture of the skill'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: '100%', borderRadius: '15%' }} // optional
        />
      </button>
    </div>
  );
};

export default SkillCard;
