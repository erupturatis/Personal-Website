import React from 'react';
import BigProject from '@components/projects/BigProject';

const BigProjectsList = () => {
  type IProject = {
    title: string;
    description: string;
    githubUrl: string;
    websiteUrl: string;
    pictureUrl: string;
  };

  const bigProjectListL: IProject[] = [
    {
      title: 'NavigoLearn',
      description: `
        NavigoLearn is a community-driven platform designed to assist individuals in learning . 
        It offers curated roadmaps that are created by the community members themselves. 
        These roadmaps are visually organized data and they can be created via the editor and visualized by anyone.
        I've designed and lead the development of the platform on the frontend side but also
        contributed to the backend side.
      `,
      githubUrl: 'https://github.com/NavigoLearn',
      websiteUrl: 'https://www.google.com/',
      pictureUrl: '/winter-theme/blueice.jpg',
    },
    {
      title: 'NavigoLearn',
      description: `
        NavigoLearn is a community-driven platform designed to assist individuals in learning . 
        It offers curated roadmaps that are created by the community members themselves. 
        These roadmaps are visually organized data and they can be created via the editor and visualized by anyone.
        I've designed and lead the development of the platform on the frontend side but also
        contributed to the backend side.
      `,
      githubUrl: 'https://github.com/NavigoLearn',
      websiteUrl: 'https://www.google.com/',
      pictureUrl: '/winter-theme/blueice.jpg',
    },
    {
      title: 'NavigoLearn',
      description: `
        NavigoLearn is a community-driven platform designed to assist individuals in learning . 
        It offers curated roadmaps that are created by the community members themselves. 
        These roadmaps are visually organized data and they can be created via the editor and visualized by anyone.
        I've designed and lead the development of the platform on the frontend side but also
        contributed to the backend side.
      `,
      githubUrl: 'https://github.com/NavigoLearn',
      websiteUrl: 'https://www.google.com/',
      pictureUrl: '/winter-theme/blueice.jpg',
    },
    {
      title: 'NavigoLearn',
      description: `
        NavigoLearn is a community-driven platform designed to assist individuals in learning . 
        It offers curated roadmaps that are created by the community members themselves. 
        These roadmaps are visually organized data and they can be created via the editor and visualized by anyone.
        I've designed and lead the development of the platform on the frontend side but also
        contributed to the backend side.
      `,
      githubUrl: 'https://github.com/NavigoLearn',
      websiteUrl: 'https://www.google.com/',
      pictureUrl: '/winter-theme/blueice.jpg',
    },
    {
      title: 'NavigoLearn',
      description: `
        NavigoLearn is a community-driven platform designed to assist individuals in learning . 
        It offers curated roadmaps that are created by the community members themselves. 
        These roadmaps are visually organized data and they can be created via the editor and visualized by anyone.
        I've designed and lead the development of the platform on the frontend side but also
        contributed to the backend side.
      `,
      githubUrl: 'https://github.com/NavigoLearn',
      websiteUrl: 'https://www.google.com/',
      pictureUrl: '/winter-theme/blueice.jpg',
    },
  ];
  return (
    <div
      className={
        'w-full flex flex-wrap flex-col lg:flex-row gap-20 items-center justify-center mt-48'
      }
    >
      {bigProjectListL.map((project) => {
        return (
          <BigProject
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            websiteUrl={project.websiteUrl}
            pictureUrl={project.pictureUrl}
          />
        );
      })}
    </div>
  );
};

export default BigProjectsList;
