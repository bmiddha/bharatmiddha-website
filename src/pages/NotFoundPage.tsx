import React, { FC } from 'react';
import { Container } from 'reactstrap';

export const NotFoundPage: FC = () => {
  return (
    <Container>
      <h1 className="my-4 wack text-danger">404 Not Found</h1>
      <a href="/">Navigate Home</a>
    </Container>
  );
};

export default NotFoundPage;
