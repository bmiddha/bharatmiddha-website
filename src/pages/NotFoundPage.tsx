import React, { FC } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export const NotFoundPage: FC = () => {
  return (
    <Container>
      <h1 className="my-4 wack text-danger">404 Not Found</h1>
      <Link to="/">Navigate Home</Link>
    </Container>
  );
};

export default NotFoundPage;
