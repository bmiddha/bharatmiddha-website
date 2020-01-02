import React, { FC } from 'react';
import { Container } from 'reactstrap';
import Resume from '../components/Resume';

export const ResumePage: FC = () => {
  return (
    <Container>
      <h1 className="my-4">Resume</h1>
      <Resume />
    </Container>
  );
};

export default ResumePage;
