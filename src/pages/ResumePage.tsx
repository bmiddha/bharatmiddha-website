import React, { FC, useState } from 'react';
import { Row, Col } from 'reactstrap';
import { Container, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Resume from '../components/Resume';
import ResumePdf from '../components/ResumePdf';

export const ResumePage: FC = () => {
  const [genPdf, setGenPdf] = useState(false);
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1 className="wack">Resume</h1>
        </Col>
        <Col>
          <div className="resume-align-right">
            {genPdf ? (
              <ResumePdf />
            ) : (
              <Button color="info" onClick={() => setGenPdf(!genPdf)}>
                Generate PDF <FontAwesomeIcon icon={faFilePdf} />
              </Button>
            )}
          </div>
        </Col>
      </Row>
      <Resume />
    </Container>
  );
};

export default ResumePage;
