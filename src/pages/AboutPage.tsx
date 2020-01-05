import React, { FC } from 'react';
import { Container } from 'reactstrap';

export const AboutPage: FC = () => {
  return (
    <Container>
      <h1 className="my-4 wack">About</h1>
      <article>
        <h2>About me</h2>
      </article>
      <article>
        <h2>About this website</h2>
      </article>
    </Container>
  );
};

export default AboutPage;
