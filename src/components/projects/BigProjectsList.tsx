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
        NavigoLearn is a community-driven startup designed to help people learn. 
        It is centered around the concept of roadmaps, which are visually organized data.
        Roadmaps can be created by anyone via the editor and be visualized by anyone who enters the website and wants to learn.
        I've designed and lead the development of the platform on the frontend side but also
        contributed to the backend side.
      `,
      githubUrl: 'https://github.com/NavigoLearn',
      websiteUrl: 'https://navigolearn.com/',
      pictureUrl: '/projects/navigoLearn.png',
    },
    {
      title: 'Neural Network Playground',
      description: `
        Neural Network Playground is an interactive website that allows you to customize,
        train, and visualize changes in neural networks as they learn. You can upload your own datasets,
        modify network parameters, and observe the network's progress in real-time. 
        It is a pet project I made alone but I am quite proud of it even if it is not perfect.
      `,
      githubUrl: 'https://github.com/erupturatis/NeuralNetworkPlayground',
      websiteUrl: '',
      pictureUrl: '/projects/img_2.png',
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
