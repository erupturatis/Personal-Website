import React from 'react';
import BigProjectsList from '@components/projects/BigProjectsList';
import SmallProjectsList from '@components/projects/SmallProjectsList';

const Projects = () => {
  return (
    <div>
      <BigProjectsList />
      <SmallProjectsList />
    </div>
  );
};

export default Projects;
