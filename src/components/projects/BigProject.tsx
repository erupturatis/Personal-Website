import React from 'react';
import Image from 'next/image';

type IProject = {
  title: string;
  description: string;
  githubUrl: string;
  websiteUrl: string;
  pictureUrl: string;
};

const ConsoleNavbar = ({
  githubUrl,
  websiteUrl,
}: {
  githubUrl: string;
  websiteUrl: string;
}) => {
  const srcGithub = '/socials/github.png';
  const srcWebsiteLink = '/link.png';
  return (
    <div
      className={
        'w-full border-b-[1px] border-white border-opacity-30 flex relative'
      }
    >
      <div className={'flex gap-4 py-3 pl-6'}>
        <div className={'w-4 h-4 rounded-full bg-red-500'} />
        <div className={'w-4 h-4 rounded-full bg-yellow-500'} />
        <div className={'w-4 h-4 rounded-full bg-green-500'} />
      </div>
      <div className={'h-10 w-[1px] bg-white bg-opacity-30 ml-4 '} />
      <h3
        className={
          'text-base md:text-lg text-white text-opacity-70  w-20 h-10 flex  justify-center items-center '
        }
      >
        bash
      </h3>

      <div className={'h-10 w-[1px] bg-white bg-opacity-30  '} />
      <div className={'absolute right-5 flex gap-3 md:gap-6 '}>
        <a
          href={websiteUrl}
          className={'text-md text-white text-opacity-40 mt-2'}
        >
          <Image
            src={srcWebsiteLink}
            alt={'Website Project Link'}
            width={25}
            height={25}
          />
        </a>
        <a
          href={githubUrl}
          className={'text-md text-white text-opacity-40 mt-2'}
        >
          <Image src={srcGithub} alt={'github link'} width={25} height={25} />
        </a>
      </div>
    </div>
  );
};

const ConsoleBody = ({
  title,
  description,
  githubUrl,
}: {
  title: string;
  description: string;
  githubUrl: string;
}) => {
  return (
    <a href={githubUrl}>
      <section className={'w-full relative flex-grow'}>
        <h2
          className={
            'w-full flex text-lg md:text-xl justify-center text-white mt-4'
          }
        >
          ~ {title}
        </h2>
        <section className={'ml-4'}>
          <h3 className={'text-base lg:text-lg text-white text-opacity-60  '}>
            ./description
          </h3>
          <h6 className={'text-sm lg:text-md text-white text-opacity-40 mt-2'}>
            {description}
          </h6>
        </section>
      </section>
    </a>
  );
};

const PhotoPreview = ({ pictureUrl }: { pictureUrl: string }) => {
  return (
    <div
      className={
        ' opacity-0 transition-opacity duration-200 group-hover:opacity-100  '
      }
    >
      <Image
        src={pictureUrl}
        alt={'Picture of the project'}
        height={550}
        width={324}
      />
    </div>
  );
};

const BigProject = ({
  title,
  description,
  githubUrl,
  websiteUrl,
  pictureUrl,
}: IProject) => {
  return (
    <article
      className={
        ' w-[300px] lg:w-[550px] h-96 group border-[1px] border-white relative border-opacity-30 bg-black rounded-2xl flex flex-col'
      }
    >
      <ConsoleNavbar githubUrl={githubUrl} websiteUrl={websiteUrl} />
      <ConsoleBody
        title={title}
        description={description}
        githubUrl={githubUrl}
      />
      <section className={'absolute -bottom-56 hidden lg:block'}>
        <PhotoPreview pictureUrl={pictureUrl} />
      </section>
    </article>
  );
};

export default BigProject;
