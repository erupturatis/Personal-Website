import React from 'react';
import BigProject from '@components/projects/BigProject';
import {
  ageOfWarAI,
  ageOfWarUnityClone,
  instagramBot,
  IProject,
  navigoLearn,
  neatManim,
  neuralAesthetics,
  neuralNetworkPlayground,
  personalWebsite,
} from '@components/projects/projects';

const BigProjectsList = () => {
  const bigProjectListL: IProject[] = [
    navigoLearn,
    neuralNetworkPlayground,
    personalWebsite,
    neatManim,
    neuralAesthetics,
    ageOfWarAI,
    ageOfWarUnityClone,
    instagramBot,
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
            key={project.title}
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
