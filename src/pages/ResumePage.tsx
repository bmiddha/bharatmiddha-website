import React, { FC, useState } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Container } from 'reactstrap';
import ResumeDom from '../components/ResumeDom';
import ResumePdf from '../components/ResumePdf';

export const ResumePage: FC = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const [renderPdf, setRenderPdf] = useState<boolean>(
    urlSearchParams.has('format') && urlSearchParams.get('format') === 'pdf'
  );
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1 className="wack">Resume</h1>
        </Col>
        <Col>
          <div className="clearfix">
            <Button className="float-right" onClick={() => setRenderPdf(!renderPdf)}>
              Render {renderPdf ? 'HTML' : 'PDF'}
            </Button>
          </div>
        </Col>
      </Row>
      {renderPdf ? <ResumePdf /> : <ResumeDom />}
    </Container>
  );
};

export default ResumePage;
