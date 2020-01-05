import React, { FC } from 'react';
import { Container, Row, Col } from 'reactstrap';

export const HomePage: FC = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col md={'auto'}>
          <img width="150px" className="rounded-circle" src="/images/bmiddha.jpg" alt="" />
        </Col>
        <Col>
          <h1 className="my-4 wack">Bharat Middha</h1>
          <p className="lead">Full Stack Developer</p>
          <p className="lead">DevOps Engineer</p>
          <p className="lead">Systems Administrator</p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
