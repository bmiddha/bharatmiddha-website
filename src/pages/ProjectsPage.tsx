import React, { FC } from 'react';
import ProjectsList from '../components/ProjectsList';
import { Container } from 'reactstrap';

export const ProjectsPage: FC = () => {
  return (
    <Container>
      <h1 className="my-4 wack">Projects</h1>
      <ProjectsList />
    </Container>
  );
};

export default ProjectsPage;
