import React from 'react';
import ProjectSummary from './ProjectSummary';

export default function ProjectList({ projects }) {
  return (
    <div>
      {projects &&
        projects.map(project => {
          return <ProjectSummary key={project.id} project={project} />;
        })}
    </div>
  );
}
