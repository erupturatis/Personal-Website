import { Montserrat } from 'next/font/google';
import React from 'react';
import Card from '@components/home/interests/Card';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const Interests = () => {
  return (
    <div className={'w-full mt-[500px]  '}>
      <div
        className={
          'text-3xl font-semibold text-white w-full text-center mt-24 ' +
          montserrat.className
        }
      >
        My main interests are
      </div>
      <div className={'w-full h-full flex justify-center gap-32 mt-24'}>
        <Card
          title={'Mathematics'}
          description={
            '\n' +
            "Math, to me, is more than just rules and formulas—it's a philosophy that mirrors the essence of reality. Since childhood, I've cherished and embraced math's beauty, seeing its deep connection to everything around us"
          }
          color={'green'}
          tag={'Mathematics'}
        />
        <Card
          title={'Programming'}
          description={
            'Programming was always in my life in some shape or form. I loved bringing ideas to life and pushing my boundaries. I ended up creating several visualizations and interactive websites you can find in the projects section'
          }
          color={'purple'}
          tag={'Programming'}
        />
        <Card
          title={'Machine Learning'}
          description={'cea'}
          color={'blue'}
          tag={'Machine Learning'}
        />
      </div>
    </div>
  );
};

export default Interests;
