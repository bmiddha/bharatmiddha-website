import React, { FC } from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'reactstrap';

export const HomePage: FC = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col md={'auto'}>
          <Image
            layout="fixed"
            width={150}
            height={150}
            className="rounded-circle"
            src="/images/bmiddha.jpg"
            alt="Photo of Bharat"
          />
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
