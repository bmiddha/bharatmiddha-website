import React, { FC } from 'react';
import { Row, Col } from 'reactstrap';
import { Container } from 'reactstrap';
import Resume from '../components/Resume';
import ResumePdf from '../components/ResumePdf';

export const ResumePage: FC = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1 className="wack">Resume</h1>
        </Col>
        <Col>
          <div className="clearfix">
            <div className="float-right">
              <ResumePdf />
            </div>
          </div>
        </Col>
      </Row>
      <Resume />
    </Container>
  );
};

export default ResumePage;
