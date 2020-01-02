import React, { FC } from 'react';
import { Container } from 'reactstrap';

export const AboutPage: FC = () => {
  return (
    <Container>
      <h1 className="my-4">About</h1>
      <ul>
        <li>Full Stack Developer</li>
        <li>
          Computer Science student at{' '}
          <a href="https://cs.uic.edu" target="_blank" rel="noopener noreferrer">
            University of Illinois at Chicago
          </a>
        </li>
        <li>
          <a
            href="https://careers.microsoft.com/students"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft
          </a>{' '}
          Intern
        </li>
        <li>Ametur Musician</li>
      </ul>
    </Container>
  );
};

export default AboutPage;
