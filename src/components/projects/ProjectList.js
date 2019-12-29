import React from 'react';
import { connect } from 'react-redux';

import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  console.log(projects);
  return (
    <div>
      {projects &&
        projects.map(project => {
          return <ProjectSummary key={project.id} project={project} />;
        })}
    </div>
  );
};

export default connect()(ProjectList);
