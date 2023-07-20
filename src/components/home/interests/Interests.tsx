import { Montserrat } from 'next/font/google';
import React from 'react';
import Card from '@components/home/interests/Card';
import Head from 'next/head';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const Interests = () => {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Interest section of my personal website, mathematics, MachineLearning and Programming'
        />
      </Head>
      <section
        className={
          'w-full mt-[900px] md:mt-[1400px] xl:mt-[1000px] animate-fade-in'
        }
      >
        <h2
          className={`text-xl md:text-3xl font-semibold text-white w-full text-center mt-24 ${montserrat.className}`}
        >
          My main interests are
        </h2>
        <div
          className={
            'w-full h-full flex flex-col xl:flex-row items-center justify-center gap-32 mt-24'
          }
        >
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
            description={
              'Machine learning combines my two main interests, math and programming with the added benefit of philosophy and pragmatic thinking. It is a field I see most potential in and I see myself working in the future'
            }
            color={'blue'}
            tag={'Machine Learning'}
          />
        </div>
      </section>
    </>
  );
};

export default Interests;
